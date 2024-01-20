import { axiosInstance } from "../../../services/baseHttp"


export function registerUser(params) {
    return axiosInstance.post(`api/register/user`, params)
}
export function generateCode() {
    return axiosInstance.post(`api/user/generate/code/email`)
}
