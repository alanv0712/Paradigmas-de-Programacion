const app = Vue.createApp({
    data() {
        return {
            contador: 4
        }
    },
})

app.component('counter-button', {
    data() {
        return {
            contador: 2
        }
    },

    template: `
        {{contador}}
        <button @click="contador++">Aumentar</button>
    `
})

const vm = app.mount('#app')