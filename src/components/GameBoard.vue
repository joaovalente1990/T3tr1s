<template>

        <div class="bg-color-gray pa-5">
            
                <v-row>
                    <v-col>
                        <div class="bg-color-light-gray pl-5 pr-5 pt-5 pb-3">
                            <canvas id="canvas" width="300" height="660"></canvas> <!--piece w/h 30, rows 22, width 10 -->
                        </div>
                    </v-col>
                    <v-col class="bg-color-gray ">
                        <NextPieceDisplay :piece="piece"></NextPieceDisplay>
                        <img class="mt-3 imgPalace" :src="require('../assets/images/palace.png')">
                        <div class="mb-0 pb-0">

                        
                        <CounterDisplay text="SCORE" :value="score"></CounterDisplay>
                        <CounterDisplay text="LEVEL" :value="level"></CounterDisplay>
                        <CounterDisplay text="LINES" :value="lines"></CounterDisplay>
                    </div>
                    </v-col>
                 </v-row>    
        </div>

</template>

<script>

import CounterDisplay from "./CounterDisplay";
import NextPieceDisplay from "./NextPieceDisplay";
import {PIECE} from "../common/constants";

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
            piece: null
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
    created(){
        this.PIECE = PIECE;
    },
    mounted(){
        //const canvas = document.getElementById("canvas");
        //let context = canvas.getContext("2d");
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


</style>