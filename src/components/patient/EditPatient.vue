<template>
    <div>
        <v-layout>
            <v-flex>
                <v-dialog
                v-model="patientInfo.dialog"
                max-width="600px"
                >
                    <v-card>
                        <v-card-title>
                            <h3> Update Patient </h3>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                v-model="form.firstName"
                                label = "firstName"
                            >
                            </v-text-field>
                        </v-card-text>
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
            dialog: this.patientInfo.dialog
        }
    }
}
</script>