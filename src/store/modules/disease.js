import axios from "axios"

const disease = {
    namespaced: true,
    
    state: {
        diseases: [],
        loading: false,
    },
    getters: {
        diseases: (state) => state.diseases,
        loading: (state) => state.loading
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
                console.log("data",data)
                console.log("data.id",data.id)
                commit("UPDATEDISEASE", data.form)
           })
        }
    }
}

export default disease