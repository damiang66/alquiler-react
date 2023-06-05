import { NavLink } from "react-router-dom"
import { PropiedadCard } from "./PropiedadCard"
import { UsuarioModal } from "./UsuarioModal"

export const PropiedadLista=()=>{
    return (<>
    <main>
    

<section className="py-5 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light">Propiedades en alquiler</h1>
      <p className="lead text-body-secondary">Estas son las propiedades en alquiler que tenes en Alquiler-App</p>
     
        <NavLink to={'/propiedades/form'} className="btn btn-primary my-2">Crear Propiedad</NavLink>
       
    </div>
  </div>
</section>

<div className="album py-5 bg-body-tertiary">
  <div className="container">

  
      
    <PropiedadCard/>

      
   
      
     
     
    </div>
  </div>


</main>

    </>)
}