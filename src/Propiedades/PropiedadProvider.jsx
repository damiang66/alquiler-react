

import { PropiedadContext } from "./PropiedadContext"
import { usePropiedad } from "./usePropiedad"


export const PropiedadProvider=({children})=>{
    const {
        ventana,setVentana,abrirModal,cerrarModal,seleccion,setSeleccion
 
    }=usePropiedad()

return(
<PropiedadContext.Provider value={
    {
        ventana,setVentana,abrirModal,cerrarModal,seleccion,setSeleccion
    }
   
    }>
    {children}

</PropiedadContext.Provider>
)
}