import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.0.12:3000';

const postUser = (name, email, pass) => {
    return axios.post('/users-management/user-register', {Name: name, Email: email, Password: pass})
        .then(response => response.data)
        .catch(error => error.message)
}

const userLogin = (email, pass)  => {
    return axios.post('/users-management/user-login', {Email:email, Password:pass})
        .then(response => console.log(response))
        .catch(error => alert(error.message))
}

module.exports = {
    postUser,
    userLogin
}