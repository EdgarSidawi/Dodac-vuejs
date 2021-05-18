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
              <h3 class="mx-auto white--text text-center">Create Region</h3>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.name" label="Region"> </v-text-field>
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
  props: ["dialog"],
  data() {
    return {
      form: {
        name: ""
      },
      notify: false
    };
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
    ...mapActions("region", ["createRegion"]),

    close() {
      this.$emit("close");
    },
    create() {
      this.createRegion(this.form);
      this.notify = true;
      setTimeout(() => {
        this.notify = false;
      }, 2000);
    }
  }
};
</script>
