<template lang="pug">
    .index
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard
        BotCard

</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BotCard from '../components/generic-itens/BotCard.vue'


@Component({
    components: {
        BotCard
    }
})
export default class Index extends Vue{
}
</script>

<style scoped>
    .index{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>