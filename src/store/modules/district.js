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
        },
        UPDATEDISTRICT(state, payload) {
            for (var i in state.districts) {
                if (state.districts[i].id == payload.id) {
                    state.districts[i] = payload.form
                    break
                }
            }
        },
        DELETEDISTRICT(state, payload) {
             for (var i in state.districts) {
                if (state.districts[i].id == payload) {
                    state.districts.splice(i,1)
                    break
                }
            }
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
            axios.put(`region/${data.region_id}/district/${data.id}`, data.form).then(() => {
                commit("UPDATEDISTRICT",data)
            })
        },
        deleteDistrict({ commit }, data) {
            axios.delete(`region/${data.region_id}/district/${data.id}`).then(() => {
                commit("DELETEDISTRICT", data.id)
            })
        }
    }
}

export default district;