<template lang="pug">
    a.card-button(:title="title" :href="url")
        span(:style="{'background-color': spanColor}")
        p {{title}}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class TagsButtons extends Vue{
    @Prop()
    public title!: string

    @Prop()
    public color!: string

    @Prop()
    public url!: string

    private spanColor!: string

    private created(){
        this.spanColor = this.color || 'darkgrey'
    }
}
</script>


<style scoped>
    .card-button{
        display: inline-block;
        background-color: lightgray;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        transition-duration: 100ms;
        margin-right: 5px;

    }

        .card-button:hover{
            transform: scale(1.1);
        }

        .card-button > span {
            width: 5px;
            height: 30px;
            position: absolute;
        }

        .card-button > p {
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 1px;
            color: dimgray;
            font-size: 14px;
        }
</style>