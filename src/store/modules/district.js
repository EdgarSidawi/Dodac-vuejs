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
        },
        CREATEDISTRICT(state, payload) {
            state.districts.unshift(payload)
        }
    },
    actions: {
        getDistricts({ commit }, id) {
            commit("LOADING", true)
            axios.get(`region/${id}/district`).then(res => {
                commit("LOADING", false)
                commit("GETDISTRICTS", res.data.data)
            })
        },
        createDistrict({ commit }, data) {
            axios.post(`region/${data.region_id}/district`, data.form).then(res => {
                commit("CREATEDISTRICT", res.data.data)
            })
        },
        updateDistrict({ commit }, data) {
            console.log(data)
            commit()
        }
    }
}

export default district;