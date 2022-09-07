import React, { useContext } from 'react'
import Nike from "../../images/Nike.jpg";
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";


export const NavBar = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>

            <Link to='/'>
                <div className='logo'>
                    <img src={Nike} alt='logo' width='150'></img>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Productos'>Shop</Link>
                </li>
            </ul>
            <div className='cart' onClick={toogleMenu}>
                {CartWidget()}
                <span className='item__total'>{carrito.length}</span>
            </div>
        </header>

    )
}
