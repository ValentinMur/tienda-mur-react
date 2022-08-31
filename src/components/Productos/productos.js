import React from 'react'
import './productos.css'
import IMG from '../../images/img01.jpg'

export const ProductosLista = () => {
    return (
        <>
            <h1 className='title'>PRODUCTOS</h1>
            <div className='productos'>
                <div className='producto'>
                    <a href='#'>
                        <div className='producto__img'>
                            <img src={IMG}></img>
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Titulo</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Agregar al carrito
                        </button>
                        <div>
                            <a href='#' className='btn__vista'>vista</a>
                        </div>
                    </div>
                </div>
                <div className='producto'>
                    <a href='#'>
                        <div className='producto__img'>
                            <img src={IMG}></img>
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Titulo</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Agregar al carrito
                        </button>
                        <div>
                            <a href='#' className='btn__vista'>vista</a>
                        </div>
                    </div>
                </div>
                <div className='producto'>
                    <a href='#'>
                        <div className='producto__img'>
                            <img src={IMG}></img>
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1>Titulo</h1>
                        <p>Categoria</p>
                        <p className='price'>$320</p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Agregar al carrito
                        </button>
                        <div>
                            <a href='#' className='btn__vista'>vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
