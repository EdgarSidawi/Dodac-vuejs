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
        DELETESTAFF(state, payload) {
             for (var i in state.staffs) {
                if (state.staffs[i].id == payload) {
                    state.staffs.splice(i,1)
                    break
                }
            }
        },
        CREATEPATIENT(state, payload) {
            state.staffs.unshift(payload)
        }
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
            axios.delete(`/user/${id}`).then(() => {
                commit('DELETESTAFF', id)
            })
        },
        createStaff({commit}, data) {
            axios.post('/staff', data).then(res => { console.log(res)
                commit("CREATESTAFF", res.data.data)
            })
        }
    },
}

export default staff