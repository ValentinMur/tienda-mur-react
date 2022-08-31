import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductosLista } from "../src/components/Productos/productos";
import { ItemListContainer } from "../src/components/ItemListContainer/Greeting";

import 'boxicons';


function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer greeting='hola soy un greeting' />
      <ProductosLista />

    </div>
  );
}

export default App;
