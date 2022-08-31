import React from 'react'
import Nike from "../../images/Nike.jpg";
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'


export const NavBar = () => {
    return (
        <header>

            <a href='#'>
                <div className='logo'>
                    <img src={Nike} alt='logo' width='150'></img>
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Shop</a>
                </li>
            </ul>
            <div className='cart'>
                {CartWidget()}
                <span className='item__total'>0</span>
            </div>
        </header>

    )
}
