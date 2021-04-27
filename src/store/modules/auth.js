import axios from 'axios';

const auth = {
    namespaced: true,

    state: {
        isLoggedIn: false,
        errorMessage: "",
        isLoading: false
    },
    getters: {
        isLoggedIn: (state) => state.isLoggedIn,
        errorMessage: (state) => state.errorMessage,
        isLoading: (state) => state.isLoading
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
            console.log('i got here')
            axios.get('/user').then(res => {
                console.log(res)
                commit('CHECKTOKEN')
            })
            .catch(err => console.log(err))
        }
    }
}

export default auth;