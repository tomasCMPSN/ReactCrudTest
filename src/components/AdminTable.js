import React from "react";
import { Table, Button } from "react-bootstrap";

const AdminTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Cod.</th>
          <th>Producto</th>
          <th>Descripción</th>
          <th>URL</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <Button className="w-100 mb-1" variant="warning">
              Editar
            </Button>
            <Button className="w-100" variant="danger">
              Editar
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AdminTable;
