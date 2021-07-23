import axios from "axios"

const disease = {
    namespaced: true,
    
    state: {
        diseases: [],
        loading: false,
        monitor: []
    },
    getters: {
        diseases: (state) => state.diseases,
        loading: (state) => state.loading,
        monitor: (state) => state.monitor
    },
    mutations: {
        GETDISEASES(state, payload) {
            state.diseases = payload
        },
        LOADING(state, payload) {
            state.loading = payload
        },
        UPDATEDISEASE(state, payload) {
            for (var i in state.diseases) {
                if (state.diseases[i].id == payload.id) {
                    state.diseases[i] = payload.form
                    break
                }
            }
        },
        CREATEDISEASE(state, payload) {
            state.diseases.unshift(payload)
        },
        DELETEDISEASE(state, payload) {
             for (var i in state.diseases) {
                if (state.diseases[i].id == payload) {
                    state.diseases.splice(i,1)
                    break
                }
            }
        },
        MONITOR(state, payload) {
            state.monitor = payload
        }
    },
    actions: {
        getDiseases({ commit }, data) {
            commit("LOADING", true)
            axios.get(`district/${data}/disease`).then(res => {
                commit("LOADING", false)
                commit("GETDISEASES", res.data.data) 
            })
        },
        updateDisease({ commit },data){
            axios.put(`district/${data.district_id}/disease/${data.id}`, data.form).then(() => {
                commit("UPDATEDISEASE", data)
           })
        },
        createDisease({ commit }, data) {
            axios.post(`district/${data.district_id}/disease`, data.form).then(res => {
                commit("CREATEDISEASE", res.data.data)
            })
        },
        deleteDisease({ commit }, data) {
            axios.delete(`district/${data.district_id}/disease/${data.id}`).then(() => {
                commit("DELETEDISEASE",data.id)
            })
        },
        monitor({ commit }) {
            axios.get("/disease").then(res => {
                console.log(res)
                commit("MONITOR")
            })
        }
    }
}

export default disease