<template>
  <div class="home">
    <h1>HomePage</h1>

    <v-btn class="pink white--text " elevation="2"
    >Click Me
    </v-btn>
    <v-btn  color="pink" dark>Hi there</v-btn>
    <v-btn depressed>Hi there</v-btn>
    
    <v-btn color="pink white--text"  depressed>
      <v-icon left>mdi-email</v-icon>Email me
    </v-btn>

    <v-btn color="pink white--text"  large>
      <v-icon left>mdi-email</v-icon>Email me
    </v-btn> <span> </span>

    <v-btn fab color="pink white--text" >
      <v-icon>mdi-cards-heart</v-icon>
    </v-btn>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
