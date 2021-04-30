<template>
    <div>
        <v-layout>
            <v-flex>
                <v-dialog
                v-model="dialog"
                max-width="600px"
                >
                    <v-card>
                        <v-card-title>
                            <h3> Update Patient </h3>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                v-model="firstName"
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
    data(){
        return{
            form: {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                allergies: "",
                last_disease_diagnosed: ""
            },
            dialog: false
        }
    }
}
</script>