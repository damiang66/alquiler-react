import { useContext, useState } from "react";
import { guardarLogin, obtenerUser, obtenerUsuario } from "../services/LoginService"
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../services/LoginContext";
const inicial= {
    username:"",
    password:""
}
export const LoginPage = ()=>{
   const navegar=useNavigate()
  const { isLogin,setNavbarLogin,navbarLogin,inicialSeccion,cerrarSeccion}=useContext(LoginContext);
    const[usuario,setUsuario]=useState(inicial)
    const [login,setLogin]=useState({})
    const[errores,setErrores]=useState("")
    const cambiar = ({target})=>{
        const{name,value}=target;
       
        setUsuario({
            ...usuario,
            [name]:value,
        })
    }
    const loginUsuario = async ()=>{
        event.preventDefault()
        try {

            const respuesta = await obtenerUsuario(usuario.username, usuario.password); 
            //console.log(respuesta);
            setLogin(respuesta.data)
            guardarLogin(respuesta.data)
            inicialSeccion()
            navegar("/propiedades")
           
         console.log(JSON.parse(obtenerUser()));
        } catch (error) {
           if(error?.response?.status==404){
            setErrores("usuario o contraseña incorrecto");
           }
        }
     
      

    }
    return (<>
    <section className="bg-light py-5">
    <div className="container px-5 my-5 px-5">
        <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
            <h2 className="fw-bolder">Iniciar Sesion</h2>
            <p className="lead mb-0">ingresa tu cuenta si ya tienes una creada</p>
        </div>
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                 
                    <div className="form-floating mb-3">
                        <input value={usuario.username} onChange={cambiar} className="form-control" type="text" name="username" placeholder="Ingrese su nombre de usuario..." data-sb-validations="required" />
                        <label >Nombre de usuario</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    
                    <div className="form-floating mb-3">
                        <input value={usuario.password} onChange={cambiar} className="form-control" type="password" name="password" placeholder="password123" data-sb-validations="required,password" />
                        <label >Contraseña</label>
                        <div  className="invalid-feedback" data-sb-feedback="email:required">La contraseña es requerida...</div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">Contraseña no valida.</div>
                    </div>
                    {errores? <div  className="text-center text-danger mb-3">{errores}</div>:""}
                  
                  
                    <button onClick={loginUsuario} className="btn btn-primary btn-lg" >Aceptar</button>
                </form>
            </div>
        </div>
    </div>
</section>
    </>)
}