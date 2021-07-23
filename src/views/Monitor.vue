<template>
    <div>
        <h3 class="grey--text text-center">Realtime Monitoring Portal</h3>
        <v-divider width="300px" class="mx-auto mb-3"></v-divider>

        <v-container>
            <v-card class="pa-4 mb-3 text-center" v-for="monitor in monitors" :key="monitor.id">
                <v-layout row wrap>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption" small>Disease</div>
                        <div>{{ monitor.name }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">District</div>
                        <div>{{ monitor.district.name }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Current</div>
                        <div>{{ monitor.current }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md3 lg2>
                        <div class="grey--text caption">Threshold</div>
                        <div>{{ monitor.threshold }}</div>
                    </v-flex>   
                </v-layout>
            </v-card>

        </v-container>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from "vuex"

    export default {
        methods:{
            ...mapActions("disease", ["monitor"])
        },
        created(){
            this.monitor()
        },
        computed: {
            ...mapGetters("disease", ["monitor"])
        }
    }

</script>