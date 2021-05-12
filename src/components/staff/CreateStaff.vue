<template>
  <div>
    <v-layout>
      <v-flex>
        <v-dialog v-model="dialog" persistent max-width="600px" eager>
          <v-card>
            <v-card-title class="red text-center mx-auto">
              <h3 class="mx-auto white--text text-center">Create Staff</h3>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.firstName" label="First Name">
              </v-text-field>
              <v-text-field v-model="form.lastName" label="Last Name">
              </v-text-field>
              <v-text-field v-model="form.username" label="Username">
              </v-text-field>
              <v-text-field v-model="form.password" label="Password" type="password">
              </v-text-field>
              <v-text-field v-model="form.email" label="Email" type="email">
              </v-text-field>
              <v-select :items="roles" v-model="form.role">
              </v-select>
            </v-card-text>
            <v-card-actions>
              <h4 v-if="notify" class="green--text ml-16 pl-16">
                Staff Created Successfully!
              </h4>
              <v-spacer></v-spacer>
              <v-btn class="red white--text" @click="close">Close</v-btn>
              <v-btn
                class="green white--text"
                :disabled="disable"
                @click="create"
                >Create</v-btn>
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
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        role: ""
      },
      notify: false,
      roles: ["Admin", "Nurse", "Doctor"]
    };
  },
  computed: {
    disable() {
      if (!this.form.firstName || !this.form.lastName || !this.form.username || !this.form.email || !this.form.password || !this.form.role) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions("staff", ["createStaff"]),

    close() {
      this.$emit("close");
    },
    create() { 
      this.createStaff(this.form);

      this.notify = true;
      setTimeout(() => {
        this.notify = false;
      }, 2000);

      this.form.firstName = "";
      this.form.lastName = "";
      this.form.username = "";
      this.form.password = "";
      this.form.email = "";
      this.form.role = "";
    }
  }
};
</script>
