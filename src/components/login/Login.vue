<template>
    <v-container class="grey lighten-4" fluid>
      <v-layout>
        <v-flex>
            <v-form>
                <v-card max-width="400" class="mx-auto pb-4" shaped>
                    <v-card-title class="blue text-center">
                        <h3 class="text-center">
                             Login Form
                        </h3> 
                    </v-card-title>
                    <v-card-text>
                        <v-text-field label="username" prepend-icon=""></v-text-field>
                        <v-text-field></v-text-field>
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