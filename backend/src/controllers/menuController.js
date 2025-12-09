const Producto = require('../models/Producto');

// Obtener todos los productos
exports.getMenu = async (req, res) => {
  try {
    const productos = await Producto.find({ disponible: true })
      .sort({ categoria: 1, precio: 1 });
    
    res.json({
      success: true,
      count: productos.length,
      data: productos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el menú',
      error: error.message
    });
  }
};

// Obtener producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    
    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }
    
    res.json({
      success: true,
      data: producto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el producto',
      error: error.message
    });
  }
};

// Crear nuevo producto (para admin)
exports.crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Producto creado exitosamente',
      data: producto
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear producto',
      error: error.message
    });
  }
};