<template>
    <div>
        <v-layout>
            <v-flex>
                <v-dialog
                v-model="diseaseInf.dialog"
                persistent
                max-width="600px"
                eager
                >
                <v-card>
                    <v-card-title class="red text-center mx-auto">
                    <h3 class="mx-auto white--text text-center">Edit Disease</h3>
                    </v-card-title>
                    <v-card-text>
                    <v-text-field v-model="form.name" label="Region"> </v-text-field>
                    <v-text-field v-model="form.current" label="Current"> </v-text-field>
                    <v-text-field v-model="form.threshold" label="Threshold"> </v-text-field>
                    </v-card-text>
                    <v-card-actions>
                    <h4 v-if="notify" class="green--text ml-16 pl-16">
                        Updated Successfully
                    </h4>
                    <v-spacer></v-spacer>
                    <v-btn class="red white--text" @click="close">Close</v-btn>
                    <v-btn
                        class="blue white--text"
                        :disabled="disable"
                        @click="update(diseaseInf.disease.id)"
                        >Update</v-btn
                    >
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-flex>
        </v-layout> 
    </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
    props: ["diseaseInf"],
    data() {
        return {
            form: {
                // id: this.diseaseInf.disease.id,
                district_id: this.diseaseInf.disease.district_id,
                name: this.diseaseInf.disease.name,
                threshold: this.diseaseInf.disease.threshold,
                current: this.diseaseInf.disease.current
            },
            notify: false,
        }
    },
    computed: { 
        disable() { 
            if (!this.form.name || !this.form.threshold || !this.form.current) { 
                return true; 
                } else { 
                    return false; 
                } 
            } 
        },
    methods: {
        ...mapActions("disease", ["updateDisease"]),

        update(id){
           var data = { 
               form: this.form, 
               id: id,
               district_id: this.diseaseInf.disease.district_id 
               }; 
               console.log(data)

            this.updateDisease(data) 
            this.notify =true; 
            setTimeout(() => { 
                this.notify = false; 
            }, 2000);
        },
        close(){
            this.diseaseInf.dialog = false
        }
    },
}
</script>