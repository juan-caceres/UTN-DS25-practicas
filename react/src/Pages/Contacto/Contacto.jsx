import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import styles from './Contacto.module.css'

export default function Contacto() {

  return (
    <>
    <div className={styles.infoContacto}>
      <h1>Contacto</h1>
      <h3><b>Mail: </b>Ágora@gmail.com</h3>
      <h3><b>Telefono: </b>221243867</h3>
      <h4> -Instagram: AgoraLibros</h4>
      <h4> -Facebook: AgoraOficial</h4>
    </div>

  
    <Form style={{margin:"10px"}}>
      <h2>Deja tu contacto</h2>
      <p>si deseas contactarnos dejanos tu correo</p>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control style={{height:"30px"}} type="email" placeholder="Enter email" />
    
      </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre</Form.Label>
            <Form.Control style={{height:"30px"}}  type="text" placeholder="Nombre" />
          </Form.Group>
        
          <Button variant="dark" type="submit">
            Submit
          </Button>
    </Form>
    </>
    
  );

  
}

