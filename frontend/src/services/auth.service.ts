import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/auth"

const LOGIN_RUL = BASE_URL + "/login";

const REGISTER_URL = BASE_URL + '/register';

export const login = async (email: string, password: string) => {
    try {
        const { data } = await axios.post(LOGIN_RUL, {
            email: email,
            password: password
        });
        return data?.token as string;    
    } catch (error) {
        console.log(error);
    }
    return "";
}

export const register = async (name: string, email: string, password: string) => {
    try {
        const { data } = await axios.post(LOGIN_RUL, {
            name: name,
            email: email,
            password: password
        });
        return data?.token as string;    
    } catch (error) {
        console.log(error);
    }
    return "";
}