import axios from 'axios';

const auth = {
    namespaced: true,
    state: {
        isLoggedIn: false,
        error: ""
    },
    getters: {
        isLoggedIn: (state) =>  state.isLoggedIn
    },
    mutations: {
        LOGIN( ) {
            
        }
        
    },
    actions: {
        login({ commit }, data) {
            console.log('data ',data)
            axios.post('http://127.0.0.1:8000/api/login',data).then(res => {
                console.log(res)
                if (res.status === 200) {
                    console.log('res: ', res.status)
                }else {
                    
                }
                commit('LOGIN')
            })
            .catch(err => {
                console.log('err: ' + err)
                console.log('err: ' + err)
            })
        }   
    }
}

export default auth;