import React from 'react'
import Portada from "../../images/inicio.jpg";
import { Link } from "react-router-dom";
import './Inicio.css'

export const Inicio = () => {
    return (
        <div className='inicio'>
            <Link to='/'><h1 className=''>Inicio</h1></Link>
            <Link to='/Productos'><h1 className=''>Productos</h1></Link>
            <img src={Portada} alt='inicio'></img>
        </div>
    )
}
