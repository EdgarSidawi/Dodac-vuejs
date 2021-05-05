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
        },
        UPDATEPATIENT(state, payload) { console.log('payload',payload)
            for (var i in state.patients) {
                console.log('i: ',i, state.patient)
                if (state.patients[i].id == payload.id) {
                    state.patients[i] = payload.form
                    break
                }
            }
        }

    },
    actions: {
        searchPatient({ commit }, data) {
            axios.post('/searchPatient', data).then(res => { 
                commit('SETPATIENTS', res.data.data);
            })
                .catch(() => commit('ERROR'))
        },
        updatePatient({ commit }, data) { console.log('data: ', data)
            axios.put(`/patient/${data.id}`, data.form).then(() => {
                commit('UPDATEPATIENT',data)
            })
        }

    }
}

export default patient;