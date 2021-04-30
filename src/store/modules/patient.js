import axios from 'axios'

const patient = {
    namespaced: true,

    state: {
        patients: []
    },
    getters: {
    },
    mutations: {

    },
    actions: {
        searchPatient({ commit }, data) {
            axios.post('/searchPatient', data).then(res => {
                console.log('patient: ', res);
                commit();
            }).catch(err => console.log(err))
        }

    }
}

export default patient;