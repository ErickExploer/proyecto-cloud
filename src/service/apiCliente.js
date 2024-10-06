// src/service/api.js
import axios from 'axios';

// URL base de la API del backend
const API_URL = 'http://3.225.233.88:5000'; // Cambia localhost por tu IP de AWS

// Resto de tu código sigue igual...


// Función para obtener todas las clientes
export const getClientes = async () => {
  try {
    const response = await axios.get(`${API_URL}/clientes`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo los clientes:', error);
    throw error;
  }
};


export const editarCliente = async (id_cliente, clienteData) => {
    try {
      const response = await axios.put(`${API_URL}/clientes/${id_cliente}`, clienteData);
      return response.data;
    } catch (error) {
      console.error('Error editando el cliente:', error);
      throw error;
    }
  };
  
  
  export const eliminarCliente = async (id_cliente) => {
    try {
      const response = await axios.delete(`${API_URL}/clientes/${id_cliente}`);
      return response.data;
    } catch (error) {
      console.error('Error eliminando el cliente:', error);
      throw error;
    }
  };