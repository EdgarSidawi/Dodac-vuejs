<template>
  <div>
    <v-layout>
      <v-flex>
        <v-dialog
          v-model="districtInf.dialog"
          persistent
          max-width="600px"
          eager
        >
          <v-card>
            <v-card-title class="red text-center mx-auto">
              <h3 class="mx-auto white--text text-center">Edit District</h3>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.name" label="District"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <h4 v-if="notify" class="green--text ml-16 pl-16">
                Updated Successfully
              </h4>
              <v-spacer></v-spacer>
              <v-btn class="red white--text" @click="close">Close</v-btn>
              <v-btn
                class="blue white--text"
                :disabled="disable"
                @click="update(districtInf.district.id)"
                >Update</v-btn
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
  props: ["districtInf"],
  data (){ 
        return{ 
            form: { 
                id: this.districtInf.district.id,
                name : this.districtInf.district.name
                }, 
            notify: false 
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
    ...mapActions("district", ["updateDistrict"]),

    close() {
      this.districtInf.dialog = false;
    },
    update(id) {
        console.log(id)
        console.log(this.districtInf.district.id)
        console.log(this.districtInf.district.name)
        console.log(this.form.id)
        console.log(this.form.name)
    //   var data = {
    //     form: this.form,
    //     id: id
    //   };
    //   this.updateDistrict(data);
    //   this.notify = true;
    //   setTimeout(() => {
    //     this.notify = false;
    //   }, 2000);
    }
  }
};
</script>

