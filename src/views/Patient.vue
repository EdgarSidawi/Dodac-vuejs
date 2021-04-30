<template>
  <div class="patient">
    <h3 class="grey--text text-center">Patients Portal</h3>
    <v-divider width="300px" class="mx-auto mb-1"></v-divider>
    
    <v-container class="mx-2 my-1" >
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
              <v-btn class="blue lighten-2 white--text" small @click.stop="findPatient">
                <v-icon >mdi-magnify</v-icon>
                <span>Search</span>
              </v-btn>
            </v-col>
            <v-col sm="2" class="mt-3 ">
              <v-btn class="green lighten-2 white--text" small @click.stop="">
                <v-icon >mdi-plus</v-icon>
                <span>Create Patient</span>
              </v-btn>
            </v-col>

          </v-row>
        </v-container>
      </v-form>
    </v-container>

    <Patients :patients="patients"/>
    

  </div>
</template>

<script>
import Patients from "../components/patient/Patients"

import { mapActions,mapGetters } from 'vuex'
// @ is an alias to /src

export default {
  name: 'Patient',
  components: {
    Patients
  },

  data() {
    return {
      form: {
        'firstName': '',
        'lastName': ''
      }
    }
  },
  computed:{
    ...mapGetters('patient', ['patients', 'error'])

  },
  methods: {
    ...mapActions('patient',['searchPatient']),

    findPatient(){
      this.searchPatient(this.form)
    }
  },
}
</script>
