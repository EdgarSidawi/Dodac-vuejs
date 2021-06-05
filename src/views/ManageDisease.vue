<template>
    <div>
        <h3 class="text-center mt-7 blue-grey--text">
         Diseases
        </h3>
        <hr color="grey" />

        <div class="text-center">
        <v-btn v-if="loading" class="white blue--text mx-auto" depressed :loading="loading">loading</v-btn>
        </div>

        <v-container fluid class="mt-5">
            <v-card class="pa-4 mb-3 text-center" v-for="district in allDistricts" :key="district.id">
                <v-layout row wrap justify-space-between>
                    <v-flex sm6 xs12 md4>
                        <div class="grey--text caption">name</div>
                        <div>{{district.name}}</div>
                    </v-flex>
                    <v-flex sm6 xs12 md4 class="pt-4">
                        <v-btn class="red--text white mb-2" small @click="showDisease(district)">
                            <span>Show diseases</span> 
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

        <Diseases v-if="this.diseaseInfo.dialog" :diseaseInfo="diseaseInfo"/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import Diseases from "../components/disease/Diseases"

export default {
    components: {Diseases},
    data() {
        return {
            diseaseInfo: {
                district: null,
                dialog: false
            }
        }
    },
    computed:{
        ...mapGetters("district", ["allDistricts", "loading"])
    },
    created() {
        this.getAllDistricts()
    },
    methods: {
        ...mapActions("district", ["getAllDistricts"]),

        showDisease(district){
            this.diseaseInfo = {
                district: district,
                dialog: true
            }
        }
    }
}
</script>