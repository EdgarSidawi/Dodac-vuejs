import axios from "axios";

const district = {
    namespaced: true,

    state: {
        districts: [],
        loading: false
    },
    getters: {
        districts: (state) => state.districts,
        loading: (state) => state.loading
    },
    mutations: {
        GETDISTRICTS(state, payload) {
            state.districts = payload
        },
        LOADING(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        getDistricts({ commit }, id) {
            commit("LOADING", true)
            axios.get(`region/${id}/district`).then(res => {
                commit("LOADING", false)
                commit("GETDISTRICTS", res.data.data)
            })
        }
    }
}

export default district;