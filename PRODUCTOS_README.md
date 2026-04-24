# Base de Datos de Productos Tostisanas

**Fecha de creación:** 23 de abril de 2026  
**Última actualización:** 23 de abril de 2026 (v1.1)  
**Total de productos:** 64 productos  
**Categorías:** 6 categorías principales  
**Novedad:** Tostadas con 3 presentaciones (30, 50 y 90 piezas)

---

## 📦 Archivos de la Base de Datos

### 1. `productos_tostisanas.json`
Base de datos completa en formato JSON con toda la información detallada de productos.

**Estructura:**
- Metadata del catálogo
- 6 categorías con productos
- Información nutricional (productos bajos en carbohidratos)
- Resumen por categoría

**Uso:** Ideal para APIs REST, importación a bases de datos NoSQL, o procesamiento con scripts.

### 2. `productos_tostisanas.js`
Archivo JavaScript listo para integrar en las aplicaciones HTML.

**Características:**
- Objeto `PRODUCTOS_TOSTISANAS` con todos los productos
- Funciones auxiliares incluidas:
  - `getProductosBySKU(sku)` - Buscar por SKU
  - `getProductosByCategoria(categoriaId)` - Filtrar por categoría
  - `getProductosByNombre(nombre)` - Buscar por nombre
  - `generarSugerido()` - Generar pedido sugerido

**Uso:** Incluir en las apps HTML con `<script src="productos_tostisanas.js"></script>`

### 3. `productos_tostisanas.csv`
Formato CSV para importación a Excel, Google Sheets o bases de datos SQL.

**Columnas:**
- SKU
- Nombre
- Categoría
- Presentación
- Precio Unitario
- Precio Caja
- Unidades por Caja
- Vida Útil (días)
- Peso (KG)
- Código de Barras

---

## 🏷️ Categorías de Productos

### 1. Tortillas de Maíz (8 productos)
**Rango de precio:** $26.00 - $42.00 MXN  
**Vida útil promedio:** 13 días

| SKU | Producto | Precio | Presentación |
|-----|----------|--------|--------------|
| TM-001 | Tortillas de Maíz Blanco | $28.50 | 1 kg (30 pzas) |
| TM-002 | Tortillas de Maíz Amarillo | $28.50 | 1 kg (30 pzas) |
| TM-003 | Tortillas de Maíz Azul | $32.00 | 500 g (15 pzas) |
| TM-004 | Tortillas de Maíz Rojo | $32.00 | 500 g (15 pzas) |
| TM-005 | Tortillas de Maíz Mini | $26.00 | 500 g (40 pzas) |
| TM-006 | Tortillas de Maíz Jumbo | $32.00 | 1 kg (20 pzas) |
| TM-007 | Tortillas de Maíz Orgánico | $42.00 | 750 g (22 pzas) |
| TM-008 | Tortillas de Maíz Sin Conservadores | $35.00 | 1 kg (30 pzas) |

### 2. Tortillas de Harina (8 productos)
**Rango de precio:** $28.00 - $48.00 MXN  
**Vida útil promedio:** 19 días

| SKU | Producto | Precio | Presentación |
|-----|----------|--------|--------------|
| TH-001 | Tortillas de Harina Tradicional | $32.00 | 500 g (10 pzas) |
| TH-002 | Tortillas de Harina Sobaqueras | $38.00 | 750 g (8 pzas) |
| TH-003 | Tortillas de Harina Mini | $28.00 | 400 g (16 pzas) |
| TH-004 | Tortillas de Harina Burrito | $36.00 | 600 g (6 pzas) |
| TH-005 | Tortillas de Harina Integral | $36.00 | 500 g (10 pzas) |
| TH-006 | Tortillas de Harina Sin Gluten | $48.00 | 400 g (8 pzas) |
| TH-007 | Tortillas de Harina con Espinaca | $38.00 | 500 g (10 pzas) |
| TH-008 | Tortillas de Harina con Tomate | $38.00 | 500 g (10 pzas) |

### 3. Tortillas Bajas en Carbohidratos (6 productos)
**Rango de precio:** $52.00 - $62.00 MXN  
**Vida útil promedio:** 26 días  
**Característica especial:** Información nutricional detallada (carbohidratos netos, proteína, fibra)

| SKU | Producto | Precio | Carbs Netos |
|-----|----------|--------|-------------|
| BC-001 | Tortillas Keto Original | $52.00 | 3g |
| BC-002 | Tortillas Keto con Linaza | $54.00 | 2.5g |
| BC-003 | Tortillas Proteína Plus | $56.00 | 4g |
| BC-004 | Tortillas Fit con Chía | $54.00 | 3.5g |
| BC-005 | Tortillas Zero Carb | $62.00 | 0.5g |
| BC-006 | Tortillas Diabetic Friendly | $58.00 | 5g |

