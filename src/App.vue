<template>
  <v-app>
    <div v-if="!login">
      <Login/>
    </div>

    <div v-if="login">
    <Navbar />
    <v-main>
      <v-container class="mx-4" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Login from './components/login/Login'

export default {
  name: 'App',

  components: {
    Navbar,Login
  },

  data: () => ({
    login: false
  }),
};
</script>

<style>
html { overflow-y: auto }

</style>