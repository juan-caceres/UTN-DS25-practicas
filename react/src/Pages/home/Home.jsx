import styles from './Home.module.css'
import { DatosContexto } from '../../DatosContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  const {libros} = useContext(DatosContexto)
  return (
  <div style={{margin:"10px"}}>

    <Link className={styles.link} to="../Secciones"><h2>Filosofia</h2></Link>
   
      <div className={styles.infoLibro}>
         <Link className={styles.link} to="/Secciones">
          <img src={libros[3].portada} alt="portada" />
          <p><b>Titulo: </b>{libros[3].titulo}</p>
          <p><b>Autor: </b>{libros[3].autor}</p>
         </Link>
      </div>
   
    <Link className={styles.link} to="/Secciones"><h2>Realismo magico</h2></Link>

    <div className={styles.infoLibro}>
      <Link className={styles.link} to="/Secciones">
        <img src={libros[10].portada} alt="portada" />
        <p><b>Titulo: </b>{libros[10].titulo}</p>
        <p><b>Autor: </b>{libros[10].autor}</p>
      </Link>
    </div>
      <Link className={styles.link} to="/Secciones"><h2>Literatura</h2></Link>
    <div className={styles.infoLibro}>
      <Link className={styles.link} to="/secciones">
        <img src={libros[15].portada} alt="portada" />
        <p><b>Titulo: </b>{libros[15].titulo}</p>
        <p><b>Autor: </b>{libros[15].autor}</p>
      </Link>
    </div>
    <Link className={styles.link} to="/Secciones"><h2>Crimen</h2></Link>
    <div className={styles.infoLibro}>
      <Link className={styles.link} to="/Secciones">
        <img src={libros[19].portada} alt="portada" />
        <p><b>Titulo: </b>{libros[19].titulo}</p>
        <p><b>Autor: </b>{libros[19].autor}</p>
      </Link>
    </div>
    <Link className={styles.link} to="/Secciones"><h2>Terror</h2></Link>
    <div className={styles.infoLibro}>
      <Link className={styles.link} to="/Secciones">
        <img src={libros[25].portada} alt="portada" />
        <p><b>Titulo: </b>{libros[25].titulo}</p>
        <p><b>Autor: </b>{libros[25].autor}</p>
      </Link>
    </div>
    
 
  </div>


  );
}



