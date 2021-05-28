<template>
  <div class="container">
    
    
    <h1>Smart Home</h1>
    <form @submit.prevent="estatusEditar ? actualizarLugar() : crearLugares()">
      <div class="form-group">
        <div class="row">
          <div class="col-md-4">
            <label for="lugarInput">Lugar</label>
            <input type="text" class="form-control" v-model="lugar" placeholder="e.g Cocina">
          </div>

          <div class="col-md-4">
            <label for="estatusInput">Estatus</label>
            <select class="form-control">
              <option value="0">Seleccione una opcion</option>
              <option value="1">Encendido</option>
              <option value="2">Apagado</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="tipoInput">Tipo de Luz</label>
            <select class="form-control">
              <option value="0">Seleccione una opcion</option>
              <option value="1">Luz Calida</option>
              <option value="2">Luz Fria</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <button class="btn btn-primary text-center" type="submit">{{estatusEditar ? "Editar Lugar" : "Agregar Lugar"}}</button>
        <button class="btn btn primary" v-if="estatusEditar" @click="estatusEditar = false, lugar=''">Cancelar</button>
      </div>
    </form>
    <div>
      <ul class="list-group-flush">
        <li class="list-group-item" v-for="foco in focos" :key="foco.id">
          <p><strong>Lugar:</strong> <em>{{foco.lugar}}</em> </p>

          <button class="btn btn-danger" @click="eliminarLugar(foco)">Eliminar</button>
          <button class="btn btn-warning" @click="editarLugar(foco)">Editar</button>
         
        </li>

      </ul>

    </div>

  </div>
  
</template>

<script>

import {db} from './firebase'
export default {
  name: 'App',
  data() {
    return {
      focos: [],
      id: "",
      lugar: "",
      tipo: "",
      estatus: false,
      cargando: false,
      estatusEditar: false
    }
  },

 

  created() {
    this.listarLugares()
  },

  methods: {
    async listarLugares(){
      this.cargando = true
      const data = await db.collection("focos").get()
      this.focos = data.docs.map(doc =>({
        id: doc.id, ...doc.data()
      }))
      this.cargando = false
    },

    async crearLugares(){
      await db.collection('focos').add({
        lugar: this.lugar,
        // tipo: this.tipo,
        // estatus: this.estatus
      })
      this.lugar =""
      // this.tipo = ""
      // this.estatus = ""
      this.listarLugares()
    },
  

  editarLugar(foco){
    this.estatusEditar = true
    this.id = foco.id
    this.lugar = foco.lugar
    // this.tipo = foco.tipo
    // this.estatus = foco.estatus
  },
  async eliminarLugar(foco) {
    if(confirm(`Estas seguro que deseas eliminar ${foco.lugar}`)){
      await db.collection('focos').doc(foco.id).delete()
      this.estatusEditar = false
      this.lugar = ""
      // this.tipo = ""
      // this.estatus = ""
      this.listarLugares()
    }
  },

  async actualizarLugar(){
    await db.collection('focos').doc(this.id).set({
      lugar: this.lugar,
      tipo: this.tipo,
      estatus: this.tipo
    })
    this.estatusEditar = false
    this.id = ""
    this.lugar = ""
    this.tipo = ""
    this.estatus = ""
    this.listarLugares()
  },
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
