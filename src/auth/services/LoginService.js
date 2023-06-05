
import axios  from 'axios';



export const isLogin=()=>{
if(localStorage.getItem('usuario')){
    return true;
}
return false;
}
export const guardarLogin=(usuario)=>{
  
    localStorage.setItem('usuario', JSON.stringify(usuario));

}
export const logout=()=>{
localStorage.clear()
}
export const obtenerUser=()=>{
    const usuario = localStorage.getItem('usuario');
    console.log(usuario);
    return usuario;
  //  console.log(usuario);
}
export const obtenerUsuario =async(username,password)=> {
    const url = 'http://localhost:8080/usuario/nombre'
try {
    return await axios.get(`${url}/${username}/${password}`)
} catch (error) {
    throw error;
}
}