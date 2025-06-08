import { useState } from "react";

import styles from './Contacto.module.css'

export default function Contacto() {
    const [formData, setFormData] = useState({
  
      email: "",

    });
  
    function handleChange(e) {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log("Datos enviados:", formData);
      alert("datos enviados")
      window.location.reload();
    
      // Aquí podrías hacer validaciones o enviar a un backend
    }
  return (
    <>
    <div className={styles.infoContacto}>
      <h1>Contacto</h1>
      <h3><b>Mail: </b>Ágora@gmail.com</h3>
      <h3><b>Telefono: </b>221243867</h3>
      <h4> -Instagram: AgoraLibros</h4>
      <h4> -Facebook: AgoraOficial</h4>
    </div>

    <form className={styles.contactar} onSubmit={handleSubmit}>
          <h2>Deja tu contacto</h2>
          <p>si deseas contactarnos dejanos tu correo</p>
          <Email value={formData.email} onChange={handleChange} />
          <BotonEnviar />
    </form>
    </>
    
  );

  
}

function Email({ value, onChange }) {
  return (
    <div>
      <label>Email:</label>
      <input type="email" name="email" value={value} onChange={onChange}  />
    </div>
  );
}
function BotonEnviar() {
  return (
    <div>
      <button type="submit">
        Enviar
      </button>
    </div>
  );
}

