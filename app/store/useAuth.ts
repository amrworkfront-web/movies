import {create} from 'zustand';
type AuthState={
    isAdmin:boolean,
    login:()=>void,
}
export const useAuth=create<AuthState>((set)=>({
    isAdmin:false,
    login:()=>set({isAdmin:true})
}))