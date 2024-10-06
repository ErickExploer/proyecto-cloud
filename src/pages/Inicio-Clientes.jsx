// src/pages/Inicio-Deudas.js
import React from 'react';
import Clientes from '../components/Clientes';


const InicioClientes = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Gestión de Clientes</h1>
      <Clientes></Clientes>
    </div>
  );
};

export default InicioClientes;
