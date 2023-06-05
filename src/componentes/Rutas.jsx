import { Route, Routes } from "react-router-dom"
import { ListaUsuario } from "../Usuario/componentes/ListaUsuario"
import { Principal } from "./Principal"
import { UsuarioFormulario } from "../Usuario/componentes/UsuarioFormulario"
import { PropiedadLista } from "../Propiedades/componentes/PropiedadLista"
import { PropiedadForm } from "../Propiedades/componentes/PropiedadForm"
import { UsuarioModal } from "../Propiedades/componentes/UsuarioModal"
import { LoginPage } from "../auth/componentes/LoginPage"
import { DetallePropiedad } from "../Propiedades/componentes/DetallePropiedad"
import { AlquilerForm } from "../Alquiler/componente/AlquilerForm"

export const Rutas = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/principal" element={<Principal />} />
            <Route path="/usuarios" element={<ListaUsuario />} />
            <Route path="/usuarios/form" element={<UsuarioFormulario />} />
            <Route path="/usuarios/form/:id" element={<UsuarioFormulario />} />
            <Route path="/propiedades" element={<PropiedadLista />} />
            <Route path="/propiedades/form" element={<PropiedadForm />} />
            <Route path="/propiedades/form/:id" element={<PropiedadForm />} />
            <Route path="/propiedades/usuario/:id" element={<UsuarioModal />} />
            <Route path="/propiedades/detalle/:id" element={<DetallePropiedad/>}/>
            <Route path="/alquiler/form/:id" element={<AlquilerForm/>}/>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </>)
}