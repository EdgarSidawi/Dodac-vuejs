<template>
  <div>
    <v-layout>
      <v-flex>
        <v-dialog
          v-model="createDistrictInfo.dialog"
          persistent
          max-width="600px"
          eager
        >
          <v-card>
            <v-card-title class="red text-center mx-auto">
              <h3 class="mx-auto white--text text-center">Create Disease</h3>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.name" label="Disease"></v-text-field>
              <v-text-field v-model="form.current" label="Current"></v-text-field>
              <v-text-field v-model="form.threshold" label="Threshold"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <h4 v-if="notify" class="green--text ml-16 pl-16">
                Created Successfully
              </h4>
              <v-spacer></v-spacer>
              <v-btn class="red white--text" @click="close">Close</v-btn>
              <v-btn
                class="blue white--text"
                :disabled="disable"
                @click="create"
                >Create</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  props: ["createDiseaseInfo"],
  data (){ 
        return{ 
            form: { 
                name : "",
                threshold: null,
                current: null
                }, 
            notify: false ,
            } 
        },

  computed: {
    disable() {
      if (!this.form.name) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions("disease", ["createDisease"]),

    close() {
      this.createDiseaseInfo.dialog = false;
    },
    create() {
      var data = {
        form: this.form,
        district_id: this.createDiseaseInfo.district_id
      };
      this.createDisease(data);
      this.notify = true;
      setTimeout(() => {
        this.notify = false;
      }, 2000);
    }
  }
};
</script>