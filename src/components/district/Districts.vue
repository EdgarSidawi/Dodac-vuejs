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
                                <v-icon class="blue--text px-2" @click="editD()">mdi-account-edit</v-icon>
                                <v-icon class="red--text px-2" @click="deleteD()">mdi-delete</v-icon>
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
    </v-container>

</template>

<script>
import {mapState , mapGetters} from "vuex"

export default {
    props: ["districtInfo"],
    
    computed: {
        ...mapGetters("district", ["districts", "loading"]),
    },
    methods: {
        ...mapState("district", ["getDistricts"]),

        editD(){},
        deleteD(){}
    },
}
</script>