import { useContext, useEffect, useState } from "react"
import { usePropiedad } from "../usePropiedad"
import { PropiedadContext } from "../PropiedadContext"
import { UsuarioFindById } from "../../Usuario/service/UsuarioService";


export const UsuarioModal=()=>{
  const{ ventana,setVentana,abrirModal,cerrarModal,seleccion}=useContext(PropiedadContext)
  //console.log("modal"+id);
    const[propietario,setPropietario]=useState({});
    const traerPropietario = async ()=>{
        const respuesta = await UsuarioFindById(seleccion);
        console.log(respuesta);
        setPropietario(respuesta.data)
    }
    useEffect(()=>{
        traerPropietario()
    },[])
  
    return (<>
    <div className="modal"  style={{display:"block"}} tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{propietario.usename}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p>{propietario.username}</p>
        <p>{propietario.email}</p>
      </div>
      <div className="modal-footer">
        <button onClick={cerrarModal}  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
    </>)
}