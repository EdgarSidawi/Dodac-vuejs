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
    ...mapActions("disease", ["deleteDisease"]),

    deleteP(id) { console.log(id)
    //   var data = {
    //     region_id: this.confirmDelete.region_id,
    //     id: id
    //   };
    //   this.deleteDistrict(data);
    //   this.confirmDelete.dialog = false;
    }
  }
};
</script>
