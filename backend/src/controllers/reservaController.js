const Reserva = require('../models/Reserva');

// Crear nueva reserva
exports.crearReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Reserva creada exitosamente',
      data: reserva
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear reserva',
      error: error.message
    });
  }
};

// Obtener todas las reservas
exports.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find()
      .sort({ fecha: 1 });
    
    res.json({
      success: true,
      count: reservas.length,
      data: reservas
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener reservas',
      error: error.message
    });
  }
};

// Obtener reserva por código
exports.getReservaByCodigo = async (req, res) => {
  try {
    const reserva = await Reserva.findOne({ 
      codigoReserva: req.params.codigo 
    });
    
    if (!reserva) {
      return res.status(404).json({
        success: false,
        message: 'Reserva no encontrada'
      });
    }
    
    res.json({
      success: true,
      data: reserva
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al buscar reserva',
      error: error.message
    });
  }
};