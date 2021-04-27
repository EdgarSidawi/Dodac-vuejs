import axios from 'axios';

const auth = {
    namespaced: true,

    state: {
        isLoggedIn: false,
        errorMessage: "",
        isLoading: false,
        ready: false
    },
    getters: {
        isLoggedIn: (state) => state.isLoggedIn,
        errorMessage: (state) => state.errorMessage,
        isLoading: (state) => state.isLoading,
        ready:(state)=>state.ready
    },
    mutations: {
        LOGIN(state, payload ) {
            localStorage.setItem('token', payload.token)
            localStorage.setItem('firstName', payload.user.firstName)
            localStorage.setItem('lastName', payload.user.lastName)
            localStorage.setItem('role', payload.user.role)
            localStorage.setItem('email', payload.user.email)
            
            state.isLoggedIn = true
            state.errorMessage = ""
            state.isLoading = false
        },

        CHECKTOKEN(state) {
            state.isLoggedIn = true;
        },

        ERROR(state, payload) {
            state.errorMessage = payload
            state.isLoading = false
        },

        CONNECTIONERROR(state) {
            state.errorMessage = "Database connection error. Please try again later"
            state.isLoading = false
        },

        ISLOADING(state) {
            state.isLoading = true
        },

        SETREADY(state) {
            state.ready = true
        }
        
    },
    actions: {
        login({ commit }, data) {
            commit('ISLOADING')
            axios.post('/login',data).then(res => {
                if (res.status === 200) {
                    commit('LOGIN', res.data)
                } else if (res.status === 202) {
                    commit('ERROR', res.data)
                } else {
                    commit('CONNECTIONERROR')
                }
            })
        },

        checkToken({ commit }) {
            axios.get('/user').then((res) => {
                if (res.status === 200) {
                    commit('CHECKTOKEN')
                } else {
                    commit('SETREADY')
                }
            })
            .catch(() => commit('SETREADY'))
        },
        setReady({ commit }) {
            commit('SETREADY')
        },
        logOut({ commit }) {
            
        }
    }
}

export default auth;