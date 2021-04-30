import axios from 'axios'

const patient = {
    namespaced: true,

    state: {
        patients: [],
        error: ""
    },
    getters: {
    },
    mutations: {
        SETPATIENTS(state, payload) {
            state.patients = payload
        },

        ERROR(state) {
            state.error = "Error connecting to database. Please try again later!"
        }

    },
    actions: {
        searchPatient({ commit }, data) {
            axios.post('/searchPatient', data).then(res => {
                commit();
            }).catch(err => console.log(err))
        }

    }
}

export default patient;