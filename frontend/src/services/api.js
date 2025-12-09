// src/services/api.js
const API_URL = 'http://localhost:5001/api';

// Función para obtener el menú completo
export const getMenu = async () => {
  try {
    const response = await fetch(`${API_URL}/menu`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    return { success: false, data: [] };
  }
};

// Función para crear una reserva
export const crearReserva = async (reservaData) => {
  try {
    const response = await fetch(`${API_URL}/reservas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservaData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating reservation:', error);
    return { success: false, message: 'Error del servidor' };
  }
};

// Función para buscar una reserva por código
export const buscarReserva = async (codigo) => {
  try {
    const response = await fetch(`${API_URL}/reservas/codigo/${codigo}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching reservation:', error);
    return { success: false, message: 'Error del servidor' };
  }
};

export default {
  getMenu,
  crearReserva,
  buscarReserva
};