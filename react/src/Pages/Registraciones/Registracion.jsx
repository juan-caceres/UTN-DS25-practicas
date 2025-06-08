import { useState } from "react";
import styles from './Registracion.module.css'

export default function Registracion() {
  const [formData, setFormData] = useState({
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      email: "",
      contraseña: "",
      sexo: "",
      temaFavorito: "",
    });
  
    const temas = ["Filosofia", "Terror", "Crimen", "Realismo magico", "Literatura"];
  
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
      <main>
        <form onSubmit={handleSubmit}>
          <Nombre value={formData.nombre} onChange={handleChange} />
          <Apellido value={formData.apellido} onChange={handleChange} />
          <FechaNacimiento value={formData.fechaNacimiento} onChange={handleChange} />
          <Email value={formData.email} onChange={handleChange} />
          <Contraseña value={formData.contraseña} onChange={handleChange} />
          <Sexo value={formData.sexo} onChange={handleChange} />
          <TemaFavorito value={formData.temaFavorito} onChange={handleChange} opciones={temas} />
          <BotonEnviar />
        </form>
      </main>
    );
}
function Nombre({ value, onChange }) {
  return (
    <div>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={value} onChange={onChange}  />
    </div>
  );
}

function Apellido({ value, onChange }) {
  return (
    <div>
      <label>Apellido:</label>
      <input type="text" name="apellido" value={value} onChange={onChange}  />
    </div>
  );
}

function FechaNacimiento({ value, onChange }) {
  return (
    <div>
      <label>Fecha de Nacimiento:</label>
      <input type="date" name="fechaNacimiento" value={value} onChange={onChange}  />
    </div>
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

function Contraseña({ value, onChange }) {
  return (
    <div>
      <label>Contraseña:</label>
      <input type="password" name="contraseña" value={value} onChange={onChange}  />
    </div>
  );
}

function Sexo({ value, onChange }) {
  return (
    <div>
      <label>Sexo:</label>
      <div>
        <label>
          <input type="radio" name="sexo" value="Masculino" checked={value === "Masculino"} onChange={onChange} /> Masculino
        </label>
        <label>
          <input type="radio" name="sexo" value="Femenino" checked={value === "Femenino"} onChange={onChange} /> Femenino
        </label>
        <label>
          <input type="radio" name="sexo" value="Femenino" checked={value === "Otro"} onChange={onChange} /> Otro
        </label>
      </div>
    </div>
  );
}

function TemaFavorito({ value, onChange, opciones }) {
  return (
    <div>
      <label>Tema Favorito:</label>
      <select name="temaFavorito" value={value} onChange={onChange}>
        <option value="">Seleccionar tema</option>
        {opciones.map((tema, index) => (
          <option key={index} value={tema}>
            {tema}
          </option>
        ))}
      </select>
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
