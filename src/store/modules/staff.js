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
        }
    },
    actions: {
        searchStaff({ commit }, data) {
            commit("LOADING", true)
            axios.post("/searchStaff", data).then(res => {
                console.log(res)
                commit("LOADING", false)
                commit("SETSTAFFS", res.data.data)
            })
        }
    },
}

export default staff