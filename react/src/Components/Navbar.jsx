import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <nav style={{
        top:"230px",
        left:"30%",
        borderRadius:"5px",
        position:"relative",
        display: "flex",
        gap: "3em",
        padding: "5px",
        background: "#a54334",
        width:"50%",
        zIndex: "1000",
        justifyContent:"center" }}>
      <Link className={styles.btnNav} to="/">Inicio</Link>
      <Link className={styles.btnNav} to="/Contacto">Contacto</Link>
      <Link className={styles.btnNav} to="/Registracion">Registraciones</Link>
      <Link className={styles.btnNav} to="/Secciones">Secciones</Link>
    </nav>
  );
}
