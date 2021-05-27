<template>
  <div>

    <h1 class="display-3">Biblioteca</h1>

  <div class="topMargin">
    <form @submit.prevent="estatusEditar ? actualizarLibro() : crearLibros()">
      <div class="row">
        <div class="col">
          <input class="form-control" type="text" v-model="titulo" placeholder="Titulo del Libro">
        </div>

        <div class="col">
          <input class="form-control" type="text" v-model="autor" placeholder="Autor del Libro">
        </div>
        <div class="col">
          <button class="btn btn-success buttonMargin" type="submit">{{ estatusEditar ? "Editar Libro": "Agregar Libro"}}</button>
        
          <button class="btn btn-success" v-if="estatusEditar" @click="estatusEditar= false, titulo ='', autor=''" >Cancelar</button>
        </div>
      </div>
    </form>
  </div>

    <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" v-if="cargando">

    <div class="topMargin">

      <ul class="list-group-flush"> 
        <li class="list-group-item" v-for="book in books" :key="book.id">
          <p><strong>Titulo:</strong> <em>{{book.titulo}}</em></p> <p><strong>Autor:</strong> <em>{{book.autor}}</em></p> 
          <button class="btn btn-danger buttonMargin" @click="eliminarLibro(book)">Eliminar</button>
          <button class="btn btn-warning buttonMargin" @click="editarLibro(book)">Editar</button>
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
      books: [],
      id: "",
      titulo: "",
      autor: "",
      cargando: false,
      estatusEditar: false
    }
  },
  created() {
    this.listarLibros();
  },
  methods: {
    async listarLibros(){
      this.cargando = true;
      const data = await db.collection("books").get();
      this.books = data.docs.map(doc => ({
        id: doc.id, ...doc.data()
      }))
      this.cargando = false
    
    },
    async crearLibros(){
      await db.collection('books').add(
        {
          titulo: this.titulo,
          autor: this.autor
        }
      )
      this.titulo = ""
      this.autor = ""
      this.listarLibros()
    },
    editarLibro(book){
      this.estatusEditar = true
      this.id = book.id
      this.titulo = book.titulo
      this.autor = book.autor

    },
    async eliminarLibro(book){
      if(confirm(`Estas seguro que deseas eliminar ${book.titulo}`)){
      await db.collection('books').doc(book.id).delete();
      this.estatusEditar = false
      this.titulo = ""
      this.autor = ""
      this.listarLibros()
      }
    },
    async actualizarLibro(){
      await db.collection('books').doc(this.id).set(
        {
          autor: this.autor,
          titulo: this.titulo
        }
      )
      this.estatusEditar = false
      this.id = ""
      this.titulo = ""
      this.autor = ""
      this.listarLibros()
    }
  },

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
