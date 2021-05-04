import axios from 'axios'

const patient = {
    namespaced: true,

    state: {
        patients: [],
        patient: "",
        error: ""
    },
    getters: {
        patients: (state) => state.patients,
        patient: (state) => state.patient,
        error: (state) => state.error
    },
    mutations: {
        SETPATIENTS(state, payload) {
            state.patients = payload
        },

        ERROR(state) {
            state.error = "Error connecting to database. Please try again later!"
        },
        GETPATIENT(state, payload) {
            state.patient = payload 
        }

    },
    actions: {
        searchPatient({ commit }, data) {
            axios.post('/searchPatient', data).then(res => { 
                commit('SETPATIENTS', res.data.data);
            })
                .catch(() => commit('ERROR'))
        },
        getPatient({ commit }, id) {
            axios.get(`/patient/${id}`).then(res => {
                console.log(res)
                commit('GETPATIENT',res.data.data)
            })
        }

    }
}

export default patient;