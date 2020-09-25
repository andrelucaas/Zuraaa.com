<template lang="pug">
    nav.navbar(role="navgation" aria-label="main-navigation" :class="{'tranparent': isScroll}")
        .container
            .navbar-brand
                a.navbar-item(href="#/")
                    img(src="../assets/imgs/logo.png" alt="Logo do bots para discord" width="65px" height="65px")
            
                a.navbar-burger(role="button" aria-label="menu" aria-expanded="false" :class="{'is-active': isCompact}" @click="switchCompact" data-target="navbar-content")
                    span
                    span
                    span
            #navbar-content.navbar-menu(:class="{'is-active': isCompact}")
                .navbar-start
                    a.navbar-item(href="#/")
                        |Início
                    a.navbar-item(href="#/")
                        |Bots 
                    a.navbar-item(href="#/")
                        |Servidor
                    a.navbar-item(href="#/")
                        |Documentação
                    a.navbar-item(href="#/")
                        |Buscar
                .navbar-end
                    a.navbar-item(href="#/")
                        |Logar
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Navbar extends Vue{
    private isCompact = false
    private isScroll = false

    private created(){
        window.addEventListener("scroll", this.onScroll)
    }

    private switchCompact(){
        this.isCompact = !this.isCompact
    }

    private onScroll(){
        if(window.scrollY > 18){
            this.isScroll = true
        }else{
            this.isScroll = false
        }
    }

}
</script>

<style scoped>
    .navbar{
        background-color: #490e2d;
        box-shadow: 0 4px #710f4b;
        position: sticky;
        top: 0;
    }

        .navbar-burger > span {
            color: white;
        }

    .tranparent {
        background-color: rgb(0, 0, 0, 0.7);
        transition-duration: 500ms;
    }

    .navbar-item{
        color: white;
    }

        .navbar-item:hover{
            color: black;
            transition-duration: 300ms;
        }

    .navbar-start {
        justify-content: center;
        width: 100%;
    }

    @media screen and (max-width: 1023px){
        .navbar-menu{
            background-color: rgb(0, 0, 0, 0.6);
        }
    }

    .navbar-end > .navbar-item{
        min-width: 100px;
        justify-content: center;
    }
</style>