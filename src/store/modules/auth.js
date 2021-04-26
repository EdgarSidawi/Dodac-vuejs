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
            console.log('data ', data)
            commit('ISLOADING')
            axios.post('http://127.0.0.1:8000/api/login',data).then(res => {
                console.log(res)
                if (res.status === 200) {
                    commit('LOGIN', res.data)
                } else if (res.status === 202) {
                    commit('ERROR', res.data)
                } else {
                    commit('CONNECTIONERROR')
                }
            })
        }   
    }
}

export default auth;