<template>
    <v-container>
        <GameBoard></GameBoard>
    </v-container>
    
</template>

<script>

import GameBoard from "../components/GameBoard";

export default {

    data(){

        return {

        }

    },
    computed: {

    },
    watch: {
        
    },
    components: {
        GameBoard
    },
    created(){

    }
}

</script>

<style>

body {
    background: url("../assets/images/background.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>