// import axios from 'axios';

const auth = {
    namespaced: true,
    state: {
        here: 'i am here oooooooooo',
        isLoggedIn: false,
    },
    getters: {
        isLoggedIn: (state) =>  state.isLoggedIn
    },
    mutations: {
        
    },
    actions: {
        
    }
}

export default auth;