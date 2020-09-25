<template lang="pug">
    .bot-card
        .bot-image
            .avatar
                i.fas.fa-expand-alt
        .details
            p.heading(title="Tags") Economia | ??? Servidores | ??? Votos
            p.title.is-size-4(title="Kurosawa Diaaaaaa")
                img(title="Online" src="../../assets/imgs/icons/online.png")
                | Kurosawa Diaaaaaaa
            p.subtitle.is-size-6(title="Descrição") Daora man kkkk Daora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkkDaora man kkkk
            .links
                TagButtons(title="Página")
                TagButtons(title="Adicionar")
                TagButtons(title="Votar")

</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import TagButtons from './TagButtons.vue'

@Component({
    components: {
        TagButtons
    }
})
export default class BotCard extends Vue {    
}
</script>

<style scoped>
    .bot-card{
        background-color: white;
        margin: 0.5%;
        border: 1px solid rgb(0, 0, 0, 0.2);
        box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.6);
        height: 240px;
        display: flex;
        flex-direction: row;
        width: calc((100% / 3) - 1%);
        min-width: 280px;
    }

        .bot-card > .bot-image{
            --durarion: 300ms;
            min-width: 80px;
            background-image: url("https://cdn.discordapp.com/avatars/274289097689006080/a_c02999749879717c98cb1bf3df6c6615.gif?size=1024");
            background-position: center;
            background-size: cover;
            height: 100%;
            transition-duration: var(--durarion);
            max-width: 25%;
            border-right: solid 1px rgb(0, 0, 0, 0.2);
        }


            .bot-card > .bot-image:hover{
                transform: scale(1.05);
                transition-duration: var(--durarion);
            }

            .bot-card > .bot-image > .avatar {
                --size: 100%;
                display: flex;
                height: var(--size);
                width: var(--size);
                justify-content: center;
                align-items: center;
                transition-duration: var(--durarion);
            }

            .bot-image:hover .avatar{
                background-color: rgb(0, 0, 0, 0.5);
                transition-duration: var(--durarion);
            }

                .bot-card > .bot-image > .avatar > .fa-expand-alt {
                    font-size: 30px;
                    color: rgb(255, 255, 255, 0);
                    transition-duration: var(--durarion);
                }

                    .bot-card > .bot-image:hover .fa-expand-alt{
                        color: rgb(255, 255, 255, 1);
                        transition-property: var(--durarion);
                    }

    .details{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
    }

        .details > .title{
            align-items: center;
            display: flex;
        }

            .details > .title > img {
                width: 26px;
                min-width: 26px;
            }

        .details > .subtitle {
            overflow: scroll;
            min-height: 40px;
            margin-top: -15px !important;
            margin-bottom: 0;
            min-height: 135px;
        }

        .details > .links{
            align-self: flex-end;
            margin-top: 5px;
        }
</style>