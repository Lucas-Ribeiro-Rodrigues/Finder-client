import axios from 'axios';
import { Toast } from 'native-base';

axios.defaults.baseURL = 'https://finder-node-server.herokuapp.com';

const postUser = (name, email, pass) => {
    return axios.post('/users-management/user-register', {Name: name, Email: email, Password: pass})
        .then(response => response.data)
        .catch(error => error.message)
}

const userLogin = (email, pass)  => {
    return axios.post('/users-management/user-login', {Email:email, Password:pass})
        .then(response => response.data)
}

const getUserData = (email) => {
    return axios.get('/users-management/user/'+email)
        .then(response => response.data)
        .catch(e => console.log(e.message))

} 

const postItem = (item) => {
    return axios.post('/items-management/item-register', item)
        .then(response => response.data)
}

const getItemsBySituation = (situation) => {
    return axios.get(`/items-management/items/${situation}`)
        .then(response => response.data)
}

const getItems = () => {
    return axios.get("/items-management/items")
        .then(response => response.data)
}

module.exports = {
    postUser,
    userLogin,
    getUserData,
    postItem,
    getItems,
    getItemsBySituation,
}