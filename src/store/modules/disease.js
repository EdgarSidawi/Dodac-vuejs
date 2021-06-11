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
        }
    },
    actions: {
        getDiseases({ commit }, data) {
            commit("LOADING", true)
            axios.get(`district/${data}/disease`).then(res => {
                commit("LOADING", false)
                commit("GETDISEASES", res.data.data) 
            })
        }
    }
}

export default disease