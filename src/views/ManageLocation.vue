<template>
    <div>
        <h3 class="text-center mt-7 blue-grey--text">
         Location
        </h3>
        <hr color="grey" />

        <div class="text-center">
        <v-btn v-if="loading" class="white blue--text mx-auto" depressed :loading="loading">loading</v-btn>
        </div>

        <Regions/>
    </div>
</template>

<script>
import Regions from "../components/region/Regions"
import {mapGetters} from "vuex"

export default {
    components:{Regions},
    computed: {
        ...mapGetters("region", ["loading"])
    }
}
</script>