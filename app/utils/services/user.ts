import { api } from "../axiosv2";


export const login=({ userName, password }: { userName: string; password: string })=>{
    return api.post('/Auth/', { userName, password });


}

export const reg=({ userName, password }: { userName: string; password: string })=>{
    return api.post('/Auth/reg', { userName, password });


}