import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio/Inicio";
import { ProductosLista } from "./ItemListContainer/Item";

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
