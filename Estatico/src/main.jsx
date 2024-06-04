import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import Header from "./Componentes Generales/Header/Header";
import './index.css'
import Home from './Module/Home/Home';
import Inventario from './Module/Inventario/Inventario';
import { FullScreen } from './Componentes Generales/FullWindow/FullScreen';
import Clientes from './Module/Clientes/Clientes';
import Pedidos from './Module/Pedidos/Pedidos';
import Proveedores from './Module/Proveedores/Proveedores';
import Contabilidad from './Module/Contabilidad/Contabilidad';

import { ToastWrapper } from 'keep-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="Inventario" element={<Inventario/>}/>
        <Route path="Clientes" element={<Clientes/>}/>
        <Route path="Pedidos" element={<Pedidos/>}/>
        <Route path="Proveedores" element={<Proveedores/>}/>
        <Route path="Contabilidad" element={<Contabilidad/>}/>
        <Route path="/"/>
      </Routes>

    <FullScreen/>
    <ToastWrapper />
  </BrowserRouter>
  
)
