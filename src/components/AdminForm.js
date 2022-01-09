import React from "react";
import { Form, Button } from "react-bootstrap";

const AdminForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formProduct">
        <Form.Label>Producto</Form.Label>
        <Form.Control type="text" placeholder="Producto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" placeholder="Descripcion"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formURL">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="success" type="submit">
        Guardar
      </Button>
      <Button className="ms-2" variant="primary" type="submit">
        Nuevo
      </Button>
    </Form>
  );
};

export default AdminForm;
