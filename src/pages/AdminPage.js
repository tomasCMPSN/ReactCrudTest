import React from 'react';
import { Container } from 'react-bootstrap';
import AdminForm from '../components/AdminForm';
import AdminTable from '../components/AdminTable';

const AdminPage = () => {
    return (
        <Container>
            <h1 className='display-1 text-center lead'>Administrar productos</h1>
            <AdminForm/>
            <h1 className='display-1 text-center lead'>Tabla de productos</h1>
            <AdminTable/>
        </Container>
    );
};

export default AdminPage;