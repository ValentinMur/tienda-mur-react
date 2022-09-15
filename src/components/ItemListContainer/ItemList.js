import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { Link } from "react-router-dom";

export const ProductoItem = ({
    id,
    title,
    price,
    image,
    category,
    cantidad
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito

    return (
        <div>
            <div className='producto'>
                <a href='#'>
                    <div className='producto__img'>
                        <img src={image} alt={title}></img>
                    </div>
                </a>
                <div className='producto__footer'>
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p className='price'>${price}</p>
                </div>
                <div className='buttom'>
                    <button className='btn' onClick={() => addCarrito(id)}>
                        Agregar al carrito
                    </button>
                    <div>
                        <a href='#' className='btn__vista'>vista</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
