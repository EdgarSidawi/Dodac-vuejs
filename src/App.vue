<template>
  <v-app>
    <div v-if="!isLoggedIn" >
      <Login v-if="ready"/>
    </div>

    <div v-if="isLoggedIn">
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
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'App',

  components: {
    Navbar,Login
  },

  data: () => ({
  }),
  computed: {
    ...mapGetters('auth',['isLoggedIn','ready'])
  },
  methods: {
    ...mapActions('auth',['checkToken'])
  },
  created(){
    if(localStorage.getItem('token')){
      this.checkToken()
    }
  }
};
</script>

<style>
html { overflow-y: auto }

</style>