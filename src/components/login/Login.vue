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
                    <v-card max-width="400" class="mx-auto pb-4" shaped loading="purple" loader-height="10">
                        <v-card-title class="blue text-center">
                            <h3 class="text-center mx-auto white--text">
                                Login Form
                            </h3> 
                        </v-card-title>
                        <v-card-text>
                            <v-text-field label="username" prepend-icon="mdi-account"></v-text-field>
                            <v-text-field label="password" prepend-icon="mdi-account-lock"></v-text-field>
                        </v-card-text>
                        <v-card-action class="px-3">
                            <v-btn rounded class="blue white--text">
                                Login
                            </v-btn>
                        </v-card-action>

                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>