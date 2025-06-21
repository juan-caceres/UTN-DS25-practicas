import styles from './Home.module.css'
import { DatosContexto } from '../../DatosContext';
import { useContext } from 'react';


import CardLibro from '../../Components/CardLibro';
export default function Home() {
  const {libros} = useContext(DatosContexto)
  return (
  <div style={{margin:"10px"}}>

    {libros.slice(0,6).map((libro) => (
      <CardLibro titulo={libro.titulo} autor={libro.autor} imagen={libro.portada} genero={libro.genero}/>
    ))}
  </div>


  );
}
