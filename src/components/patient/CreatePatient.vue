<template>
  <div>
    <v-layout>
      <v-flex>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
          eager
        >
          <v-card>
            <v-card-title class="red text-center mx-auto">
              <h3 class="mx-auto white--text text-center">Create Patient</h3>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.firstName" label="First Name">
              </v-text-field>
              <v-text-field v-model="form.lastName" label="Last Name">
              </v-text-field>
              <div class="caption">Date Of Birth</div>
              <v-date-picker v-model="form.dateOfBirth"> </v-date-picker>
              <v-text-field v-model="form.allergies" label="Allergies">
              </v-text-field>
              <v-text-field
                v-if="role == 'Doctor'"
                v-model="form.last_disease_diagnosed"
                label="Disease Diagnosed"
              >
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <h4 v-if="notify" class="green--text ml-16 pl-16">
                Updated Successfully
              </h4>
              <v-spacer></v-spacer>
              <v-btn class="red white--text" @click="close">Close</v-btn>
              <v-btn class="blue white--text" :disabled="disable" @click="create">Create</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
    props: ["dialog"],
    data (){
        return{
            form: {
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                allergies: "",
                last_disease_diagnosed: "",
            },
            notify: false
        }
    },
    computed: { 
        role(){ 
            return localStorage.getItem('role') 
            },
        disable(){
          if(!this.form.firstName || !this.form.lastName || !this.form.dateOfBirth || !this.form.allergies) {
            return true
          }else{
            return false
          }
        } 
        },
    methods: {
        ...mapActions("patient", ["createPatient"]),

        close(){
            this.$emit('close')
        },
        create(){
          this.createPatient(this.form)
        }
    },
}
</script>
