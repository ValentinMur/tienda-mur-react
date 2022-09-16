import React from "react";
import { NavBar } from "./components/NavBar/NavBar";


import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "../src/components/Paginas";
import { DataProvider } from "./context/Dataprovider";

import 'boxicons'

import { Carrito } from "./components/Carrito/Carrito";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Carrito />

          <Paginas />
        </Router>

      </div>
    </DataProvider>
  );
}

export default App;
