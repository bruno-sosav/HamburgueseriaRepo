// seed.js
const mongoose = require('mongoose');
const Producto = require('./models/Producto');
const connectDB = require('./db');

const productos = [
  {
    nombre: "Black Angus Reserve",
    descripcion: "Carne Black Angus 250g madurada 21 días con queso manchego, cebolla caramelizada y salsa de trufa negra",
    precio: 18.50,
    categoria: "premium",
    popular: true,
    ingredientes: ["Carne Angus", "Queso Manchego", "Cebolla Caramelizada", "Salsa Trufa", "Pan Brioche"],
    tiempoPreparacion: 18,
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    nombre: "BBQ Master",
    descripcion: "Carne ahumada en madera de roble con salsa BBQ casera, bacon crujiente y aros de cebolla",
    precio: 15.90,
    categoria: "clasica",
    popular: true,
    ingredientes: ["Carne Ahumada", "Bacon", "Cebolla", "Salsa BBQ", "Queso Cheddar"],
    tiempoPreparacion: 15,
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1571091718767-18b5b1457add"
  },
  {
    nombre: "Mediterranean Gold",
    descripcion: "Carne de cordero lechal con queso feta, tomates secos y pesto de albahaca",
    precio: 16.50,
    categoria: "premium",
    popular: true,
    ingredientes: ["Cordero", "Queso Feta", "Tomates Secos", "Pesto", "Rúcula"],
    tiempoPreparacion: 16,
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1553979459-d2229ba7433w"
  },
  {
    nombre: "Veggie Paradise",
    descripcion: "Hamburguesa de quinoa y garbanzos con aguacate, espinacas y mayonesa de cilantro",
    precio: 14.75,
    categoria: "vegetariana",
    popular: false,
    ingredientes: ["Quinoa", "Garbanzos", "Aguacate", "Espinacas", "Cilantro"],
    tiempoPreparacion: 12,
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1559314809-2b99056a8c4a"
  },
  {
    nombre: "Little Chef",
    descripcion: "Hamburguesa mini con queso y papas fritas, perfecta para los más pequeños",
    precio: 8.50,
    categoria: "infantil",
    popular: false,
    ingredientes: ["Carne de Res", "Queso", "Pan Suave", "Papas Fritas"],
    tiempoPreparacion: 10,
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1551782450-17144efb9c50"
  },
  {
    nombre: "Refresco Clásico",
    descripcion: "Refresco de cola 500ml",
    precio: 3.50,
    categoria: "bebida",
    popular: false,
    ingredientes: [],
    tiempoPreparacion: 2,
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
  },
  {
    nombre: "Papas Gourmet",
    descripcion: "Papas fritas con piel y especias de la casa",
    precio: 5.50,
    categoria: "acompanamiento",
    popular: true,
    ingredientes: ["Papas", "Especias", "Sal Marina"],
    tiempoPreparacion: 8,
    disponible: true,
    imagen: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d"
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Limpiar colección
    await Producto.deleteMany({});
    console.log('🗑️  Productos anteriores eliminados');
    
    // Insertar nuevos productos
    await Producto.insertMany(productos);
    console.log(`✅ ${productos.length} productos insertados`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

seedDatabase();