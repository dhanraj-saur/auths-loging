import axios from 'axios'; 


const userApis = axios.create({
    baseURL: 'https://dummyjson.com',
})

export default userApis;