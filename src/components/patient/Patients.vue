<template>
    <v-container  class="mx-1 " fluid>
        <v-card class="pa-4">
            <v-layout row wrap >
                <v-flex xs6 sm4 md3 lg2>
                    <div class="grey--text caption">FirstName</div>
                    <div>my firstname</div>
                </v-flex>
                <v-flex xs6 sm4 md3 lg2>
                    <div class="grey--text caption">lastName</div>
                    <div>my lastName</div>
                </v-flex>
                <v-flex xs6 sm4 md3 lg2>
                    <div class="grey--text caption">Date Of Birth</div>
                    <div>my DOB</div>
                </v-flex>
                <v-flex xs6 sm4 md3 lg2>
                    <div class="grey--text caption">Allergies</div>
                    <div>my allergies</div>
                </v-flex>
                <v-flex xs6 sm4 md3 lg2>
                    <div class="grey--text caption">Last Disease Diagnosed</div>
                    <div>my diagnoses</div>
                </v-flex>
                <v-flex xs6 sm4 md3 lg2>
                    <div class="grey--text caption">Last Visited Hospital</div>
                    <p>my visited hospital</p>
                </v-flex>   
                <v-flex xs12 sm12 md12 lg12>
                    <div>
                    <v-icon class="blue--text px-2" >mdi-account-edit</v-icon>
                    <v-icon class="red--text px-2">mdi-delete</v-icon>
                    </div>
                </v-flex>   
            </v-layout>
                
        </v-card>
    </v-container>
</template>

<script>
export default {
    
}
</script>