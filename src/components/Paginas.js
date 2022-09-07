import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio/Inicio";
import { ProductosLista } from "./Productos/productos";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path='/' exact element={<Inicio />} />
                <Route path='/Productos' exact element={<ProductosLista />} />
            </Routes>
        </section>
    )
}
