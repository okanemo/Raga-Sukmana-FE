import axios from 'axios'
import qs from 'qs'

export const reqLogin = (body) =>{
    return{
        type: "POST_LOGIN",
        payload: axios.post(`http://127.0.0.1:3001/user/login`, qs.stringify(body))
    }
}