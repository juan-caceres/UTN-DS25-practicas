import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DatosProvider } from './DatosContext';
import Cabecera from './Components/Cabecera';
import Home from "./Pages/home/Home";
import Contacto from "./Pages/Contacto/Contacto";
import Registracion from "./Pages/Registraciones/Registracion";
import Secciones from "./Pages/Secciones/Secciones";
import Footer from './Components/Footer';
import NavegadorSuperior from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div style={{ minHeight: '100vh'}}>
      <DatosProvider> 
        <Router>
          <NavegadorSuperior />
          <Cabecera />
          <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
            }}>
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contacto" element={<Contacto />} />
                <Route path="/Registracion" element={<Registracion />} />
                <Route path="/Secciones" element={<Secciones />} />
              </Routes>
            </main>
          
            <footer><Footer /></footer>

          </div>
        </Router>
      </DatosProvider>
    </div>

      
  );
}


export default App
