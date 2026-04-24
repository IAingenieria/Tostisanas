// Base de datos de productos Tostisanas
// Para integrar en las aplicaciones HTML

const PRODUCTOS_TOSTISANAS = {
  metadata: {
    empresa: "Tostisanas",
    version: "1.0",
    fecha_actualizacion: "2026-04-23",
    total_productos: 48,
    categorias: 6
  },

  // Categorías de productos
  categorias: {
    TORTILLAS_MAIZ: "cat-001",
    TORTILLAS_HARINA: "cat-002",
    BAJAS_CARBOHIDRATOS: "cat-003",
    INTEGRALES: "cat-004",
    TOSTADAS: "cat-005",
    BOCADILLOS: "cat-006"
  },

  // Productos por categoría
  productos: [
    // ═══ TORTILLAS DE MAÍZ ═══
    { sku: "TM-001", nombre: "Tortillas de Maíz Blanco", categoria: "cat-001", presentacion: "1 kg (30 pzas)", precio: 28.50, precioCaja: 342.00, unidadesCaja: 12, vidaUtil: 15, peso: 1.0, barras: "7501234567001" },
    { sku: "TM-002", nombre: "Tortillas de Maíz Amarillo", categoria: "cat-001", presentacion: "1 kg (30 pzas)", precio: 28.50, precioCaja: 342.00, unidadesCaja: 12, vidaUtil: 15, peso: 1.0, barras: "7501234567002" },
    { sku: "TM-003", nombre: "Tortillas de Maíz Azul", categoria: "cat-001", presentacion: "500 g (15 pzas)", precio: 32.00, precioCaja: 384.00, unidadesCaja: 12, vidaUtil: 15, peso: 0.5, barras: "7501234567003" },
    { sku: "TM-004", nombre: "Tortillas de Maíz Rojo", categoria: "cat-001", presentacion: "500 g (15 pzas)", precio: 32.00, precioCaja: 384.00, unidadesCaja: 12, vidaUtil: 15, peso: 0.5, barras: "7501234567004" },
    { sku: "TM-005", nombre: "Tortillas de Maíz Mini", categoria: "cat-001", presentacion: "500 g (40 pzas)", precio: 26.00, precioCaja: 312.00, unidadesCaja: 12, vidaUtil: 15, peso: 0.5, barras: "7501234567005" },
    { sku: "TM-006", nombre: "Tortillas de Maíz Jumbo", categoria: "cat-001", presentacion: "1 kg (20 pzas)", precio: 32.00, precioCaja: 384.00, unidadesCaja: 12, vidaUtil: 15, peso: 1.0, barras: "7501234567006" },
    { sku: "TM-007", nombre: "Tortillas de Maíz Orgánico", categoria: "cat-001", presentacion: "750 g (22 pzas)", precio: 42.00, precioCaja: 504.00, unidadesCaja: 12, vidaUtil: 12, peso: 0.75, barras: "7501234567007" },
    { sku: "TM-008", nombre: "Tortillas de Maíz Sin Conservadores", categoria: "cat-001", presentacion: "1 kg (30 pzas)", precio: 35.00, precioCaja: 420.00, unidadesCaja: 12, vidaUtil: 7, peso: 1.0, barras: "7501234567008" },

    // ═══ TORTILLAS DE HARINA ═══
    { sku: "TH-001", nombre: "Tortillas de Harina Tradicional", categoria: "cat-002", presentacion: "500 g (10 pzas)", precio: 32.00, precioCaja: 384.00, unidadesCaja: 12, vidaUtil: 20, peso: 0.5, barras: "7501234568001" },
    { sku: "TH-002", nombre: "Tortillas de Harina Sobaqueras", categoria: "cat-002", presentacion: "750 g (8 pzas)", precio: 38.00, precioCaja: 456.00, unidadesCaja: 12, vidaUtil: 20, peso: 0.75, barras: "7501234568002" },
    { sku: "TH-003", nombre: "Tortillas de Harina Mini", categoria: "cat-002", presentacion: "400 g (16 pzas)", precio: 28.00, precioCaja: 336.00, unidadesCaja: 12, vidaUtil: 20, peso: 0.4, barras: "7501234568003" },
    { sku: "TH-004", nombre: "Tortillas de Harina Burrito", categoria: "cat-002", presentacion: "600 g (6 pzas)", precio: 36.00, precioCaja: 432.00, unidadesCaja: 12, vidaUtil: 20, peso: 0.6, barras: "7501234568004" },
    { sku: "TH-005", nombre: "Tortillas de Harina Integral", categoria: "cat-002", presentacion: "500 g (10 pzas)", precio: 36.00, precioCaja: 432.00, unidadesCaja: 12, vidaUtil: 18, peso: 0.5, barras: "7501234568005" },
    { sku: "TH-006", nombre: "Tortillas de Harina Sin Gluten", categoria: "cat-002", presentacion: "400 g (8 pzas)", precio: 48.00, precioCaja: 576.00, unidadesCaja: 12, vidaUtil: 15, peso: 0.4, barras: "7501234568006" },
    { sku: "TH-007", nombre: "Tortillas de Harina con Espinaca", categoria: "cat-002", presentacion: "500 g (10 pzas)", precio: 38.00, precioCaja: 456.00, unidadesCaja: 12, vidaUtil: 18, peso: 0.5, barras: "7501234568007" },
    { sku: "TH-008", nombre: "Tortillas de Harina con Tomate", categoria: "cat-002", presentacion: "500 g (10 pzas)", precio: 38.00, precioCaja: 456.00, unidadesCaja: 12, vidaUtil: 18, peso: 0.5, barras: "7501234568008" },

    // ═══ BAJAS EN CARBOHIDRATOS ═══
    { sku: "BC-001", nombre: "Tortillas Keto Original", categoria: "cat-003", presentacion: "300 g (8 pzas)", precio: 52.00, precioCaja: 624.00, unidadesCaja: 12, vidaUtil: 25, peso: 0.3, barras: "7501234569001", carbs: 3 },
    { sku: "BC-002", nombre: "Tortillas Keto con Linaza", categoria: "cat-003", presentacion: "300 g (8 pzas)", precio: 54.00, precioCaja: 648.00, unidadesCaja: 12, vidaUtil: 25, peso: 0.3, barras: "7501234569002", carbs: 2.5 },
    { sku: "BC-003", nombre: "Tortillas Proteína Plus", categoria: "cat-003", presentacion: "350 g (8 pzas)", precio: 56.00, precioCaja: 672.00, unidadesCaja: 12, vidaUtil: 25, peso: 0.35, barras: "7501234569003", carbs: 4 },
    { sku: "BC-004", nombre: "Tortillas Fit con Chía", categoria: "cat-003", presentacion: "300 g (8 pzas)", precio: 54.00, precioCaja: 648.00, unidadesCaja: 12, vidaUtil: 25, peso: 0.3, barras: "7501234569004", carbs: 3.5 },
    { sku: "BC-005", nombre: "Tortillas Zero Carb", categoria: "cat-003", presentacion: "250 g (6 pzas)", precio: 62.00, precioCaja: 744.00, unidadesCaja: 12, vidaUtil: 30, peso: 0.25, barras: "7501234569005", carbs: 0.5 },
    { sku: "BC-006", nombre: "Tortillas Diabetic Friendly", categoria: "cat-003", presentacion: "350 g (10 pzas)", precio: 58.00, precioCaja: 696.00, unidadesCaja: 12, vidaUtil: 25, peso: 0.35, barras: "7501234569006", carbs: 5 },

    // ═══ INTEGRALES ═══
    { sku: "TI-001", nombre: "Tortillas Integrales de Trigo", categoria: "cat-004", presentacion: "500 g (10 pzas)", precio: 34.00, precioCaja: 408.00, unidadesCaja: 12, vidaUtil: 20, peso: 0.5, barras: "7501234570001" },
    { sku: "TI-002", nombre: "Tortillas Integrales de Avena", categoria: "cat-004", presentacion: "450 g (10 pzas)", precio: 38.00, precioCaja: 456.00, unidadesCaja: 12, vidaUtil: 18, peso: 0.45, barras: "7501234570002" },
    { sku: "TI-003", nombre: "Tortillas Multigrano", categoria: "cat-004", presentacion: "500 g (10 pzas)", precio: 40.00, precioCaja: 480.00, unidadesCaja: 12, vidaUtil: 20, peso: 0.5, barras: "7501234570003" },
    { sku: "TI-004", nombre: "Tortillas de Centeno", categoria: "cat-004", presentacion: "450 g (10 pzas)", precio: 42.00, precioCaja: 504.00, unidadesCaja: 12, vidaUtil: 18, peso: 0.45, barras: "7501234570004" },
    { sku: "TI-005", nombre: "Tortillas de Amaranto", categoria: "cat-004", presentacion: "400 g (10 pzas)", precio: 44.00, precioCaja: 528.00, unidadesCaja: 12, vidaUtil: 18, peso: 0.4, barras: "7501234570005" },
    { sku: "TI-006", nombre: "Tortillas de Quinoa", categoria: "cat-004", presentacion: "400 g (10 pzas)", precio: 46.00, precioCaja: 552.00, unidadesCaja: 12, vidaUtil: 18, peso: 0.4, barras: "7501234570006" },
    { sku: "TI-007", nombre: "Tortillas de Nopal", categoria: "cat-004", presentacion: "450 g (10 pzas)", precio: 40.00, precioCaja: 480.00, unidadesCaja: 12, vidaUtil: 15, peso: 0.45, barras: "7501234570007" },
    { sku: "TI-008", nombre: "Tortillas de Semillas Mix", categoria: "cat-004", presentacion: "450 g (10 pzas)", precio: 42.00, precioCaja: 504.00, unidadesCaja: 12, vidaUtil: 20, peso: 0.45, barras: "7501234570008" },

    // ═══ TOSTADAS ═══
    { sku: "TS-001", nombre: "Tostadas Clásicas", categoria: "cat-005", presentacion: "500 g (30 pzas)", precio: 24.00, precioCaja: 288.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.5, barras: "7501234571001" },
    { sku: "TS-002", nombre: "Tostadas Horneadas", categoria: "cat-005", presentacion: "400 g (25 pzas)", precio: 28.00, precioCaja: 336.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.4, barras: "7501234571002" },
    { sku: "TS-003", nombre: "Tostadas de Maíz Azul", categoria: "cat-005", presentacion: "400 g (25 pzas)", precio: 32.00, precioCaja: 384.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.4, barras: "7501234571003" },
    { sku: "TS-004", nombre: "Tostadas Charolas", categoria: "cat-005", presentacion: "600 g (20 pzas)", precio: 26.00, precioCaja: 312.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.6, barras: "7501234571004" },
    { sku: "TS-005", nombre: "Tostadas Caseras", categoria: "cat-005", presentacion: "500 g (30 pzas)", precio: 30.00, precioCaja: 360.00, unidadesCaja: 12, vidaUtil: 60, peso: 0.5, barras: "7501234571005" },
    { sku: "TS-006", nombre: "Tostadas Integrales", categoria: "cat-005", presentacion: "400 g (25 pzas)", precio: 34.00, precioCaja: 408.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.4, barras: "7501234571006" },
    { sku: "TS-007", nombre: "Tostadas Mini", categoria: "cat-005", presentacion: "350 g (50 pzas)", precio: 26.00, precioCaja: 312.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.35, barras: "7501234571007" },
    { sku: "TS-008", nombre: "Tostadas Tostisanas Premium", categoria: "cat-005", presentacion: "450 g (28 pzas)", precio: 36.00, precioCaja: 432.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.45, barras: "7501234571008" },

    // ═══ BOCADILLOS ═══
    { sku: "BO-001", nombre: "Totopos Naturales", categoria: "cat-006", presentacion: "250 g", precio: 28.00, precioCaja: 336.00, unidadesCaja: 12, vidaUtil: 120, peso: 0.25, barras: "7501234572001" },
    { sku: "BO-002", nombre: "Totopos con Sal", categoria: "cat-006", presentacion: "250 g", precio: 28.00, precioCaja: 336.00, unidadesCaja: 12, vidaUtil: 120, peso: 0.25, barras: "7501234572002" },
    { sku: "BO-003", nombre: "Totopos con Chile", categoria: "cat-006", presentacion: "250 g", precio: 30.00, precioCaja: 360.00, unidadesCaja: 12, vidaUtil: 120, peso: 0.25, barras: "7501234572003" },
    { sku: "BO-004", nombre: "Totopos con Limón", categoria: "cat-006", presentacion: "250 g", precio: 30.00, precioCaja: 360.00, unidadesCaja: 12, vidaUtil: 120, peso: 0.25, barras: "7501234572004" },
    { sku: "BO-005", nombre: "Chicharrones de Harina", categoria: "cat-006", presentacion: "200 g", precio: 22.00, precioCaja: 264.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.2, barras: "7501234572005" },
    { sku: "BO-006", nombre: "Chicharrones con Chile", categoria: "cat-006", presentacion: "200 g", precio: 24.00, precioCaja: 288.00, unidadesCaja: 12, vidaUtil: 90, peso: 0.2, barras: "7501234572006" },
    { sku: "BO-007", nombre: "Tiras de Tortilla Horneadas", categoria: "cat-006", presentacion: "180 g", precio: 26.00, precioCaja: 312.00, unidadesCaja: 12, vidaUtil: 120, peso: 0.18, barras: "7501234572007" },
    { sku: "BO-008", nombre: "Nachos Tostisanas", categoria: "cat-006", presentacion: "300 g", precio: 32.00, precioCaja: 384.00, unidadesCaja: 12, vidaUtil: 120, peso: 0.3, barras: "7501234572008" }
  ],

  // Funciones auxiliares
  getProductosBySKU: function(sku) {
    return this.productos.find(p => p.sku === sku);
  },

  getProductosByCategoria: function(categoriaId) {
    return this.productos.filter(p => p.categoria === categoriaId);
  },

  getProductosByNombre: function(nombre) {
    const search = nombre.toLowerCase();
    return this.productos.filter(p => p.nombre.toLowerCase().includes(search));
  },

  getTotalProductos: function() {
    return this.productos.length;
  },

  getCategorias: function() {
    return [
      { id: "cat-001", nombre: "Tortillas de Maíz", count: 8 },
      { id: "cat-002", nombre: "Tortillas de Harina", count: 8 },
      { id: "cat-003", nombre: "Bajas en Carbohidratos", count: 6 },
      { id: "cat-004", nombre: "Integrales", count: 8 },
      { id: "cat-005", nombre: "Tostadas", count: 8 },
      { id: "cat-006", nombre: "Bocadillos", count: 8 }
    ];
  },

  // Generar sugerido de venta (para la app de campo)
  generarSugerido: function(historialCliente = {}) {
    // Seleccionar productos más vendidos de cada categoría
    const sugeridos = [
      { ...this.getProductosBySKU("TM-001"), qty: 3, sugerido: true },
      { ...this.getProductosBySKU("TH-001"), qty: 2, sugerido: true },
      { ...this.getProductosBySKU("TS-001"), qty: 4, sugerido: true },
      { ...this.getProductosBySKU("BO-001"), qty: 2, sugerido: true },
      { ...this.getProductosBySKU("TI-001"), qty: 1, sugerido: true },
      { ...this.getProductosBySKU("BC-001"), qty: 1, sugerido: true }
    ];
    return sugeridos;
  }
};

// Exportar para uso en Node.js (si aplica)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTOS_TOSTISANAS;
}

console.log('✅ Base de datos de productos Tostisanas cargada:', PRODUCTOS_TOSTISANAS.getTotalProductos(), 'productos');
