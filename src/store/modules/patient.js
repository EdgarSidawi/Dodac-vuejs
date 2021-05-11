import axios from 'axios'

const patient = {
    namespaced: true,

    state: {
        patients: [],
        patient: "",
        error: "",
        loading: false
    },
    getters: {
        patients: (state) => state.patients,
        patient: (state) => state.patient,
        error: (state) => state.error,
        loading: (state) => state.loading
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
        },
        UPDATEPATIENT(state, payload) { 
            for (var i in state.patients) {
                if (state.patients[i].id == payload.id) {
                    state.patients[i] = payload.form
                    break
                }
            }
        },
        LOADING(state, payload) {
            state.loading = payload
        },
        DELETEPATIENT(state, payload) {
             for (var i in state.patients) {
                if (state.patients[i].id == payload) {
                    state.patients.splice(i,1)
                    break
                }
            }
        },
        CREATEPATIENT(state, payload) {
            state.patients.unshift(payload)
        }

    },
    actions: {
        searchPatient({ commit }, data) {
            commit('LOADING', true)
            axios.post('/searchPatient', data).then(res => {
                commit('LOADING', false)
                commit('SETPATIENTS', res.data.data);
            })
                .catch(() => {
                    commit('LOADING', false)
                    commit('ERROR')
                })
        },
        updatePatient({ commit }, data) { 
            axios.put(`/patient/${data.id}`, data.form).then(() => {
                commit('UPDATEPATIENT',data)
            })
        },
        deletePatient({ commit }, id) {
            axios.delete(`/patient/${id}`).then(() => {
                commit('DELETEPATIENT', id)
            })
        },
        createPatient({commit}, data) {
            axios.post('/patient', data).then(res => {
                commit("CREATEPATIENT", res)
            })
        }


    }
}

export default patient;