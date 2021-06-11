const disease = {
    namespaced: true,
    
    state: {
        diseases: [],
        loading: false,
    },
    getters: {
        diseases: (state) => state.diseases,
        loading: (state) => state.loading
    },
    mutations: {
        GETDISEASES(state, payload) {
            state.diseases = payload
        }
    },
    actions: {
        getDiseases({ commit }, data) {
            console.log(data)
            commit()
        }
    }
}

export default disease