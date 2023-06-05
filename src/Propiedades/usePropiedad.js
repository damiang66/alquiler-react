import { useState } from "react"

export const usePropiedad = ()=>{
    const[ventana,setVentana]=useState(false);
    const[seleccion,setSeleccion]=useState(0);
    const abrirModal = (id)=>{
      
        console.log(ventana);
        setVentana(true);
        setSeleccion(id);
    }
    const cerrarModal=()=>{
        setSeleccion(0);
        setVentana(false);
        console.log(ventana);
    }
    return {
        ventana,setVentana,abrirModal,cerrarModal,setSeleccion,seleccion
    }
}