import axios from 'axios';

axios.defaults.baseURL = 'localhost:3000';

const postRegister = (name, email, pass) => {
    return axios.post('/users-management/user-register', {Name:name, Email:email, Password: pass})
        .then(response => response.data)
        .catch(error => error.message)
}

module.exports = {
    postRegister,
}