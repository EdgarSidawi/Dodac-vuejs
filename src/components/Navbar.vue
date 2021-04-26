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

        <v-navigation-drawer app class="indigo lighten-1" v-model="drawer" dark>
            <v-list>
                <v-list-item >
                    <v-list-item-avatar class="white black--text pa-3 mx-auto" size="60">
                        {{ initials }}
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                        <h4 class="text-center">
                        {{ user }}
                        </h4> 
                        </v-list-item-title>
                        <v-list-item-subtitle>
                        <p class="text-center">
                        {{ email }}
                        </p>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list-item-group color="yellow lighten-3">
                    <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
                        <v-list-item-icon>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ link.text }} </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
            </v-list-item-group>

            

        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    data (){
       return{
           drawer:false,
           user:'',
           email:'',
           initials: '',
           links:[
               {icon: 'mdi-account-group', text:"Patient", route:"/"},
               {icon: "mdi-account", text:"Staff", route:"/staff"},
               {icon: "mdi-chart-bar", text:"Realtime Monitoring", route:"/monitor"}
           ]
       }
    },
    created() {
       if (this.$store.state.auth.isLoggedIn) {
            var firstname = localStorage.getItem('firstName')
            var lastname = localStorage.getItem('lastName')
            var role = localStorage.getItem('role')
            this.user = role + " " + firstname + " " + lastname
            this.email = localStorage.getItem('email')
            this.initials = firstname.charAt(0)+lastname.charAt(0)
        }
    }
    
}
</script>