<template>

        <div class="bg-color-gray pa-5">
            <div class="bg-color-light-gray">
                <v-row style="margin:0">
                    <v-col>
                <canvas width="300" height="600"></canvas>
                </v-col>
                <v-col class="bg-color-gray ">
                <img class="imgPalace" :src="require('../assets/images/palace.png')">
                <CounterDisplay class="full-width" text="SCORE" :value="score"></CounterDisplay>
                <CounterDisplay class="full-width" text="LEVEL" :value="level"></CounterDisplay>
                <CounterDisplay class="full-width" text="LINES" :value="lines"></CounterDisplay>
            </v-col>
                 </v-row>
            </div>    
        </div>

</template>

<script>

import CounterDisplay from "./CounterDisplay";

export default {

    data(){

        return {
            score: 0,
            level: 0,
            lines: 0
        }

    },
    computed: {

    },
    watch: {

    }, 
    components: {
        CounterDisplay
    },
    created(){

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
	width: 152px;
}


</style>