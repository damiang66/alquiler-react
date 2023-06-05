import axios from "axios"
import Swal from "sweetalert2";

const url = 'http://localhost:8080/usuario'
export const usuarioFindAll= async()=>{
    try {
        return await axios.get(url);
        
    } catch (error) {
        
    }

}
export const UsuarioFindById=async(id)=>{
    if(id!=0){
    try {
     return await axios.get(`${url}/${id}`)   
    } catch (error) {
        Swal.fire('Error:', `El usuario con id: ${id} no exite`, 'error');
        throw error;
        
    }
}

}
export const UsuarioDelete = async(id)=>{
    try {
        await axios.delete(`${url}/${id}`);
    } catch (error) {
        throw error;
        
    }
}
export const UsuarioSave=async({nombre,username,apellido,email,telefono,dni,password})=>{
    try {
        return await axios.post(url,{
            nombre,username,apellido,email,telefono,dni,password
        })
    } catch (error) {
        throw error;
    }

}
export const UsuarioUpdate= async({id,nombre,username,apellido,email,telefono,dni,password})=>{
    try {
        return await axios.put(`${url}/${id}`,{
            nombre,username,apellido,email,telefono,dni,password 
        })
    } catch (error) {
        throw error;
    }
}

