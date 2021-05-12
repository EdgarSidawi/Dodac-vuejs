import axios from "axios"

const staff = {
    namespaced : true,

    state: {
        staffs: [],
        loading: false
    },
    getters: {
        staffs: (state) => state.staffs,
        loading: (state) => state.loading
    },
    mutations: {
        SETSTAFFS(state, payload){
            state.staffs = payload
        },
        LOADING(state, payload){
            state.loading = payload
        },
        UPDATESTAFF(state, payload) { 
            for (var i in state.staffs) {
                if (state.staffs[i].id == payload.id) {
                    state.staffs[i] = payload.form
                    break
                }
            }
        },
    },
    actions: {
        searchStaff({ commit }, data) {
            commit("LOADING", true)
            axios.post("/searchUser", data).then(res => {
                commit("LOADING", false)
                commit("SETSTAFFS", res.data.data)
            })
        },
        updateStaff({ commit }, data) { 
            axios.put(`/user/${data.id}`, data.form).then(() => { 
                commit('UPDATESTAFF',data)
            })
        },
        deleteStaff({ commit }, id) {
            axios.delete(`/user/${id}`).then((res) => {console.log(res)
                commit('DELETESTAFF', id)
            })
        },
    },
}

export default staff