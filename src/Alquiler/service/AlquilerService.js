import axios from "axios";
import Swal from "sweetalert2";

const url = 'http://localhost:8080/alquiler';
const urlPeticion = 'http://localhost:8080/peticion';

//peticion 
export const peticionSave= async(peticion)=>{
    try {
        return await axios.post(url,peticion);
    } catch (error) {
        throw error;
    }
}
export const peticionFindById=async(id)=>{
    try {
        return await axios.get(`${urlPeticion}/${id}`);
        
    } catch (error) {
        Swal.fire('Error:', 'la peticion no existe', 'error');
    }
}


//alquiler
export const alquilerFindAll=async()=>{
    try {
        return await axios.get(url);
    } catch (error) {
        throw error;
    }

}
export const alquilerSave = async(alquiler)=>{
    try {
        return await axios.get(url,alquiler)
    } catch (error) {
        throw error;
    }
    
}