<template>
    <v-container fluid class="mt-5">
        <v-card class="pa-4 mb-3 text-center" v-for="region in regions" :key="region.id">
            <v-layout row wrap justify-space-between>
                <v-flex sm6 xs12 md4>
                    <div class="grey--text caption">name</div>
                    <div>{{region.name}}</div>
                </v-flex>
                <v-flex sm6 xs12 md4 class="pt-4">
                    <v-btn class="mr-2 grey lighten-4 purple--text" depressed small @click="showDistrict">
                    <span>Show Districts</span>
                    </v-btn>
                    <v-icon class="blue--text px-2" @click="editR(region)">mdi-account-edit</v-icon>
                    <v-icon class="red--text px-2" @click="deleteR(region.id)">mdi-delete</v-icon>
                </v-flex>
            </v-layout>
        </v-card>

        <EditRegion v-if="regionInfo.edit" :regionInfo="regionInfo"/>
    </v-container>
</template>

<script>
import EditRegion from "./EditRegion"

import {mapActions,mapGetters} from "vuex"

export default {
    components:{EditRegion},
    data(){
        return{
            regionInfo:{
                dialog: false,
                region: null
            },
            confirmDelete:{
                dialog:false,
                id: null
            }
        }
    },
    computed:{
        ...mapGetters("region", ["regions"])
    },
    created(){
        this.getRegions()
    },
    methods:{
        ...mapActions("region", ["getRegions"]),

        editR(region){
            this.regionInfo = {
                dialog: true,
                region: region,
                edit: true
            }
        },
        deleteR(id){console.log(id)},
        showDistrict(){} 
    },
}
</script>