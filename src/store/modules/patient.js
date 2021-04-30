import axios from 'axios'

const patient = {
    namespaced: true,

    state: {
    },
    getters: {
    },
    mutations: {

    },
    actions: {
        searchPatient({ commit }, data) {
            axios.post('/searchPatient', data).then(res => {
                console.log('patient: ',res);
            })
        }

    }
}

export default patient;