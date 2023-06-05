import { NavLink } from "react-router-dom"
import { isLogin, logout } from "../auth/services/LoginService"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../auth/services/LoginContext"

export const NavBar = () => {
  const{ isLogin,setNavbarLogin,navbarLogin,inicialSeccion,cerrarSeccion}=useContext(LoginContext)
  const[login,setLogin]=useState(0)
  isLogin()
  useEffect(()=>{

console.log(navbarLogin);
console.log("hola desde nav");
  },[navbarLogin])
 
  return (<>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" >Alquiler-app</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to={"/principal"} className="nav-link active" aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/usuarios"} className="nav-link active" aria-current="page" >Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/propiedades "} className="nav-link active" aria-current="page" >Propiedades</NavLink>
            </li>

          </ul>
          <ul className="navbar-nav navbar-right">


          {!navbarLogin!=0?
          <li><NavLink  to={'/login'} className="btn btn-outline-dark" >Iniciar sesion</NavLink></li>
          :
           <li><NavLink to={"/login"} className="btn btn-outline-dark" onClick={cerrarSeccion} >Cerrar sesion</NavLink></li>}

           
           


          </ul>
        </div>
      </div>
    </nav>
  </>)
}