<template>
    <v-container  class="mx-1 " fluid>
        <div v-if="staffs.length > 0">
            <v-card class="pa-4 mb-3 text-center" v-for="(staff) in staffs" :key="staff.id">
                <v-layout row wrap >
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption" small>FirstName</div>
                        <div>{{ staff.firstName }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">lastName</div>
                        <div>{{ staff.lastName }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Date Of Birth</div>
                        <div>{{ staff.email }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Allergies</div>
                        <div>{{ staff.role }}</div>
                    </v-flex>  
                    <v-flex xs12 sm12 md12 lg12>
                        <div class="text-right">
                        <v-icon class="blue--text px-2" @click="editP(staff)" >mdi-account-edit</v-icon>
                        <v-icon class="red--text px-2" @click="deleteP(staff.id)">mdi-delete</v-icon>
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
        <ConfirmDelete v-if="confirmDelete.dialog" :confirmDelete="confirmDelete" />
    </v-container>
</template>

<script>
export default {
    props: ["staffs"],
    data(){
        return{
            staffInfo:{
                dialog: false,
                patient: null,
                edit: false
            },
            confirmDelete:{
                dialog: false,
                id: null,
            }
        }
    },
}
</script>