<template>
    <v-container  fluid>
        
        <h1 class="text-center display-3 ma-4">    
            <span class="grey--text caption">Welcome to</span>
            <br>
            <span class="blue--text">D</span>
            <span class="grey--text">O</span>
            <span class="green--text">D</span>
            <span class="red--text">A</span>
            <span class="blue--text">C</span>
        </h1>
        <v-layout>
            <v-flex>
                <v-form>
                    <v-card max-width="400" 
                        class="mx-auto pb-4" 
                        shaped
                        :loading="isLoading"
                        loader-height="10"
                        >
                        <v-card-title class="blue text-center">
                            <h3 class="text-center mx-auto white--text">
                                Login Form
                            </h3> 
                        </v-card-title>
                        <v-card-text class="pt-1" >
                            <v-text-field 
                                v-model="form.username" 
                                :rules="usernameRules"
                                label="username" 
                                prepend-icon="mdi-account" 
                                >
                            </v-text-field>
                            <v-text-field 
                                v-model="form.password" 
                                :rules="passwordRules"
                                label="password" 
                                prepend-icon="mdi-account-lock"
                                type="password"
                                >
                            </v-text-field>
                        </v-card-text>
                        <v-card-actions class="px-10">
                            <v-btn rounded class="blue white--text caption" @click.stop="login">
                            Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState} from 'vuex'

export default {
        data() {
            return{
                form: {
                    username:'',
                    password:'',
                },
                error: '',
                isLoading: false,
                usernameRules: [ v => !!v || 'Username is required'],
                passwordRules: [ v => !!v || 'Password is required']
            }
        },
        computed: {
            ...mapState('auth',['isLoggedIn']),

        },
        methods: {
            login(){
                if(this.form.username === "" || this.form.password === ""){
                    console.log('forms are empty');
                    this.error = "username and password cannot be empty"
                    
    
                }else{
                    console.log('logging in' ,this.isLoading)
                    this.isLoading = true;
                    this.error=''
                }
            }
        }
}
</script>