<template>
    <div>
        <h3 class="text-center mt-7 blue-grey--text">
         Staff
        </h3>
        <hr color="grey"/>

        <v-container class="mx-2">
        <v-form>
            <v-container>
            <v-row justify="space-around">
                <v-col sm="2">
                <h5 class="mt-6 grey--text text-right">Search By:</h5>
                </v-col>
                <v-col sm="2" class="">
                <v-text-field label="First Name" v-model="form.firstName">
                </v-text-field>
                </v-col>
                <v-col sm="2">
                <v-text-field label="Last Name" v-model="form.lastName">
                </v-text-field>
                </v-col>
                <v-col sm="2" class="mt-3 ">
                <v-btn class="blue lighten-2 white--text" small @click.stop="findStaff">
                    <v-icon >mdi-magnify</v-icon>
                    <span>Search</span>
                </v-btn>
                </v-col>
                <v-col sm="2" class="mt-3 ">
                <v-btn class="green lighten-2 white--text" small @click.stop="create">
                    <v-icon >mdi-plus</v-icon>
                    <span>Create Staff</span>
                </v-btn>
                </v-col>
                <v-col v-if="loading" sm="12" md="12" lg="12" class="text-center">
                <v-btn class="white blue--text mx-auto" depressed :loading="loading">loading</v-btn>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
        </v-container>

        <Staffs :staffs="staffs"/>

    </div>
</template>

<script>
import Staffs from "../components/staff/Staffs"
import {mapActions, mapGetters} from "vuex"

export default {
    components: {Staffs},
    data(){
        return{
            form:{
                firstName:"",
                lastName:""
            }
        }
    },
    computed: {
        ...mapGetters("staff", ["staffs","loading"])
    },
    methods: {
        ...mapActions("staff", ['searchStaff']),

        findStaff(){
            this.searchStaff(this.form);
        },
        create(){}
    },
}
</script>