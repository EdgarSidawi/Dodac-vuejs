<template>
    <v-container  class="mx-1 " fluid>
        <div v-if="patients.length > 0">
            <v-card class="pa-4 mb-3 text-center" v-for="(patient) in patients" :key="patient.id">
                <v-layout row wrap >
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption" small>FirstName</div>
                        <div>{{ patient.firstName }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">lastName</div>
                        <div>{{ patient.lastName }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Date Of Birth</div>
                        <div>{{ patient.dateOfBirth }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Allergies</div>
                        <div>{{ patient.allergies }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Last Disease Diagnosed</div>
                        <div>{{ patient.last_disease_diagnosed }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Last Visited Hospital</div>
                        <p>{{ patient.last_visited_hospital }}</p>
                    </v-flex>   
                    <v-flex xs12 sm12 md12 lg12>
                        <div class="text-right">
                        <v-icon class="blue--text px-2" @click="editP(patient)" >mdi-account-edit</v-icon>
                        <v-icon class="red--text px-2" @click="deleteP(patient.id)">mdi-delete</v-icon>
                        </div>
                    </v-flex>   
                </v-layout>
            </v-card>
        </div>
        <div v-else>
            <h1 class="red--text text-center mt-8">
                NO PATIENTS RECORD TO DISPLAY!!!
            </h1>
        </div>

        <EditPatient v-if="patientInfo.edit" :patientInfo ="patientInfo"/>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import EditPatient from "./EditPatient"

export default {
    props: ['patients'],
    components:{
        EditPatient
    },

    data(){
        return{
            patientInfo:{
                dialog:false,
                patient: null,
                edit: false
            }
        }
    },

    methods:{
        ...mapActions('patient',['deletePatient']),

        editP(patient){
            this.patientInfo.edit = true,
            this.patientInfo.dialog = true,
            this.patientInfo.patient = patient
        },
        deleteP(id){
            this.deletePatient(id)
        }
    }
}
</script>