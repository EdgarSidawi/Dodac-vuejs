<template>
  <div>
    <v-layout>
      <v-flex>
        <v-dialog
          v-model="staffInfo.dialog"
          persistent
          max-width="600px"
          eager
        >
          <v-card>
            <v-card-title class="red text-center mx-auto">
              <h3 class="mx-auto white--text text-center">Update Staff</h3>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="form.firstName" label="First Name">
              </v-text-field>
              <v-text-field v-model="form.lastName" label="Last Name">
              </v-text-field>
              <v-text-field v-model="form.username" label="Username"> </v-text-field>
              <v-text-field v-model="form.email" label="Email" type="email">
              </v-text-field>
              <v-select :items="roles" v-model="form.role">
              </v-select>
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
                @click="update(staffInfo.staff.id)"
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
  props: ["staffInfo"],
  data() {
    return {
      form: {
        id: this.staffInfo.staff.id,
        firstName: this.staffInfo.staff.firstName,
        lastName: this.staffInfo.staff.lastName,
        username: this.staffInfo.staff.username,
        email: this.staffInfo.staff.email,
        role: this.staffInfo.staff.role,
      },
      notify: false,
      roles: ["Admin", "Nurse", "Doctor"]

    };
  },
  computed: {
    disable() {
      if (
        !this.form.firstName ||
        !this.form.lastName ||
        !this.form.username ||
        !this.form.email ||
        !this.form.role
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions("staff", ["updateStaff"]),

    close() {
      this.staffInfo.dialog = false
      this.staffInfo.edit = false
    },
    update(id) {
      var data = {
        form: this.form,
        id: id
      };
      this.updateStaff(data); 
      this.notify = true;
      setTimeout(() => {
        this.notify = false;
      }, 2000);
    }
  }
};
</script>
