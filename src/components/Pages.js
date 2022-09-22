import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Index/Inicio";
import { ProductosLista } from "./ItemListContainer/Item";
import { ProductoDetalles } from "./ItemDetailContainer/ProductoDetalles";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path='/' exact element={<Inicio />} />
                <Route path='/Productos' exact element={<ProductosLista />} />
                <Route path='/producto/:id' exact element={<ProductoDetalles />} />
            </Routes>
        </section>
    )
}
