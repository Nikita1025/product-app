import axios from "axios";
import {LoginFormType, LoginResponseType} from "@/utils/types";

const API_URL = 'https://fakestoreapi.com/'
axios.defaults.baseURL = API_URL

export const AuthService={
    async logIn(data: LoginFormType){
        return axios.post<LoginResponseType>('auth/login', data)
    }
}
