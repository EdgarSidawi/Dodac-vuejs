<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card shaped>
        <v-card-title class="red white--text headline">
          Are you sure you want to delete?
        </v-card-title>
        <v-card-actions>
          <v-btn
            color="red darken-1"
            text
            @click="confirmDelete.dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteP(confirmDelete.id)">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["confirmDelete"],
  data() {
    return {
      dialog: this.confirmDelete.dialog
    };
  },
  methods: {
    ...mapActions("staff", ["deleteStaff"]),

    deleteP(id) {
      this.deleteStaff(id);
      this.confirmDelete.dialog = false;
    }
  }
};
</script>
