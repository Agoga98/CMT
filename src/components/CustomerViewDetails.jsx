import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CustomerViewDetails({customerid, firstname, lastname, email, phonenumber, birthday}) {
  return (
    <>
      <Row>
          <Col>{lastname}</Col>
          <Col xs={6}>{firstname}</Col>
          <Col>{birthday}</Col>
      </Row>
      <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
      </Row>
    </>
  )
}

export default CustomerViewDetails