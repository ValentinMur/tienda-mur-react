import Card from "../../images/img03.jpg";
import './carrito.css'
import { DataContext } from "../../context/Dataprovider";
import { useContext } from "react";

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito;

    const tooglefalse = () => {
        setMenu(false)
    }

    const show1 = menu ? 'carritos show' : 'carritos'
    const show2 = menu ? 'carrito show' : 'carrito'

    return (
        <div className={show1}>
            <div className={show2}>
                <div className='carrito__close' onClick={tooglefalse}>
                    <box-icon name='x'></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className='carrito__center'>
                    {
                        carrito.map((producto) => (



                            <div className='carrito__item'>
                                <img src={producto.image} />
                                <div>
                                    <h3>{producto.title}</h3>
                                    <p className="price">${producto.price}</p>
                                </div>
                                <div>
                                    <box-icon name='up-arrow' type='solid'></box-icon>
                                    <p className="cantidad">{producto.cantidad}</p>
                                    <box-icon name='down-arrow' type='solid'></box-icon>
                                </div>
                                <div className="remove__item">
                                    <box-icon name='trash'></box-icon>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="carrito__footer">
                    <h3>Total: $000</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>

        </div>
    )
}
