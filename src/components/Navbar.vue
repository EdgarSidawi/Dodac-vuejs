<template>
    <nav>
        <v-app-bar class="white" app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="blue--text">D</span>
                <span class="grey--text">O</span>
                <span class="green--text">D</span>
                <span class="red--text">A</span>
                <span class="blue--text">C</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer app class="blue lighten-1" v-model="drawer" dark>
            <v-list>
                <v-list-item >
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title class="title">
                        Doctor John Leider
                        </v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list-item-group>
            <div v-for="(link,i) in links" :key="i">
                <router-link :to="link.route" >
                    <v-list-item >
                        <v-list-item-icon>
                            <v-icon v-text="link.icon">mdi-account-group </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="link.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                </div>
            </v-list-item-group>

            

        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    data: ()=>{
       return{
           drawer:false,
           links:[
               {icon: 'mdi-account-group', text:"Patient", route:"/"},
               {icon: "mdi-account", text:"Staff", route:"/about"},
               {icon: "mdi-star", text:"Realtime Monitoring", route:"/monitoring"}
           ]
       }
    }
    
}
</script>