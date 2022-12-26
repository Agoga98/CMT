import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectViewDetails({ project }) {
  return (
    <Container
      fluid
      className="mb-3"
      style={{
        borderRadius: "15px",
        border: "2px solid #B23850",
      }}
    >
      <Row
        style={{ height: "30px", backgroundColor: "#B23850", color: "white" }}
      >
        <h3>
          {project.Adress}, {project.PostalCode} {project.City}
        </h3>
      </Row>
      <Row>
        <Row style={{ height: "100px" }}>Hier kommt dann die TimeLine</Row>
        <Row>
          <Col>
            <Row>
              <h5 className="">Adress:</h5>
              {project.Adress}, {project.PostalCode} {project.City}
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </Container>
  );
}
