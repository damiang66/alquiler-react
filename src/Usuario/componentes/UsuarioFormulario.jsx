import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { UsuarioFindById, UsuarioSave, UsuarioUpdate } from "../service/UsuarioService";
import Swal from "sweetalert2";

export const UsuarioFormulario = () => {
    const navegar = useNavigate();
    const [titulo, setTitulo] = useState("")
    const [usuarioform, setUsuarioform] = useState({});
    const [errores, setErrores] = useState("")
    const { id } = useParams('id');
    const traerPorId = async (id) => {
        try {
            const respuesta = await UsuarioFindById(id);
            setUsuarioform(respuesta.data)
        } catch (error) {
            console.log(error);
        }

    }
    const cambiarUsuario = ({ target }) => {
        const { name, value } = target;
        setUsuarioform({

            ...usuarioform,
            [name]: value,

        })
    }

    useEffect(() => {
        if (id) {
            setTitulo('Editar Usuario')
            traerPorId(id);
        } else {
            setTitulo('Crear Usuario')
        }

    }, [])
    const crear = async () => {

        event.preventDefault();
        try {
            await UsuarioSave(usuarioform);
            Swal.fire('Creado: ', `Usuario ${usuarioform.username} creado con exito`, 'success');
            navegar("/usuarios")
        } catch (error) {
            if(error.response.status==404){
                setErrores(error.response.data)
            }
            console.log(error);

        }

    }
    const editar = async() => {
        event.preventDefault();
        try {
            await UsuarioUpdate(usuarioform);
            Swal.fire('Modificado: ', `Usuario ${usuarioform.username} modificado con exito`, 'success');
            navegar("/usuarios")
        } catch (error) {
            if(error.response.status==404){
                setErrores(error.response.data)
            }
        }

    }



    return (<>
        <div className="card bg-dark border-danger text-white my-4">

            <div className="card-header">
                <h4>{titulo}</h4>
                <NavLink to={'/usuarios'} className={'btn btn-success'}> volver</NavLink>
            </div>
            <div className="card-body">
                <form>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2">Nombre</label>
                        <div className="col-sm-4">
                            <input onChange={cambiarUsuario} value={usuarioform.nombre} type="text" name="nombre" className="form-control" />
                            {!errores?.nombre ? '' : <div className="alert alert-danger" >
                                {errores.nombre}
                            </div>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2">Apellido</label>
                        <div className="col-sm-4">
                            <input onChange={cambiarUsuario} value={usuarioform.apellido} type="text" className="form-control" name="apellido" />
                            {!errores?.apellido ? '' : <div className="alert alert-danger" >
                                {errores.apellido}
                            </div>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2">Email</label>
                        <div className="col-sm-4">
                            <input onChange={cambiarUsuario} value={usuarioform.email} type="text" className="form-control" name="email" />
                            {!errores?.email ? '' : <div className="alert alert-danger" >
                                {errores.email}
                            </div>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2">Dni</label>
                        <div className="col-sm-4">
                            <input onChange={cambiarUsuario} value={usuarioform.dni} type="text" className="form-control" name="dni" />
                            {!errores?.dni ? '' : <div className="alert alert-danger" >
                                {errores.dni}
                            </div>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2">Telefono</label>
                        <div className="col-sm-4">
                            <input onChange={cambiarUsuario} value={usuarioform.telefono} type="text" className="form-control" name="telefono" />
                            {!errores?.telefono ? '' : <div className="alert alert-danger" >
                                {errores.telefono}
                            </div>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2">Nombre de usuario</label>
                        <div className="col-sm-4">
                            <input onChange={cambiarUsuario} value={usuarioform.username} type="text" className="form-control" name="username" />
                            {!errores?.username ? '' : <div className="alert alert-danger" >
                                {errores.username}
                            </div>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-form-label col-sm-2">Contraseña</label>
                        <div className="col-sm-4">
                            <input onChange={cambiarUsuario} value={usuarioform.password} type="text" className="form-control" name="password" />
                            {!errores?.password ? '' : <div className="alert alert-danger" >
                                {errores.password}
                            </div>}

                        </div>
                    </div>






                    <div className="form-group">
                        <div className="col-sm-6">
                            {!usuarioform.id ?
                                <button onClick={crear} className="btn btn-primary">Crear</button> :
                                <button onClick={editar} className="btn btn-primary" role="button" >Editar</button>
                            }




                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>)
}