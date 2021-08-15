<template>
    <div>
        <v-layout>
            <v-flex>
                <v-dialog
                v-model="patientInfo.dialog"
                persistent
                max-width="600px"
                eager
                >
                    <v-card>
                        <v-card-title class="red text-center mx-auto">
                            <h3 class="mx-auto white--text text-center"> Edit Patient</h3>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                v-model="form.firstName"
                                label = "First Name"
                            >
                            </v-text-field>
                            <v-text-field
                                v-model="form.lastName"
                                label = "Last Name"
                            >
                            </v-text-field>
                            <div class="caption">Date Of Birth</div>
                            <v-date-picker 
                            v-model="form.dateOfBirth"
                            >
                            </v-date-picker>
                            <v-text-field
                                v-model="form.allergies"
                                label = "Allergies"
                            >
                            </v-text-field>
                            <v-text-field
                                :value = "patientInfo.patient.last_disease_diagnosed"
                                label = "Last Disease Diagnosed"
                                disabled
                            >
                            </v-text-field>
                            <v-select 
                                v-if="role == 'Doctor'"
                                label = "Current Disease Diagnosed"
                                :items="items" 
                                v-model="form.last_disease_diagnosed"
                                prepend-icon="mdi-virus"
                            ></v-select>
                        </v-card-text>
                        <v-card-actions>
                            <h4 v-if="notify" class="green--text ml-16 pl-16">Updated Successfully</h4>
                            <v-spacer></v-spacer>
                            <v-btn class="red white--text" @click="close">Close</v-btn>
                            <v-btn class="blue white--text" :disabled="disable" @click="update(patientInfo.patient.id)">Update</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
   

    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
    props:["patientInfo"],
    data(){
        return{
            form: {
                id: this.patientInfo.patient.id,
                firstName: this.patientInfo.patient.firstName,
                lastName: this.patientInfo.patient.lastName,
                dateOfBirth: this.patientInfo.patient.dateOfBirth,
                allergies: this.patientInfo.patient.allergies,
                last_disease_diagnosed: this.patientInfo.patient.last_disease_diagnosed,
                last_visited_hospital: "2 seconds ago"
            },
            notify: false
        }
    },
    created(){  
        this.getDiseases(localStorage.getItem("district_id"))
    },
    computed: {        
        ...mapGetters('disease', ['diseases']),
        role(){
            return localStorage.getItem('role')
        },
        disable(){ 
            if(!this.form.firstName || !this.form.lastName || !this.form.dateOfBirth || !this.form.allergies) { 
            return true 
            }else{ 
            return false }
         }
    },
    methods: {
        ...mapActions('patient',['updatePatient']),
        ...mapActions('disease',['getDiseases']),

        close(){
            this.patientInfo.dialog = false,
            this.patientInfo.edit =false
        },
        update(id){
            var data = {
                form: this.form,
                id: id
            }
            this.updatePatient(data) 
    
            this.notify = true
            setTimeout(() => {
                this.notify=false
            }, 2000);
        }
    }
    
}
</script>