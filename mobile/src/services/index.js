import axios from 'axios'

const api = axios.create({
    // baseURL:'http://192.168.15.150:3030'
    baseURL:'http://192.168.1.108:3030'
})

export default api