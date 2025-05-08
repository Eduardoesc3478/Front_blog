import axios from "axios";

const apiBlog = axios.create({
    baseURL: "http://127.0.0.1:3002/blog/v1",
    timeout: 3000,
    httpsAgent: false
})

apiBlog.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("user")

        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const register = async (data) => {
    try{
        return await apiBlog.post('/auth/register', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const login = async (data) => {
    try{
        return await apiBlog.post('/auth/login', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getPublications = async () => {
    try{
        return await apiBlog.get('/publication/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const addComment = async (data) => {
    try{
        return await apiBlog.post('/comment/addComment', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getComments = async () => {
    try{
        return await apiBlog.get('/comment/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}


