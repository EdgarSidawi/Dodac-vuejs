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
        },
        updateRegion({ commit }, data) {
            axios.put(`/region/${data.id}`, data.form).then(res => {
                console.log(res)
                commit()
            })
        }
    }

}

export default region