<template>
    <div>
        <h3 class="text-center mt-7 blue-grey--text">
         Region
        </h3>
        <hr color="grey" />
        <div class="text-right">
            <v-btn right fab class="yellow mr-8 mt-4" small @click="createRegion">
        <v-icon >mdi-plus</v-icon>
        </v-btn>

        </div>
        <div class="text-center">
        <v-btn v-if="loading" class="white blue--text mx-auto" depressed :loading="loading">loading</v-btn>
        </div>

        <CreateRegion :dialog="dialog" @close="closeDialog"/>
        <Regions/>
    </div>
</template>

<script>
import Regions from "../components/region/Regions"
import CreateRegion from "../components/region/CreateRegion"
import {mapGetters} from "vuex"

export default {
    components:{Regions, CreateRegion},
    data(){
        return{
           dialog : false
        }
    },
    computed: {
        ...mapGetters("region", ["loading"])
    },
    methods: {
        createRegion() {
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
        }
    },
}
</script>