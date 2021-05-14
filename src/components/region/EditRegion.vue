<template>
    <div>
        <v-layout>
            <v-flex>
                <v-dialog
                v-model="regionInfo.dialog"
                persistent
                max-width="600px"
                eager
                >
                <v-card>
                    <v-card-title class="red text-center mx-auto">
                    <h3 class="mx-auto white--text text-center">Update Staff</h3>
                    </v-card-title>
                    <v-card-text>
                    <v-text-field v-model="form.region" label="Region"> </v-text-field>
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
                        @click="update(regionInfo.region.id)"
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
  props: ["regionInfo"],
  data() {
    return {
      form: {
        id: this.regionInfo.region.id,
        region: this.regionInfo.region.name
      },
      notify: false,
    };
  },
  computed: {
    disable() {
      if (!this.form.region) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions("staff", ["updateStaff"]),

    close() {
      this.regionInfo.dialog = false;
      this.regionInfo.edit = false;
    },
    // update(id) {
    //   var data = {
    //     form: this.form,
    //     id: id
    //   };
    //   this.updateStaff(data);
    //   this.notify = true;
    //   setTimeout(() => {
    //     this.notify = false;
    //   }, 2000);
    // }
  }
};
</script>
