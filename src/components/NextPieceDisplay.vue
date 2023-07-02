<template>

    <div class="bg-color-light-gray next-piece-display">

        <p class="header">NEXT</p>

        <div class="pa-5 bg-color-light-gray">
            <canvas id="canvas-next-piece" class="piece-placeholder" width="120" height="110">
            </canvas>
        </div>

    </div>

</template>

<script>
import {drawTetrimino} from "../common/functions";
import {PIECE} from "../common/constants";

export default {

    props: {
        piece: null
    },
    data(){

        return {
            next_piece: null
        }

    }, 
    computed: {

    },
    watch: {

    },
    created(){
        this.PIECE = PIECE;
        this.next_piece = PIECE.TYPE.TETRIMINO_RED_UP;
    },
    mounted(){
        const canvas = document.getElementById("canvas-next-piece");
        let context = canvas.getContext("2d");
        drawTetrimino(context, this.next_piece, PIECE.WIDTH, 10);
    }

}

</script>

<style scoped>

/**{
  outline: solid 0.15rem rgba(18, 243, 37, 0.5);
} */

.header{
background-color: #0080ff;
border-bottom: 1px solid black;
color:black;
font-family: 'Sans-Serif';
}

.bg-color-light-gray{
background-color: LightGrey;
}

.next-piece-display {
border: 1px solid black;
}

.piece-placeholder {
    background-color: black;
    
}

</style>