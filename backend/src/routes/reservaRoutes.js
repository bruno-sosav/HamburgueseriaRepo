const express = require('express');
const router = express.Router();
const {
  crearReserva,
  getReservas,
  getReservaByCodigo
} = require('../controllers/reservaController');

// Ruta pública
router.post('/', crearReserva);
router.get('/codigo/:codigo', getReservaByCodigo);

// Ruta protegida (admin) - la agregaremos después
// router.get('/', getReservas);

module.exports = router;