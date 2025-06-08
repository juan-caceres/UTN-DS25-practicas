import { DatosContexto } from '../../DatosContext';
import { useContext } from 'react';

import styles from './Secciones.module.css'

export default function Secciones() {
  
  return (
    <div>  
      <h1 style={{textAlign:"center"}}>secciones</h1>
      <h2>Filosofia</h2>
      <PaginaPrincipal inicio={27} fin ={32}  />
      <h2>Literatura</h2>
      <PaginaPrincipal inicio={21} fin ={26} />
      <h2>Realismo magico</h2>
      <PaginaPrincipal inicio={15} fin ={20} />
      <h2>Crimen</h2>
        <PaginaPrincipal inicio={3} fin ={8} />
      <h2>Terror</h2>
      <PaginaPrincipal inicio={9} fin ={14} />

  
      
    </div>


  );
}

// PaginaPrincipal.jsx

function PaginaPrincipal({ inicio = 0, fin = libros.length }) {
  const { libros } = useContext(DatosContexto); // 

  function mostrarLibros(inicio, fin) {
    const librosFiltrados = libros.slice(inicio, fin);
    return librosFiltrados.map((libro, index) => (
      <div key={index} className={styles.infoLibro}>
        <img src={libro.portada} alt={libro.titulo} className="w-full h-64 object-cover mb-2" />
        <h2 className="text-lg font-semibold">{libro.titulo}</h2>
        <p className="text-gray-600">Autor: {libro.autor}</p>
        <p className="text-gray-600">Descripcion: {libro.descripcion}</p>
      </div>
    ));
  }

  return (
    <div >
      {mostrarLibros(inicio, fin)}
    </div>
  );
}





