import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate } from "react-router-dom";

const CardLibro = ({titulo,autor,imagen,genero}) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem',margin: '10px', display: 'inline-block', verticalAlign: 'top' 

    }}>
      <Card.Img variant="top" src={imagen} alt={titulo} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <p>{autor}</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"  onClick={() => navigate('/Secciones')}>Ir</Button>
        
        <p style={{marginTop:"10px"}}>{genero}</p>
      </Card.Body>
    </Card>
  );
}

export default CardLibro;