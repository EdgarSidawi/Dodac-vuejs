import axios from "axios"

const region = {
    namespaced: true,

    state: {
        regions: []
    },
    getters: {
        regions: (state) => state.regions
    },
    mutations: {
        GETREGIONS(state, payload){
            state.regions = payload
        }
    },
    actions: {
        getRegions({ commit }) {
            axios.get("/region").then(res => {
                commit("GETREGIONS", res.data.data)
            })
        }
    }

}

export default region