import axios from 'axios';

axios.defaults.baseURL = 'localhost:3000';

const postRegister = (user) => {
    return axios.post('/users-management/user-register', user)
        .then(response => response.data)
        .catch(error => error.message)
}

module.exports = {
    postRegister,
}