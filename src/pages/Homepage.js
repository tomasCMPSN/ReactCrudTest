import React from "react";
import { Container, Row } from "react-bootstrap";
import HomepageGrid from "../components/HomepageGrid";

const Homepage = () => {
  return (
    <Container>
      <h1 className="display-1 lead text-center">Catálogo</h1>
      <hr />
      <Row>
        <HomepageGrid />
      </Row>
    </Container>
  );
};

export default Homepage;
