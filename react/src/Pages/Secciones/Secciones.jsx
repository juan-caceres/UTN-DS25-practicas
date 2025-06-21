import { DatosContexto } from '../../DatosContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import react, {useRef} from 'react';
import styles from './Secciones.module.css'
import CardLibro from '../../Components/CardLibro';


export default function Secciones() {
  const terror = useRef(null);
   const irTerror = () => {
    terror.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const crimen = useRef(null);
   const irCrimen = () => {
    crimen.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const literatura = useRef(null);
   const irLiteratura = () => {
    literatura.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const realismoMagico = useRef(null);
   const irRealismoMagico = () => {
    realismoMagico.current?.scrollIntoView({ behavior: 'smooth' });
  };

   const filosofia = useRef(null);
   const irFilosofia = () => {
    filosofia.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>  
      <Link className={styles.seccionesLink} onClick={irLiteratura}>literatura</Link>
      <Link className={styles.seccionesLink} onClick={irTerror}>terror</Link>
      <Link className={styles.seccionesLink} onClick={irCrimen}>crimen</Link>
      <Link className={styles.seccionesLink} onClick={irFilosofia}>filosofia</Link>
      <Link className={styles.seccionesLink} onClick={irRealismoMagico}>realismoMagico</Link>

      <h1 style={{textAlign:"center"}}>secciones</h1>
      
      <div ref={filosofia}><h2>Filosofia</h2></div>
      <PaginaPrincipal inicio={27} fin ={32}  />
      <div ref={literatura}><h2>Literatura</h2></div>
      <PaginaPrincipal inicio={21} fin ={26} />
      <div ref={realismoMagico}><h2>Realismo magico</h2></div>
      <PaginaPrincipal inicio={15} fin ={20} />
      <div ref={crimen}><h2>Crimen</h2></div>
        <PaginaPrincipal inicio={3} fin ={8} />
      <div ref={terror}>
          <h2>Terror</h2>
          <PaginaPrincipal inicio={9} fin ={14} />
      </div>
      
 
      
    </div>


  );
}

// PaginaPrincipal.jsx

function PaginaPrincipal({ inicio = 0, fin = libros.length }) {
  const { libros } = useContext(DatosContexto); // 

  function mostrarLibros(inicio, fin) {
    const librosFiltrados = libros.slice(inicio, fin);
    return( 
      <div style={{margin:"10px"}}>

        {librosFiltrados.map((libro) => (
          <CardLibro titulo={libro.titulo} autor={libro.autor} imagen={libro.portada} genero={libro.genero}/>
        ))}
    </div>
    )
  }

  return (
    <div >
      {mostrarLibros(inicio, fin)}
    </div>
  );
}





