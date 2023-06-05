import { useState } from "react"
import { isLogin } from "./LoginService"

export const useLogin=()=>{
    isLogin
    const[navbarLogin,setNavbarLogin]=useState(0);
    const inicialSeccion=()=>{
        setNavbarLogin(1)
    }
    const cerrarSeccion = ()=>{
        setNavbarLogin(0);
    }

    return{
        isLogin,setNavbarLogin,navbarLogin,inicialSeccion,cerrarSeccion
    }

}