### 4. Tortillas Integrales (8 productos)
**Rango de precio:** $34.00 - $46.00 MXN  
**Vida útil promedio:** 19 días

| SKU | Producto | Precio | Presentación |
|-----|----------|--------|--------------|
| TI-001 | Tortillas Integrales de Trigo | $34.00 | 500 g (10 pzas) |
| TI-002 | Tortillas Integrales de Avena | $38.00 | 450 g (10 pzas) |
| TI-003 | Tortillas Multigrano | $40.00 | 500 g (10 pzas) |
| TI-004 | Tortillas de Centeno | $42.00 | 450 g (10 pzas) |
| TI-005 | Tortillas de Amaranto | $44.00 | 400 g (10 pzas) |
| TI-006 | Tortillas de Quinoa | $46.00 | 400 g (10 pzas) |
| TI-007 | Tortillas de Nopal | $40.00 | 450 g (10 pzas) |
| TI-008 | Tortillas de Semillas Mix | $42.00 | 450 g (10 pzas) |

### 5. Tostadas (24 productos = 8 tipos × 3 presentaciones)
**Rango de precio:** $16.00 - $68.00 MXN  
**Vida útil promedio:** 87 días  
**Presentaciones:** 30, 50 y 90 piezas

#### Ejemplo: Tostadas Clásicas (3 presentaciones)

| SKU | Presentación | Precio | Precio Caja |
|-----|--------------|--------|-------------|
| TS-001-30 | 30 piezas | $18.00 | $216.00 |
| TS-001-50 | 50 piezas | $28.00 | $336.00 |
| TS-001-90 | 90 piezas | $48.00 | $576.00 |

**Los 8 tipos disponibles:**
1. Tostadas Clásicas (TS-001-30/50/90)
2. Tostadas Horneadas (TS-002-30/50/90)
3. Tostadas de Maíz Azul (TS-003-30/50/90)
4. Tostadas Charolas (TS-004-30/50/90)
5. Tostadas Caseras (TS-005-30/50/90) - Vida útil: 60 días
6. Tostadas Integrales (TS-006-30/50/90)
7. Tostadas Mini (TS-007-30/50/90)
8. Tostadas Tostisanas Premium (TS-008-30/50/90)

**Ver detalle completo en:** `TOSTADAS_3_PRESENTACIONES.md`

### 6. Bocadillos (8 productos)
**Rango de precio:** $22.00 - $32.00 MXN  
**Vida útil promedio:** 110 días

| SKU | Producto | Precio | Presentación |
|-----|----------|--------|--------------|
| BO-001 | Totopos Naturales | $28.00 | 250 g |
| BO-002 | Totopos con Sal | $28.00 | 250 g |
| BO-003 | Totopos con Chile | $30.00 | 250 g |
| BO-004 | Totopos con Limón | $30.00 | 250 g |
| BO-005 | Chicharrones de Harina | $22.00 | 200 g |
| BO-006 | Chicharrones con Chile | $24.00 | 200 g |
| BO-007 | Tiras de Tortilla Horneadas | $26.00 | 180 g |
| BO-008 | Nachos Tostisanas | $32.00 | 300 g |

---

## 💰 Información de Precios

### Precios por Caja
Todos los productos se venden en cajas de **12 unidades**.

**Fórmula:** Precio Caja = Precio Unitario × 12

**Ejemplo:**
- Tortillas de Maíz Blanco (TM-001)
- Precio unitario: $28.50
- Precio caja: $342.00 (12 paquetes)

---

## 📊 Códigos de Barras

Todos los productos tienen códigos de barras únicos en formato EAN-13:

**Estructura:**
- Prefijo país: 750 (México)
- Código empresa: 1234
- Categoría: 567-572
- Producto: 001-008

**Rangos por categoría:**
- Tortillas de Maíz: 7501234567001 - 7501234567008
- Tortillas de Harina: 7501234568001 - 7501234568008
- Bajas en Carbohidratos: 7501234569001 - 7501234569006
- Integrales: 7501234570001 - 7501234570008
- Tostadas: 7501234571001 - 7501234571008
- Bocadillos: 7501234572001 - 7501234572008

---

## 🔄 Gestión FEFO (First Expired, First Out)

### Productos Críticos (Vida útil < 15 días)
⚠️ **Requieren rotación prioritaria:**
- TM-008: Tortillas de Maíz Sin Conservadores (7 días)
- TM-007: Tortillas de Maíz Orgánico (12 días)

### Productos de Rotación Rápida (15-30 días)
📦 **Monitoreo regular:**
- Todas las Tortillas de Maíz (15 días)
- TH-006: Tortillas de Harina Sin Gluten (15 días)
- TI-007: Tortillas de Nopal (15 días)

