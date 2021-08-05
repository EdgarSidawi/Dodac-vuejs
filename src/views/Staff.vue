<template>
  <div class="about">
    <h3 class="grey--text text-center">Staff Portal</h3>
    <v-divider width="300px" class="mx-auto mb-3"></v-divider>

    <v-container class="text-center mb-4">
      <v-layout wrap row>
        <v-flex v-for="(link, index) in links" :key="index" >
          <router-link :to="link.route" style="text-decoration:none">
            <v-btn class="red lighten-4 brown--text">
            {{ link.text }}
            </v-btn> 
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data () {
    return{
      links: [
        {text: "Manage Staff", route: "/staff/manageStaff"},
        {text: "Manage Location", route: "/staff/manageLocation"},
        {text: "Manage Disease", route: "/staff/manageDisease"}
      ]
    }
  },
  created(){ 
    if(localStorage.getItem('role') !== "Admin"){ 
      this.$router.push("/") 
      }
},
}
</script>