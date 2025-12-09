const express = require('express');
const router = express.Router();
const {
  getMenu,
  getProductoById,
  crearProducto
} = require('../controllers/menuController');

// Ruta pública
router.get('/', getMenu);
router.get('/:id', getProductoById);

// Ruta protegida (admin) - la agregaremos después
// router.post('/', crearProducto);

module.exports = router;