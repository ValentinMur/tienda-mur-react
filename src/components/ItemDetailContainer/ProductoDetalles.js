import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "../ItemListContainer/ItemList";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const ProductoDetalles = () => {

    const value = useContext(DataContext);
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle] = useState([])
    const [url, setUrl] = useState(0)
    const [images, setImages] = useState('')
    const params = useParams();
    let item = 0;


    const getProducts = () => {
        const db = getFirestore()
        const querySnaspshot = collection(db, 'items')
        getDocs(querySnaspshot).then((response) => {
            const data = response.docs.map((product) => {
                console.log(product.data())
                return { id: product.id }
            })
        })
    }


    useEffect(() => {
        getProducts()
    }, [params.id, productos])




    const handleInput = (e) => {
        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)
    }

    if (detalle.length < 1) return null;

    return (
        <>
            {
                <div className="detalles">
                    <h2>{detalle.title}</h2>
                    <p className="price">${detalle.price}</p>
                    <div className="grid">
                        <p className="nuevo">New</p>
                        <div className="tamano">
                            <select placeholder="Tamaño" >
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                            </select>
                            <p>Size</p>
                        </div>
                    </div>
                    <button onClick={() => addCarrito(detalle.id)}>
                        Add to cart
                    </button>

                    {
                        url ? <img src={images} alt={detalle.title} /> : <img src={detalle.image} alt={detalle.title} />
                    }
                    <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
                    <div className="description">
                        <p><b>Description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
                        <br />

                    </div>

                </div>

            }
            <h2 className="relacionados">Other products</h2>
            <div className="productos">
                {
                    productos.map((producto) => {
                        if ((item < 6) && (detalle.category === producto.category)) {
                            item++;
                            return <ProductoItem
                                key={producto.id}
                                title={producto.title}
                                image={producto.image}
                                category={producto.category}
                                price={producto.price}
                                id={producto.id}
                            />
                        }


                    })
                }

            </div>
        </>
    )
}
