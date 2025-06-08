import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DatosProvider } from './DatosContext';
import Navbar from "./Components/Navbar";
import Cabecera from './Components/Cabecera';
import Home from "./Pages/home/Home";
import Contacto from "./Pages/Contacto/Contacto";
import Registracion from "./Pages/Registraciones/Registracion";
import Secciones from "./Pages/Secciones/Secciones";
import Footer from './Components/Footer';



function App() {

  return (
    <div style={{ minHeight: '100vh'}}>
      <DatosProvider> 
        <Router>
          <Navbar />
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
