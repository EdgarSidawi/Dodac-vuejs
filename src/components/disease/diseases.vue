<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-dialog
          v-model="diseaseInfo.dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="diseaseInfo.dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Close</v-toolbar-title>
          </v-toolbar>

          <v-card class="pa-4 mb-3 text-center">
            <h3 class="pt-2">{{ diseaseInfo.district.name }}</h3>
            <hr class="grey mx-auto mb-7" width="700" />

            <div class="text-right mb-4 pr-10">
              <v-btn right fab class="yellow mr-8 mt-4" small @click="createD">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>

            <div class="text-center">
              <v-btn
                v-if="loading"
                class="white blue--text mx-auto"
                depressed
                :loading="loading"
                >loading</v-btn
              >
            </div>

            <div v-if="diseases.length > 0">
              <v-card
                class="pa-4 mb-3 mx-10"
                v-for="disease in diseases"
                :key="disease.id"
              >
                <v-layout row wrap justify-space-between>
                  <v-flex sm6 xs12 md3>
                    <div class="grey--text caption">name</div>
                    <div>{{ disease.name }}</div>
                  </v-flex>
                  <v-flex sm6 xs12 md3>
                    <div class="grey--text caption">threshold</div>
                    <div>{{ disease.threshold }}</div>
                  </v-flex>
                  <v-flex sm6 xs12 md3>
                    <div class="grey--text caption">current</div>
                    <div>{{ disease.current }}</div>
                  </v-flex>
                  <v-flex sm6 xs12 md3 class="pt-4">
                    <v-icon class="blue--text px-2" @click="editD(disease)"
                      >mdi-account-edit</v-icon
                    >
                    <v-icon class="red--text px-2" @click="deleteD(disease.id)"
                      >mdi-delete</v-icon
                    >
                  </v-flex>
                </v-layout>
              </v-card>
            </div> 
            <div v-else>
              <h3 class="red--text pt-10">
                No Districts to display for {{ diseaseInfo.district.name }}
              </h3>
            </div> 
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  
    <EditDisease v-if="diseaseInf.dialog" :diseaseInf="diseaseInf"/>
    <CreateDisease v-if="createDiseaseInfo.dialog" :createDiseaseInfo="createDiseaseInfo"/>

  </v-container>
</template>

<script>
import EditDisease from "./EditDisease"
import CreateDisease from "./CreateDisease.vue"

import {mapGetters} from "vuex"

export default {
    props:["diseaseInfo"],
    components:{EditDisease, CreateDisease},
    data(){
      return {
        diseaseInf: {
          disease: "",
          dialog: false
        },
        createDiseaseInfo: {
          dialog: false,
          district_id: null
        },
        confirmDelete: {
          dialog: false,
          district_id: null,
          id: null
        }
      }
    },
    computed:{
        ...mapGetters("disease", ["diseases", "loading"])
    },
    methods:{
      createD(){
        this.createDiseaseInfo = {
          dialog: true,
          district_id: this.diseaseInfo.district.id
        }
      },
      editD(disease){
        this.diseaseInf = {
          disease : disease,
          dialog : true
        }
      },
      deleteD(id){
        console.log(id)
      }
    }
}
</script>