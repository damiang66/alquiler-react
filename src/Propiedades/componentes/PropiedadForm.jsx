import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { UsuarioFindById, usuarioFindAll } from './../../Usuario/service/UsuarioService';
import { propiedadFindById, propiedadSave, propiedadUpdate } from "../service/PropiedadService";
import Swal from "sweetalert2";
const inicialPropiedad={
    id:0,
    ubicacion:'',
    precio:0,
    usuario:{
        id:0,
        username:""

    }
}
export const PropiedadForm = () => {
    const navegar = useNavigate();
    const { id } = useParams();
    const [titulo, setTitulo] = useState('Formulario de Propiedades');
    const [usuarios, setUsuarios] = useState([])
    const [usuario,setUsuario]=useState({});
    const [propiedad,setPropiedad]= useState(inicialPropiedad)
    const[errores,setErrores]=useState("")
    const cambiar = ({target})=>{
        const {name,value}=target;
       console.log(name+ " "+ value);
       /*
       if(name=='usuario'){
        const usuario = traerUsuarioPorId(parseInt(value))
           setPropiedad({
            ...propiedad,
            [usuario]:{
               usuario
            }
           }) 
       }else{
        setPropiedad({
            ...propiedad,
         
            [name]:value,
        })
*/

setPropiedad({
    ...propiedad,
 
    [name]:value,
})
       
        
    }
    const traerUsuarioPorId = async(id)=>{
        const respuesta = await UsuarioFindById(propiedad.usuario);
        console.log(respuesta.data);
        return respuesta.data;
       
    }
    const traerUsuarios = async () => {
        const respuesta = await usuarioFindAll();
        setUsuarios(respuesta.data)
    }
    const traerPropiedad = async()=>{
        const respuesta = await propiedadFindById(id);
        console.log(respuesta.data);
        setPropiedad(respuesta.data)
    }
    useEffect(() => {
        traerUsuarios()
        if(id){
            traerPropiedad()
            setTitulo('Editar Propiedad')
        }else{
            setTitulo('Crear Propiedad')
        }
    }, [])

    const save = async ()=>{
        
        event.preventDefault()
        console.log(propiedad);
        try {
         
            await propiedadSave(propiedad);
            Swal.fire('Exito: ', 'la propiedad fue creada con exito', 'info');
            navegar("/propiedades")

        } catch (error) {
            Swal.fire('Error', 'Error al crear la propiedad', 'error')
            if(error.response.status==400){
              
                setErrores(error.response.data)
                console.log('error');
                console.log(error);
            }
        }
       
    }
    const editar = async()=>{
        
        event.preventDefault()
       try {
        console.log(propiedad.usuario.id);
        if(propiedad.usuario.id!=undefined){
            console.log("entro");
         
        }else{
            const respuesta = await traerUsuarioPorId(parseInt( propiedad.usuario))
            setUsuario(respuesta.data)
            console.log(usuario);
            setPropiedad({
                ...propiedad,
                usuario:{
                   id:usuario.id,

                }
            })
           
        }
      
        console.log(propiedad
         );
       await propiedadUpdate(propiedad);
       Swal.fire('Exito: ', 'la propiedad fue modificado con exito', 'info');
       navegar('/propiedades')
       } catch (error) {
       console.log(error);
       Swal.fire('Error', 'Error al editar la propiedad', 'error')
        if(error.response.status==400){
           
            setErrores(error.response.data)
            console.log('error');
            console.log(error);
        }
        
       }
    }

    return (<>
        <div className="card">
            <div className="card card-head">
                <h4 className="card-title"> {titulo}</h4>

            </div>
            <div className="card card-body">
                <form>
        {!id? <div className="mb-3">
                <label className="form-label">Seleccione Propietario</label>
                <select name="usuario" value={propiedad.usuario}onChange={cambiar} className="form-select" aria-label="Default select example">
                    {usuarios.map(u => (

                    
                        <option key={u.id} value={u.id}>{u.username}</option>
                       
                   
                    ))}
 </select>



                </div>:""}
               
                <div className="mb-3">
                    <label className="form-label">Ubicacion</label>
                    <textarea name="ubicacion"value={propiedad.ubicacion} onChange={cambiar} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    {!errores?.ubicacion ? '' : <div className="alert alert-danger" >
                                {errores.ubicacion}
                            </div>}
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input name="precio"value={propiedad.precio} onChange={cambiar} className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                    {!errores?.precio ? '' : <div className="alert alert-danger" >
                                {errores.precio}
                            </div>}
                </div>
                <div className="mb-3">
                    {!id? < button onClick={save} className="btn btn-success btn-sm">Crear</button>:< button onClick={editar} className="btn btn-success btn-sm">Editar</button>}
                   
                </div>
                </form>
            </div>
        </div>
    </>)
}