<template>
    <div>
        <v-layout>
            <v-flex>
                <v-dialog
                v-model="patientInfo.dialog"
                max-width="600px"
                >
                    <v-card>
                        <v-card-title class="red text-center">
                            <h3 class="text-center"> Update Patient</h3>
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
                            <v-text-field
                                v-model="form.dateOfBirth"
                                label = "Date of Birth"
                            >
                            </v-text-field>
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
                            <v-btn>Close</v-btn>
                            <v-btn>Update</v-btn>
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
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                allergies: "",
                last_disease_diagnosed: ""
            },
            dialog: this.patientInfo.dialog,
        }
    },
    computed: {
        role(){
            return localStorage.getItem('role')
        }
    }
}
</script>