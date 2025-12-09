const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    lowercase: true,
    trim: true
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es requerido']
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es requerida'],
    min: [new Date(), 'La fecha no puede ser en el pasado']
  },
  personas: {
    type: Number,
    required: true,
    min: [1, 'Mínimo 1 persona'],
    max: [20, 'Máximo 20 personas']
  },
  mensaje: {
    type: String,
    maxlength: [500, 'El mensaje no puede exceder 500 caracteres']
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmada', 'cancelada', 'completada'],
    default: 'pendiente'
  },
  codigoReserva: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
});

// Generar código de reserva automático antes de guardar
reservaSchema.pre('save', function(next) {
  if (!this.codigoReserva) {
    this.codigoReserva = 'BH-' + Date.now().toString().slice(-6) + Math.random().toString(36).substr(2, 3).toUpperCase();
  }
  next();
});

module.exports = mongoose.model('Reserva', reservaSchema);