### Productos de Larga Duración (> 60 días)
✅ **Menor prioridad de rotación:**
- Todas las Tostadas (60-90 días)
- Todos los Bocadillos (90-120 días)

---

## 🚚 Información Logística

### Peso por Caja
El peso de cada caja se calcula multiplicando el peso unitario × 12 unidades.

**Ejemplos:**
- Caja TM-001 (Maíz Blanco): 1.0 kg × 12 = 12 kg
- Caja TH-002 (Sobaqueras): 0.75 kg × 12 = 9 kg
- Caja BC-005 (Zero Carb): 0.25 kg × 12 = 3 kg

### Capacidad de Carga
**Camioneta estándar (1 tonelada):**
- ~83 cajas de productos pesados (TM-001)
- ~111 cajas de productos medianos (TH-001)
- ~333 cajas de productos ligeros (BC-005)

---

## 🔧 Cómo Integrar en las Apps

### En la App de Campo (`Tostisanas_App_v3_Campo.html`)

1. **Incluir el archivo JS:**
```html
<script src="productos_tostisanas.js"></script>
```

2. **Usar los productos:**
```javascript
// Obtener todos los productos
const todosLosProductos = PRODUCTOS_TOSTISANAS.productos;

// Buscar por SKU
const producto = PRODUCTOS_TOSTISANAS.getProductosBySKU('TM-001');

// Filtrar por categoría
const tortillasMaiz = PRODUCTOS_TOSTISANAS.getProductosByCategoria('cat-001');

// Generar sugerido
const sugerido = PRODUCTOS_TOSTISANAS.generarSugerido();
```

3. **Renderizar en el catálogo:**
```javascript
function renderCatalogo() {
  const catalogoEl = document.getElementById('catalogoProductos');
  catalogoEl.innerHTML = PRODUCTOS_TOSTISANAS.productos.map(p => `
    <div class="producto-card">
      <div class="producto-nombre">${p.nombre}</div>
      <div class="producto-presentacion">${p.presentacion}</div>
      <div class="producto-precio">$${p.precio.toFixed(2)}</div>
      <button onclick="agregarAlPedido('${p.sku}')">Agregar</button>
    </div>
  `).join('');
}
```

### En el Dashboard CEDIS (`Tostisanas_CEDIS_WMS_Dashboard_v3.html`)

1. **Incluir el archivo JS:**
```html
<script src="productos_tostisanas.js"></script>
```

2. **Usar para inventario FEFO:**
```javascript
// Productos críticos por vida útil
const productosCriticos = PRODUCTOS_TOSTISANAS.productos
  .filter(p => p.vidaUtil < 15)
  .sort((a, b) => a.vidaUtil - b.vidaUtil);

// Renderizar alertas FEFO
productosCriticos.forEach(p => {
  console.log(`⚠️ ${p.nombre} - Solo ${p.vidaUtil} días de vida útil`);
});
```

---

## 📝 Notas Importantes

### Productos Premium
Los productos con mayor precio unitario:
1. BC-005: Tortillas Zero Carb - $62.00
2. BC-006: Tortillas Diabetic Friendly - $58.00
3. BC-003: Tortillas Proteína Plus - $56.00

### Productos de Mayor Rotación
Recomendados para stock alto:
1. TM-001: Tortillas de Maíz Blanco
2. TM-002: Tortillas de Maíz Amarillo
3. TH-001: Tortillas de Harina Tradicional
4. TS-001: Tostadas Clásicas

### Productos Especializados
Requieren clientes específicos:
- Línea Keto (BC-001 a BC-006): Tiendas naturistas, gimnasios
- Sin Gluten (TH-006): Tiendas especializadas
- Orgánicos (TM-007): Mercados orgánicos

---

## 🔄 Actualizaciones

**Versión 1.1 - 23 de abril de 2026**
- ✅ Tostadas actualizadas con 3 presentaciones (30, 50 y 90 piezas)
- ✅ Total de productos: 64 (antes 48)
- ✅ 24 productos de tostadas (8 tipos × 3 presentaciones)
- ✅ Nuevos códigos de barras: 7501234571001-024
- ✅ Archivo de documentación específico: TOSTADAS_3_PRESENTACIONES.md

**Versión 1.0 - 23 de abril de 2026**
- Creación inicial del catálogo
- 48 productos en 6 categorías
- Estructura completa de precios y códigos de barras

**Próximas actualizaciones:**
- Imágenes de productos
- Información nutricional completa para todos los productos
- Promociones y descuentos por volumen
- Productos de temporada

---

*Base de datos de productos Tostisanas - Versión 1.0*  
*Ubicación: C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas*
