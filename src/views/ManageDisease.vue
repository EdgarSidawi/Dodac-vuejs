<template>
    <div>
        <h3 class="text-center mt-7 blue-grey--text">
         Diseases
        </h3>
        <hr color="grey" />

        <v-container fluid class="mt-5">
            <v-card class="pa-4 mb-3 text-center" v-for="district in allDistricts" :key="district.id">
                <v-layout row wrap justify-space-between>
                    <v-flex sm6 xs12 md4>
                        <div class="grey--text caption">name</div>
                        <div>{{district.name}}</div>
                    </v-flex>
                    <v-flex sm6 xs12 md4 class="pt-4">
                        Show Diseases
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
    computed:{
        ...mapGetters("district", ["allDistricts", "loading"])
    },
    methods: {
        ...mapActions("district", ["getAllDistricts"]),
    },
    created() {
        this.getAllDistricts()
    }
}
</script>