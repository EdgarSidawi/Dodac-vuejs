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
                            <h3 class="mx-auto white--text text-center"> Update Patient</h3>
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
                                v-if="role == 'Doctor'"
                                v-model="form.last_disease_diagnosed"
                                label = "Disease Diagnosed"
                            >
                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="red white--text" @click="close">Close</v-btn>
                            <v-btn class="blue white--text" @click="update">Update</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
   

    </div>
</template>

<script>
export default {
    props:["patientInfo"],
    data(){
        return{
            form: {
                firstName: this.patientInfo.patient.firstName,
                lastName: this.patientInfo.patient.lastName,
                dateOfBirth: this.patientInfo.patient.dateOfBirth,
                allergies: this.patientInfo.patient.allergies,
                last_disease_diagnosed: this.patientInfo.patient.last_disease_diagnosed
            }
        }
    },
    computed: {        
        role(){
            return localStorage.getItem('role')
        },

    },
    methods: {
        close(){
            this.patientInfo.dialog = false,
            this.patientInfo.edit =false
        },
        update(){
            console.log(this.form)
        }
    }
    
}
</script>