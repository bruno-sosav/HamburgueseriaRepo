const express = require('express');
const cors = require('cors');

const connectDB = require('./db');
connectDB();

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/api', (req, res) => {
  res.json({
    message: '🍔 API de Burger House funcionando!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Ruta del menú (datos de ejemplo)
app.get('/api/menu', (req, res) => {
  const menu = [
    {
      id: 1,
      nombre: "Black Angus Reserve",
      descripcion: "Carne Black Angus 250g madurada 21 días",
      precio: 18.50,
      categoria: "premium",
      popular: true,
      ingredientes: ["Carne Angus", "Queso Manchego"],
      tiempoPreparacion: 18
    },
    {
      id: 2,
      nombre: "BBQ Master",
      descripcion: "Carne ahumada en madera de roble",
      precio: 15.90,
      categoria: "clasica",
      popular: true,
      ingredientes: ["Carne Ahumada", "Bacon"],
      tiempoPreparacion: 15
    },
    {
      id: 3,
      nombre: "Mediterranean Gold",
      descripcion: "Carne de cordero lechal con queso feta",
      precio: 16.50,
      categoria: "premium",
      popular: true,
      ingredientes: ["Cordero", "Queso Feta"],
      tiempoPreparacion: 16
    }
  ];
  
  res.json({
    success: true,
    count: menu.length,
    data: menu
  });
});

// Ruta para reservas (POST)
app.post('/api/reservas', (req, res) => {
  const reserva = req.body;
  
  // Validación básica
  if (!reserva.nombre || !reserva.email || !reserva.fecha) {
    return res.status(400).json({
      success: false,
      message: "Faltan datos requeridos"
    });
  }
  
  // Simular creación en base de datos
  const nuevaReserva = {
    id: Date.now(),
    codigo: 'BH-' + Date.now().toString().slice(-6),
    ...reserva,
    estado: 'pendiente',
    createdAt: new Date().toISOString()
  };
  
  res.status(201).json({
    success: true,
    message: 'Reserva creada exitosamente',
    data: nuevaReserva
  });
});

// Ruta para buscar reserva por código
app.get('/api/reservas/:codigo', (req, res) => {
  const { codigo } = req.params;
  
  // Simular búsqueda
  if (codigo.startsWith('BH-')) {
    res.json({
      success: true,
      data: {
        codigo: codigo,
        nombre: "Cliente de Ejemplo",
        fecha: "2024-01-20T20:00:00.000Z",
        personas: 4,
        estado: "confirmada"
      }
    });
  } else {
    res.status(404).json({
      success: false,
      message: "Reserva no encontrada"
    });
  }
});

app.use('/api/menu', menuRoutes);
app.use('/api/reservas', reservaRoutes);


// Ruta 404 - IMPORTANTE: Sin el '*' problemático
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    path: req.originalUrl
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('=================================');
  console.log('🚀 SERVIDOR BACKEND INICIADO');
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🔌 Puerto: ${PORT}`);
  console.log(`🛠️  Express: 4.18.2 (ESTABLE)`);
  console.log('=================================');
  console.log('🌐 Endpoints disponibles:');
  console.log(`   GET  http://localhost:${PORT}/api`);
  console.log(`   GET  http://localhost:${PORT}/api/menu`);
  console.log(`   POST http://localhost:${PORT}/api/reservas`);
  console.log(`   GET  http://localhost:${PORT}/api/reservas/:codigo`);
  console.log('=================================');
});