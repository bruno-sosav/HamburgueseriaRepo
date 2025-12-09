const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es requerida'],
    maxlength: [500, 'La descripción no puede exceder 500 caracteres']
  },
  precio: {
    type: Number,
    required: [true, 'El precio es requerido'],
    min: [0, 'El precio no puede ser negativo']
  },
  categoria: {
    type: String,
    required: true,
    enum: ['premium', 'clasica', 'vegetariana', 'infantil', 'bebida', 'acompanamiento']
  },
  popular: {
    type: Boolean,
    default: false
  },
  ingredientes: [String],
  tiempoPreparacion: {
    type: Number,
    default: 15,
    min: 5,
    max: 60
  },
  disponible: {
    type: Boolean,
    default: true
  },
  imagen: {
    type: String,
    default: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd'
  }
}, {
  timestamps: true  // Crea automáticamente createdAt y updatedAt
});

module.exports = mongoose.model('Producto', productoSchema);