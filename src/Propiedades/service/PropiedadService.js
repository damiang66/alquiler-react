import axios from "axios";
import Swal from "sweetalert2";


  const url= 'http://localhost:8080/propiedad';
   export const proiedadesFindAll=async()=>{
    try {
        return await axios.get(url);
    } catch (error) {
        throw error;
    }
   }
   export const propiedadFindById= async(id)=>{
    try {
        return await axios.get(`${url}/${id}`);
    } catch (error) {
        Swal.fire('Error: ', `la Propiedad con id : ${id} no existe`, 'error');
        throw error;
    }
   }
   export const propiedadSave = async ({usuario,ubicacion,precio})=>{
    console.log(usuario);
    precio= parseFloat(precio);
    
        try {
            return await axios.post(url,{
                usuario:{
                    id:usuario
                },
                ubicacion,
                precio
            })
        } catch (error) {
           
            throw error;
        }
   }
   export const propiedadUpdate = async ({id,ubicacion,precio,usuario})=>{
    
console.log(usuario);


            try {
                return await axios.put(`${url}/${id}`,{
                   ubicacion,
                   precio, 
                 
                  usuario,
                   
                })
            
            } catch (error) {
                throw error;
            }
     
   }