import { isLogin } from './LoginService';
import { useLogin } from './useLogin';
import { LoginContext } from './LoginContext';
export const LoginProvider=({children})=>{

    const{
   isLogin,setNavbarLogin,navbarLogin,inicialSeccion,cerrarSeccion
    }=useLogin()
    return(
        <LoginContext.Provider value={
            {
                isLogin,setNavbarLogin,navbarLogin,inicialSeccion,cerrarSeccion
            }
            

        }>
            {children}
        </LoginContext.Provider>
    )
}