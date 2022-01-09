import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const HomepageGrid = () => {
  return (
    <Col xs={12} md={6} lg={4} className="p-3">
      <Card>
        <Card.Img variant="top" className="imgCard" src="https://pbs.twimg.com/media/FIoJHtOXwAMXJBh?format=jpg&name=large" />
        <Card.Body>
          <Card.Title>qweqeqweqe</Card.Title>
          <Card.Text>
            zxczxczczzxc
          </Card.Text>
          <Button className="w-100" variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomepageGrid;
