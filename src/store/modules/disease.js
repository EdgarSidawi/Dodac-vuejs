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
        }
    },
    actions: {
        getDiseases({ commit }, data) {
            axios.get(`district/${data}/disease`).then(res => {
                commit("GETDISEASES", res.data.data) 
            })
        }
    }
}

export default disease