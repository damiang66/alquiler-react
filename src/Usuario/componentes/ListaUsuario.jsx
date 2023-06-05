import { useEffect } from "react"
import { useState } from "react"
import { UsuarioDelete, usuarioFindAll } from "../service/UsuarioService"
import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"

export const ListaUsuario=()=>{
    const titulo= 'Lista de Usuarios'
    const [usuarioLista,setUsuarioLista]=useState([])
    const listarUsuarios = async ()=>{
       const respuesta = await usuarioFindAll();
        setUsuarioLista(respuesta.data)

    }
    useEffect(()=>{
        listarUsuarios()
    },[])

    const eliminar = async(id)=>{
        Swal.fire({
            title: 'Eliminar',
            text: "Esta seguro que desea eliminar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,Eliminar!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                await UsuarioDelete(id);
                setUsuarioLista(usuarioLista.filter(u=>u.id!=id))
             
                Swal.fire(
                  'Eliminado!',
                  'El Usuario fue eliminado con exito',
                  'success'
                )
               
              
      
            }
          })
       


    }

    return (<>
    <div className="card" >
  <div className="card-header">
    {titulo}
    <NavLink to={'/usuarios/form'} className={'btn btn-success btn-sm m-2'}>Crear</NavLink>
  </div>

 <table className="table table-striped-columns">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Usename</th>
      <th scope="col">Email</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Telefono</th>
      <th scope="col">Editar</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {usuarioLista.map(u=>(
 <tr key={u.id}>
    <td>{u.id}</td>
    <td>{u.username}</td>
    <td>{u.email}</td>
    <td>{u.nombre}</td>
    <td>{u.apellido}</td>
    <td>{u.telefono}</td>
    <td>
        <NavLink to={`/usuarios/form/${u.id}`} className="btn btn-success btn-sm">Editar</NavLink>
    </td>
    <td>
        <button onClick={()=>eliminar(u.id)} className="btn btn-danger btn-sm">Eliminar</button>
    </td>
    
 </tr>
    ))}
   
   
  </tbody>
  </table>
 </div>

   
    </>)
}