import React from 'react'
import Card from "react-bootstrap/Card"
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button"
import { FaPencilAlt } from 'react-icons/fa';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function BauvorhabenProjekt({project}) {

  const progress = getProgress(project.Status);
  return (
      <Card className='bvh-project-card'>
        <Card.Header className='cardhead' >
          <Card.Title className='cardtitle' > {project.Adress} </Card.Title>
          <Card.Subtitle className='cardsubtitle' >Status: {project.Status}</Card.Subtitle>
          <ProgressBar now={progress} max={11} label={`${((progress)*9.099999).toFixed(0)}%`}/>
        </Card.Header>
        <Card.Body className='cardbody'>
          <Card.Text>Adresse <br/></Card.Text> 
          <Card.Text >{project.Adress}, {project.PostalCode}<br/>{project.City}, {project.Country}</Card.Text>
          <Card.Text> Betreuer Vertrieb</Card.Text> 
          <Card.Text>{project.BetreuerVertrieb}</Card.Text> 
          <Card.Text> Betreuer Vertrieb</Card.Text> 
          <Card.Text>{project.BetreuerMontage}</Card.Text>
        </Card.Body>
        <Card.Footer className="cardfooter">
          <Container>
            <Row>
              <Col className='dueto'>
                <Card.Text>Fällig bis 15.01.2023</Card.Text>
              </Col>
              <Col className='supervisor'>
                <Card.Text>Betreuer: <p>{project.BetreuerMontage}</p> </Card.Text>
              </Col>
              <Col className='updatedate'>
                <Button><FaPencilAlt ></FaPencilAlt></Button>
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
      
  )
}
function getProgress(status){


  switch(status){
    case "Angebots-Erstellung":
      return 0;
      case "Warten auf Antwort":
      return 1;
      case "Nachverhandlung":
      return 2;
      case "Änderung durch Kunden":
      return 3;
      case "Naturmaß messen":
      return 4;
      case "Berechnung":
      return 5;
      case "Lieferungsdatum steht aus":
      return 6;
      case "Auftrag ersteilt":
      return 7;
      case "Montagetermin festlegen":
      return 8;
      case "In Montage":
      return 9;
      case "Feinheiten":
      return 10;
      case "Fertigstellung":
      return 11;
     default:
      return 0;

  }
}

export default BauvorhabenProjekt;
