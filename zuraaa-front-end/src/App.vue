<template lang="pug">
    #app
        Navbar
        .container
            router-view
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Navbar from './components/Navbar.vue'

@Component({
    components: {
        Navbar
    }
})
export default class App extends Vue{}
</script>

<style scoped>
    .container{
        margin-top: 20px;
    }
</style>

<style>
    html{
        background-color: whitesmoke !important;
    }
</style>