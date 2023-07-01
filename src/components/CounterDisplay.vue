<template>
        <div class="bg-color-light-gray mt-4 counter-display">
            <v-row>
                <v-col :cols="12">
            <p class="header">{{ text }}</p>
        </v-col>
        <v-col :cols="12">
            <p class="mb-3">{{ value }}</p>
        </v-col>
            </v-row>
        </div>
</template>

<script>

export default {
    props: {
        text: String,
        value: String
    },
    data(){

        return {

        }

    }, 
    computed: {

    },
    watch: {

    },
    created(){

    }
}

</script>

<style scoped>

.header{
    background-color: #0080ff;
    border-bottom: 1px solid black;
}

p{
    font-family: 'Sans-Serif';
    margin:0;
}

.bg-color-light-gray{
    background-color: LightGrey;
}

.counter-display {
    border: 1px solid black;
}

</style>