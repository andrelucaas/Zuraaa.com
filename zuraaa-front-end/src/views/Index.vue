<template lang="pug">
    BotCard
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BotCard from '../components/BotCard.vue'


@Component({
    components: {
        BotCard
    }
})
export default class Index extends Vue{}
</script>