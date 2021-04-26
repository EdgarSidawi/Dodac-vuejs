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
                        <v-alert v-if="error" class="caption ma-2" color="red" text dense outlined>
                        <p class="red--text my-auto " align="center">{{error}}</p>
                        </v-alert>
                        <v-alert v-if="errorMessage" class="caption ma-2" color="red" text dense outlined>
                        <p class="red--text my-auto " align="center">{{errorMessage}}</p>
                        </v-alert>
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
                            <v-btn rounded class="blue white--text caption" @click.stop="signIn">
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
import { mapGetters,mapActions} from 'vuex'

export default {
        data() {
            return{
                form: {
                    username:'',
                    password:'',
                },
                error: '',
                usernameRules: [ v => !!v || 'Username is required'],
                passwordRules: [ v => !!v || 'Password is required']
            }
        },
        computed: {
            ...mapGetters('auth',['isLoggedIn','errorMessage','isLoading']),
        },
        methods: {
            ...mapActions('auth',['login']),
            signIn(){
                if(this.form.username === "" || this.form.password === ""){                   
                    this.error = "username and password cannot be empty!"

                }else{
                    this.error= ""
                    this.login(this.form)
                }
            }
        }
}
</script>