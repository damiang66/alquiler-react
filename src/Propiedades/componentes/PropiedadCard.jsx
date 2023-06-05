import { useContext, useEffect, useState } from "react"
import { proiedadesFindAll } from "../service/PropiedadService";
import { NavLink } from "react-router-dom";
import { UsuarioModal } from "./UsuarioModal";
import { usePropiedad } from "../usePropiedad";
import { PropiedadContext } from "../PropiedadContext";


export const PropiedadCard=()=>{
    const[propiedadesLista,setPropiedadesLista]=useState([]);
    
    const{ventana,setVentana,abrirModal,cerrarModal}=useContext(PropiedadContext)
   // const [ventana,setVentana]=useState(false)
    const traerPropiedades= async()=>{
        const respuesta = await proiedadesFindAll();
        console.log(respuesta.data);
        setPropiedadesLista(respuesta.data);
    }
  
    useEffect(()=>{
        traerPropiedades();
        console.log(propiedadesLista);
    },[])
    return (<>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  
  
     {propiedadesLista.map(p=>(
      
    <div className="col"key={p.id}>
      {console.log(ventana)}
        {ventana ? < UsuarioModal />:''}
 <div className="card shadow-sm" >
 <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Casa en alquilar</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">casa en Alquiler</text></svg>
 <div className="card-body">
   <p className="card-text">{p.ubicacion}</p>
   <p className="card-text">Propietario: {p.usuario.nombre} {p.usuario.apellido}</p>
   <p className="card-text">{p.precio}</p>
   <div className="d-flex justify-content-between align-items-center">
     <div className="btn-group">
       
       <button onClick={()=>abrirModal(p.usuario.id)} type="button" className="btn btn-sm btn-outline-secondary">Ver propietarios</button>
       <NavLink to={`/propiedades/form/${p.id}`} type="button" className="btn btn-sm btn-outline-secondary">Editar</NavLink>
       <NavLink to={`/propiedades/detalle/${p.id}`} type="button" className="btn btn-sm btn-outline-secondary">Detalle</NavLink>
       <button type="button" className="btn btn-sm btn-outline-secondary">Eliminar</button>
     </div>
    
     <small className="text-body-secondary"></small>
   </div>
 </div>
</div>
</div>
        ))}
   </div>    
    </>)
}