<template>
  <div class="about">
    <h3 class="grey--text text-center">Staff Portal</h3>
    <v-divider width="300px" class="mx-auto mb-3"></v-divider>

    <v-container class="text-center">
      <v-layout wrap row>
        <v-flex v-for="(link, index) in links" :key="index" >
          <v-btn class="red lighten-4 brown--text" >
          {{ link.text }}
          </v-btn> 
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return{
      links: [
        {text: "Manage Staff", route: ""},
        {text: "Manage Location", route: ""},
        {text: "Manage Disease", route: ""}
      ]
    }
  }
}
</script>