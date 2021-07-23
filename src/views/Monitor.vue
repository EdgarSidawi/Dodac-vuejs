<template>
    <div>
        <h3 class="grey--text text-center">Realtime Monitoring Portal</h3>
        <v-divider width="300px" class="mx-auto mb-3"></v-divider>

        <v-container>

        </v-container>
    </div>
</template>

<script>
    import {mapActions} from "vuex"

    export default {
        methods:{
            ...mapActions("disease", ["monitor"])
        },
        created(){

        }
    }

</script>