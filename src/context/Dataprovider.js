import React, { useState, useEffect, createContext } from 'react'
import Data from '../Data'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false)


    useEffect(() => {
        const producto = Data.items
        if (producto) {
            setProductos(producto)
        } else {
            setProductos([])
        }

    }, [])

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        } else {
            alert('El producto ya se encuentra en el carrito')
        }
    }


    const [carrito, setCarrito] = useState(() => {
        const datCarrito = localStorage.getItem('dataCarrito');
        const dataCarrito = JSON.parse(datCarrito);
        return dataCarrito;


    });
    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    }, [carrito]);

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        carrito: [carrito, setCarrito],
        addCarrito: addCarrito,

    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}