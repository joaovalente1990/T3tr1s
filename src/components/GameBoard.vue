<template>

        <div class="bg-color-gray pa-5">
            
                <v-row>
                    <v-col>
                        <div class="bg-color-light-gray pl-5 pr-5 pt-5 pb-3">
                            <canvas id="canvas" width="300" height="660"></canvas> <!--piece w/h 30, rows 22, width 10 -->
                            <img id="logo" style="display:none" :src="require('../assets/images/logo.jpg')">
                        </div>   
                    </v-col>
                    <v-col class="bg-color-gray" id="rightPanel">
                        <div style="width:160px; height: 660px">
                            <NextPieceDisplay :piece="piece"></NextPieceDisplay>
                            <img class="mt-3 imgPalace" :src="require('../assets/images/palace.png')">
                            <div class="mb-0 pb-0">
                                <CounterDisplay text="SCORE" :value="score"></CounterDisplay>
                                <CounterDisplay text="LEVEL" :value="level"></CounterDisplay>
                                <CounterDisplay text="LINES" :value="lines"></CounterDisplay>
                            </div>
                        </div>
                    </v-col>
                 </v-row>    
        </div>

</template>

<script>

import CounterDisplay from "./CounterDisplay";
import NextPieceDisplay from "./NextPieceDisplay";
import {PIECE, BTN} from "../common/constants";
import {drawTetrimino, drawButton} from "../common/functions";

export default {
    props: {
        next_piece: null,
        current_piece: null
    },
    data(){

        return {
            score: 0,
            level: 0,
            lines: 0,
            piece: null,
            btnPlay: { 
                        x: 30,
                        y: 240,
                        width: 250,
                        height: 60,
                      },
            btnStats: {
                        x: 30,
                        y: 320,
                        width: 250,
                        height: 60,
                       }
        }

    },
    computed: {

    },
    watch: {

    }, 
    components: {
        CounterDisplay,
        NextPieceDisplay
    },
    methods: {
        getMousePos(canvas, event) {

            var boundingRect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - boundingRect.left,
                y: event.clientY - boundingRect.top,
            };
        },
        isInside(pos, rect) {
            return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
        },
        
    },
    created(){
        this.PIECE = PIECE;
    },
    mounted(){
        const canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        let img = document.getElementById("logo");

        let vm = this;

        canvas.addEventListener('click', function(evt) {
            var mousePos = vm.getMousePos(canvas, evt);

            if (vm.isInside(mousePos, vm.btnPlay)) {
                // TODO add logic
            } else if (vm.isInside(mousePos, vm.btnStats)){
                // TODO add logic
            }

        }, false);

        img.addEventListener("load", () => {
            context.drawImage(img, 20, 20, 260, 90);
        });

        drawTetrimino(context, PIECE.TYPE.TETRIMINO_CYAN_VERTICAL, 9*PIECE.WIDTH, 16*PIECE.HEIGHT);
        drawTetrimino(context, PIECE.TYPE.TETRIMINO_CYAN_HORIZONTAL, 6*PIECE.WIDTH, 21*PIECE.HEIGHT);
        drawTetrimino(context, PIECE.TYPE.TETRIMINO_BLUE_LEFT, 7*PIECE.WIDTH, 19*PIECE.HEIGHT);
        drawTetrimino(context, PIECE.TYPE.TETRIMINO_MAGENTA_RIGHT, 5*PIECE.WIDTH, 19*PIECE.HEIGHT);
        drawTetrimino(context, PIECE.TYPE.TETRIMINO_ORANGE_RIGHT, 2*PIECE.WIDTH, 20*PIECE.HEIGHT);
        drawTetrimino(context, PIECE.TYPE.TETRIMINO_YELLOW_SQUARE, 2*PIECE.WIDTH, 19*PIECE.HEIGHT);
        drawTetrimino(context, PIECE.TYPE.TETRIMINO_GREEN_UP, 0, 19*PIECE.HEIGHT);
        drawTetrimino(context, PIECE.TYPE.TETRIMINO_RED_LEFT, PIECE.WIDTH, 16*PIECE.HEIGHT);

        drawButton(context, this.btnPlay, BTN.PLAY);
        drawButton(context, this.btnStats, BTN.STATS);
    },
    updated(){
        this.piece = this.next_piece;
    }
}

</script>

<style scoped>

/**{
  outline: solid 0.15rem rgba(18, 243, 37, 0.5);
} */
canvas {
    background-color: black;
}

.bg-color-gray{
    background-color: gray;
}

.bg-color-light-gray{
    background-color: LightGrey;
}

.imgPalace{
    height: 160px;
	width: 160px;
}

@media only screen and (max-width:800px)
   {
    #rightPanel {
        display: none;
    }
     
   }

</style>