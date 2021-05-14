import axios from "axios"

const region = {
    namespaced: true,

    state: {
        regions: [],
        loading: false
    },
    getters: {
        regions: (state) => state.regions,
        loading: (state) => state.loading
    },
    mutations: {
        GETREGIONS(state, payload){
            state.regions = payload
        },
        LOADING(state, payload) {
            state.loading = payload
        },
        UPDATEREGION(state, payload) { 
            for (var i in state.regions) {
                if (state.regions[i].id == payload.id) {
                    state.regions[i] = payload.form
                    break
                }
            }
        },
        DELETEREGION(state, payload) {
             for (var i in state.regions) {
                if (state.regions[i].id == payload) {
                    state.regions.splice(i,1)
                    break
                }
            }
        },
    },
    actions: {
        getRegions({ commit }) {
            commit("LOADING", true)
            axios.get("/region").then(res => {
                commit("LOADING", false)
                commit("GETREGIONS", res.data.data)
            })
        },
        updateRegion({ commit }, data) {
            axios.put(`/region/${data.id}`, data.form).then(() => {
                commit("UPDATEREGION", data)
            })
        },
        deleteRegion({ commit }, id) {
            axios.delete(`/region/${id}`).then(() => {
                commit('DELETEREGION', id)
            })
        },
    }

}

export default region