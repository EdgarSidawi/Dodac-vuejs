<template>
    <v-container>
        <v-layout >
            <v-flex>
                <v-dialog
                v-model="districtInfo.dialog" 
                fullscreen 
                hide-overlay 
                transition="dialog-bottom-transition"
                >
                    <v-toolbar dark color="primary">
                    <v-btn icon dark @click="districtInfo.dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Close</v-toolbar-title>
                    </v-toolbar>

                    <v-card class="pa-4 mb-3 text-center">
                        <h3 class="pt-2">{{districtInfo.region}}</h3>
                        <hr class="grey mx-auto mb-7" width="700"/>

                        <div class="text-right mb-4 pr-10">
                            <v-btn right fab class="yellow mr-8 mt-4" small @click="createD">
                            <v-icon >mdi-plus</v-icon>
                        </v-btn>
                        </div>

                        <div class="text-center">
                        <v-btn v-if="loading" class="white blue--text mx-auto" depressed :loading="loading">loading</v-btn>
                        </div>

                        <div v-if="districts.length > 0">
                        <v-card class="pa-4 mb-3 mx-10" v-for="district in districts" :key="district.id">
                        <v-layout row wrap justify-space-between>
                            <v-flex sm6 xs12 md4>
                                <div class="grey--text caption">name</div>
                                <div>{{ district.name }}</div>
                            </v-flex>
                            <v-flex sm6 xs12 md4 class="pt-4">
                                <v-icon class="blue--text px-2" @click="editD(district)">mdi-account-edit</v-icon>
                                <v-icon class="red--text px-2" @click="deleteD(district.id)">mdi-delete</v-icon>
                            </v-flex>
                        </v-layout>
                        </v-card>
                        </div>
                        <div v-else>
                            <h3 class="red--text pt-10">No Districts to display for {{districtInfo.region}}</h3>
                        </div>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>

        <EditDistrict v-if="districtInf.dialog" :districtInf="districtInf"/>
        <CreateDistrict v-if="createDistrictInfo.dialog" :createDistrictInfo="createDistrictInfo"/>
        <ConfirmDistrictDelete v-if="confirmDelete.dialog" :confirmDelete="confirmDelete"/>
    </v-container>

</template>

<script>
import EditDistrict from "./EditDistrict"
import CreateDistrict from "./CreateDistrict"
import ConfirmDistrictDelete from "./ConfirmDistrictDelete"

import {mapState , mapGetters} from "vuex"

export default {
    props: ["districtInfo"],
    components:{EditDistrict, CreateDistrict, ConfirmDistrictDelete},
    data(){
        return{
            districtInf: {
                dialog: false,
                district: "",
            },
            createDistrictInfo: {
                dialog: false,
                region_id : null
            },
            confirmDelete:{ 
                dialog:false,
                region_id: null, 
                id: null 
            },
        }
    },
    computed: {
        ...mapGetters("district", ["districts", "loading"]),
    },
    methods: {
        ...mapState("district", ["getDistricts"]),

        editD(district){
            this.districtInf = {
                dialog : true,
                district : district
            }
        },
        deleteD(id){
            this.confirmDelete = {
                dialog : true,
                region_id: this.districtInfo.region_id,
                id : id
            }
        },
        createD(){
            this.createDistrictInfo = {
                dialog: true,
                region_id: this.districtInfo.region_id
            }
        }
    },
}
</script>