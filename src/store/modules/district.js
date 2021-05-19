import axios from "axios";

const district = {
    namespaced: true,

    state: {
        districts: []
    },
    getters: {
        districts: (state) => state.districts
    },
    mutations: {
        GETDISTRICTS(state, payload) {
            state.districts = payload
        }
    },
    actions: {
        getDistricts({ commit }, id) { 
            axios.get(`region/${id}/district`).then(res => {
                commit("GETDISTRICTS", res.data.data)
            })
        }
    }
}

export default district;