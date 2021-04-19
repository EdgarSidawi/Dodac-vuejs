<template>
    <nav>
        <v-navigation-drawer app class="blue" v-model="drawer">
            <h1>navbar</h1>
        </v-navigation-drawer>


        <v-toolbar >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title app >
                <span class="blue--text">D</span>
                <span class="grey--text">O</span>
                <span class="green--text">D</span>
                <span class="red--text">A</span>
                <span class="blue--text">C</span>
            </v-toolbar-title>
        </v-toolbar>

        
    </nav>
</template>

<script>
export default {
    data: ()=>{
       return{
           drawer:false
       }
    }
    
}
</script>