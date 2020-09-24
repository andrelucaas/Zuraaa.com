<template lang="pug">
    .bot-card
        .bot-image
            .avatar
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class BotCard extends Vue {    
}
</script>

<style scoped>
    .bot-card{
        background-color: white;
        margin: 10px;
        border: 1px solid rgb(0, 0, 0, 0.2);
        box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.6);
        height: 230px;
    }

        .bot-card > .bot-image{
            min-width: 80px;
            height: 100%;
            background-color: aquamarine;
            max-width: 25%;
            box-shadow: 1px 0 3px 0 black;
        }

            .bot-card > .bot-image > .avatar{

            }


</style>