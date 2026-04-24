# Contexto del Proyecto — Mr. Ruta para Tostisanas

**Fecha de creación:** 23 de abril de 2026
**Asistente:** Claude Sonnet 4.6 (Anthropic)
**Tipo de proyecto:** Software de logística DSD + WMS para distribución de consumo masivo
**Cliente:** Tostisanas
**Estado actual:** Versión 3 funcional en HTML/CSS/JS · Sistema completo integrado

---

## 1. Identidad del Proyecto

### Nombre
**Mr. Ruta para Tostisanas** — Sistema de gestión de rutas y CEDIS

### Cliente
**Tostisanas** — Empresa de distribución de consumo masivo

### Ubicación del Proyecto
**Carpeta:** `C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas`

### Concepto de marca
Mr. Ruta no es un software de registro pasivo; es el **"Sargento de Hierro"** de la operación logística. Su misión es eliminar el sobrecosto en la última milla y garantizar que cada kilómetro recorrido genere valor, no gasto. El sistema no "muestra datos": **fuerza procesos, bloquea errores y predice fallas** antes de que el camión salga del CEDIS.

### Posicionamiento vs. competencia
- **Competencia directa:** Optimobility / Vitere
- **Diferenciador clave:** *"La competencia solo ve cajas y kilómetros. Nosotros vemos DINERO."*
- **Benchmarks de clase mundial:** Manhattan Associates, JDA, Amazon Hub, DHL Supply Chain

---

## 2. Archivos del Sistema Tostisanas

### Inventario de archivos activos

| Archivo | Versión | Descripción |
|---|---|---|
| `Tostisanas_App_v3_Campo.html` | **v3 (actual)** | App móvil de campo para vendedores/repartidores de Tostisanas |
| `Tostisanas_CEDIS_WMS_Dashboard_v3.html` | **v3 (actual)** | Dashboard web de escritorio para CEDIS Guadalajara Centro |
| `productos_tostisanas.json` | **v1.1** | Base de datos de productos en formato JSON (64 productos) |
| `productos_tostisanas_v1.1.js` | **v1.1** | Base de datos de productos en JavaScript para apps |
| `productos_tostisanas_v1.1.csv` | **v1.1** | Base de datos de productos en formato CSV para Excel |
| `PRODUCTOS_README.md` | — | Documentación completa de la base de datos de productos |
| `TOSTADAS_3_PRESENTACIONES.md` | — | Detalle de las 3 presentaciones de tostadas |
| `Contexto.md` | — | Este archivo de contexto |
| `README.md` | — | Documentación del proyecto y guía de uso |

### Configuración del Sistema

**CEDIS:** Guadalajara Centro
**Rutas activas:** Centro A, Centro B, Sur A, Sur B
**Canal de comunicación:** `tostisanas-cedis-channel`
**Vendedores:** 6 vendedores activos
**Clientes por ruta:** ~30 clientes
**Horario operativo:** Turno matutino (6:00 AM - 6:00 PM)

---

## 3. Detalle Técnico — App de Campo v3 (`Tostisanas_App_v3_Campo.html`)

### Tecnología
- HTML5 / CSS3 / JavaScript vanilla (sin frameworks)
- Single-file — todo en un archivo para facilitar demo local y distribución
- Modo PWA compatible (meta apple-mobile-web-app-capable)
- **BroadcastChannel API** para comunicación en tiempo real con CEDIS
- Canal: `tostisanas-cedis-channel`
- Web Audio API para alarmas de sonido del Sargento Timer
- Navigator Vibration API para alarmas táctiles
- LocalStorage simulation para modo offline

### Pantallas / Screens

| Screen ID | Nombre | Descripción |
|---|---|---|
| `home` | Inicio / Dashboard | Vista del día del vendedor: progreso de ruta, KPIs, alertas de zona, racha semanal |
| `ruta` | Mi ruta del día | Lista de 30 clientes con estado, filtros (todos/pendientes/visitados/alertas) |
| `captura` | Captura de pedido | Sargento Timer + hero del cliente + tabs: Sugerido / Catálogo / Cobro / Fotos |
| `anaquel` | Foto de anaquel IA | Captura con cuadrícula, simulación de bounding boxes, análisis de share of shelf |
| `supervisor` | Dashboard Supervisor | Mapa de rutas, estado de 6 vendedores, alertas activas de zona |
| `gamificacion` | Logros | Nivel, puntos, racha, achievements, ranking por zona/CEDIS, canje de recompensas |
| `registro` | Nuevo cliente (v3) | Registro 100% offline sin internet ni correo: nombre + tipo + dueño + foto fachada |

### Funcionalidades v3 destacadas

**Sargento Timer:**
```javascript
STATE.visitBudget = isNew ? 12 * 60 : 7 * 60; // segundos
// 4 estados: Óptimo (0-60%) → Confirmar (60-80%) → Finalizar (80-100%) → TIEMPO (>100%)
// Web Audio: playBeep(440, 0.3, 'triangle') al 80% / playBeep(880, 0.5, 'sawtooth') al 100%
```

**Protocolo Foto:**
```javascript
const FOTO_PROTOCOL = [
  { id:0, icon:'🏪', title:'Foto de entrada — anaquel', required:true  },
  { id:1, icon:'📋', title:'Foto de exhibición propia', required:true  },
  { id:2, icon:'❌', title:'Foto de rechazo (si aplica)', required:false },
  { id:3, icon:'✅', title:'Foto de salida — pedido listo', required:true  },
];
```

**QR de comprobante** — generado como SVG inline en el overlay de confirmación. El dueño de la tienda lo fotografía o anota el número. Sin impresora.

**Registro offline:**
- Campos: nombre negocio, tipo, nombre dueño, colonia/referencia, foto fachada, teléfono (opcional)
- Cero email, cero cuenta digital
- Se sincroniza al reconectarse a internet

### Navegación
- Bottom nav de 5 ítems: Inicio / Mi ruta / Pedido / Nuevo / Logros
- Swipe horizontal para regresar en pantallas de captura y anaquel
- Tecla "O" en desktop simula modo offline/online (para demos)

### Datos de demo incluidos
- 30 clientes en la Ruta Centro A (Guadalajara)
- 15 SKUs con precios y cantidades sugeridas
- 6 vendedores activos con métricas
- 9 achievements, 6 recompensas canjeables, 3 rankings

### Configuración específica de Tostisanas
```javascript
// Canal de comunicación exclusivo
const DSD_CHANNEL = 'tostisanas-cedis-channel';

// Datos del vendedor
vendedor: 'Luis R.',
ruta: 'Centro A',

// Ubicación
CEDIS: 'Guadalajara Centro'
```

---

## 4. Detalle Técnico — CEDIS WMS Dashboard v3 (`Tostisanas_CEDIS_WMS_Dashboard_v3.html`)

### Tecnología
- HTML5 / CSS3 / JavaScript vanilla + Chart.js 4.4.0 (via CDN cdnjs)
- Layout de escritorio: sidebar fijo + topbar + content area
- **BroadcastChannel API** — recibe pedidos de la App de Campo en tiempo real sin servidor
- Canal: `tostisanas-cedis-channel`
- Single-file para demo local

### Páginas del sidebar

| Page ID | Nombre | Descripción |
|---|---|---|
| `dashboard` | Dashboard — Vista general | 8 KPIs RAV + Sargento Monitor inline + Feed en vivo + Estado de rutas + Alertas |
| `pedidos` | Pedidos en vivo | Cola de pedidos recibidos desde campo, botón "Procesar", estadísticas del día |
| `inventario` | Inventario FEFO | 12 SKUs con stock, días disponibles, estado crítico/alerta/ok, buffer de carga |
| `despacho` | Despacho de rutas | 6 route cards, timeline nocturno de despacho, liquidaciones en curso |
| `sargento` | ⏱ Sargento Monitor (v3) | Tabla de eficiencia de tiempo por vendedor, alertas de visitas extendidas, config de presupuestos |
| `fotos` | 📸 Cumplimiento Fotos (v3) | Cumplimiento por vendedor, impacto en bono, estadísticas de los 4 tipos de foto |
| `seguridad` | 🔐 Seguridad Patrimonial (v3) | Cola de doble autorización (aprobar/rechazar), historial de auditoría, grid de contenedor |
| `reportes` | Reportes | Fill Rate semanal, Merma semanal, Top 10 SKUs, Radar de efectividad por ruta |
| `conectividad` | Conectividad API | Demo en vivo BroadcastChannel, especificaciones técnicas de integración |

### KPIs del Dashboard — Fila 1 (KPIs clásicos con RAV)
- Pedidos recibidos
- Fill Rate (meta >98%)
- Merma hoy (meta <1.5%)
- Venta zona total

### KPIs del Dashboard — Fila 2 (KPIs v3 nuevos)
- Tiempo promedio/visita (meta <7:00 — Sargento)
- Cumplimiento de fotos (meta >90%)
- DSO Días de cobro (meta <35 días)
- Recuperación de IVA (acumulado vs meta mensual)

### Sargento Monitor (panel inline en Dashboard)
Muestra en tiempo real a cada vendedor que está en una visita activa:
- Nombre, cliente actual, tiempo transcurrido, color de estado
- Métricas agregadas: promedio zona, número sobre meta, críticos
- Se actualiza con datos simulados en tiempo real

### Sistema de Doble Autorización
- Botón "🔐 Pedido Manual" en topbar
- Modal requiere: Vendedor, Cliente, SKU, Cantidad, **Motivo justificado**, **PIN del Supervisor**
- La 2da firma de Finanzas llega por notificación separada
- Todo queda en log de auditoría con timestamp
- En la página Seguridad: cola visual con botones Aprobar / Rechazar

### Grid de Contenedor (Surtido Individual)
Grid visual de 30 celdas (una por cliente de la ruta) con 3 estados:
- ✅ Verde = surtido completo
- ⚙ Amarillo = cargando/en proceso
- ○ Gris = pendiente

### Configuración específica de Tostisanas
```javascript
// Canal de comunicación exclusivo
const CHANNEL_NAME = 'tostisanas-cedis-channel';

// Branding
Logo: 'Tostisanas v3'
Ubicación: 'CEDIS WMS · Guadalajara Centro'
Subtítulo: 'Centro de Distribución · Guadalajara Centro · Turno matutino'
```

---

## 5. Arquitectura de Comunicación App ↔ CEDIS

```
📱 App de Campo          🔌 BroadcastChannel         🏭 CEDIS WMS
Tostisanas              tostisanas-cedis-channel     Guadalajara Centro
(vendedor confirma)   ─────────── API ──────────── (dashboard recibe)
      │                                                    │
      │  ORDER_CONFIRMED {orderId, vendedor, cliente,      │
      │  total, cajas, timestamp}                         │
      │ ──────────────────────────────────────────────── ▶ │
      │                                                    │
      │ ◀ ────── CEDIS_ORDER_ACK {orderId, timestamp} ──── │
      │                                                    │
      │  PING / PONG (health check cada 30s)               │
      └ ─────────────────────────────────────────────── ↔ ┘
```

### Cómo funciona la integración:

1. **Vendedor confirma pedido** en `Tostisanas_App_v3_Campo.html`
2. **Pedido se envía** automáticamente al canal `tostisanas-cedis-channel`
3. **Dashboard CEDIS recibe** y muestra el pedido instantáneamente en `Tostisanas_CEDIS_WMS_Dashboard_v3.html`
4. **CEDIS envía confirmación** de recepción
5. **Vendedor recibe notificación** de CFDI generado

**Latencia:** < 100ms
**Sin servidor:** Comunicación directa entre pestañas del navegador

### Para demo en cliente:
Abrir ambos archivos HTML en pestañas del mismo navegador. Los pedidos confirmados en la App aparecen en el CEDIS en tiempo real sin ningún servidor.

### Para producción (recomendado):
- WebSocket + Redis Pub/Sub
- JWT RS256 para autenticación
- TLS 1.3
- SQLite local en el dispositivo del vendedor (offline queue)
- Exponential backoff: 5 reintentos al reconectar

---

## 6. Cómo Usar el Sistema Tostisanas

### Opción 1: Servidor Local (Recomendado)

1. Abre una terminal en la carpeta del proyecto:
   ```
   C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas
   ```

2. Inicia un servidor HTTP:
   ```powershell
   python -m http.server 8001
   ```

3. Abre en el navegador:
   - **Dashboard CEDIS:** `http://localhost:8001/Tostisanas_CEDIS_WMS_Dashboard_v3.html`
   - **App de Campo:** `http://localhost:8001/Tostisanas_App_v3_Campo.html`

### Opción 2: Abrir Directamente

Simplemente abre ambos archivos HTML en pestañas separadas del mismo navegador.

### Demo en Vivo

1. **Abre ambas aplicaciones** en pestañas separadas
2. En la **App de Campo**:
   - Ve a "Mi ruta"
   - Selecciona un cliente (ej: "Don Roberto")
   - Agrega productos al pedido
   - Presiona "Confirmar pedido"
3. En el **Dashboard CEDIS**:
   - Ve a la sección "Pedidos en vivo"
   - Verás el pedido aparecer instantáneamente
   - El contador de pedidos se actualiza automáticamente

---

## 7. Identidad Visual y Design System

### Paleta de colores (CSS variables)
```css
/* Verdes — color primario de la marca */
--g600: #0F7A4A  /* principal */
--g500: #129057
--g400: #18B36B
--g300: #3FCA88
--g50:  #EBF9F2

/* Azules — datos y métricas */
--b600: #1044A0
--b500: #1A5EC8

/* Ámbar — alertas y advertencias */
--a600: #C45E00
--a500: #E87800

/* Rojos — crítico */
--r500: #C42828
--r50:  #FEF2F2
```

### Tipografía
- **Body / UI:** DM Sans (Google Fonts) — pesos 300, 400, 500, 600, 700
- **Monoespaciado (timers, IDs):** DM Mono — pesos 400, 500

### Principios de diseño
1. **Ejecutar, no observar** — Todo KPI debe ser procesable. Si es informativo pero no genera acción, se elimina.
2. **Semáforo RAV siempre** — Verde/Amarillo/Rojo en todo indicador, nunca datos neutros.
3. **Números absolutos sobre porcentajes** — "Visitados: 12 / Pendientes: 30" es más urgente que "40%".
4. **Bottom-up reporting** — Un problema en un cliente escala automáticamente al dashboard directivo.
5. **Drill-down siempre disponible** — Rojo en Ventas Totales → clic → cliente específico → motivo de rechazo.

---

## 8. Características Principales del Sistema

### A. Preventa (Disciplina de Hierro)
- Geofencing: no se abre la visita si el GPS no coincide
- 7 Pasos de Oro en secuencia forzada (el paso 2 requiere completar el 1)
- Avance en **números absolutos**: "Visitados: 12 / Pendientes: 30" — no porcentajes
- Cierre de jornada bloqueado si hay visitas con "0 minutos de permanencia"

### B. Reparto (On Time Delivery)
- Surtido por cliente individual — Fill Rate 99%
- Time to Load: si hay >15 min de retraso → prioridad automática de picking
- Evidencia de Rechazo: foto obligatoria, sistema redirige pedido a clientes faltantes
- Comprobante: sin impresora fija → QR en pantalla o impresora Bluetooth de bolsillo

### C. Autoventa (ROI Directo)
- Detección de huecos en anaquel → Sugerido Automático con ROI estimado en $MXN
- Gestión FEFO: prioriza productos con <5 días de vida
- Control físico vs teórico en camión (anti-robo hormiga)

### D. Seguridad Patrimonial (Requisito Crítico)
- **Doble Autorización** obligatoria para cualquier Pedido Manual o Ajuste de Inventario: Supervisor + Finanzas
- Nadie mueve inventario solo — log de auditoría permanente
- Báscula integrada en rampa: si el peso difiere >1% del teórico, la ruta NO se despacha
- Geofencing: alerta si una unidad se desvía de su ruta por más de 10 minutos

---

## 9. KPIs con Semáforo R-A-V

| KPI | Verde | Amarillo | Rojo |
|---|---|---|---|
| Fill Rate | >98% | 95–97.9% | <95% |
| Merma % | <1% | 1.1–2% | >2.5% |
| OTD (Puntualidad) | Plan vs Real | — | — |
| DSO (Días de cobro) | <35 días | — | >35 días |
| Time to Load | A tiempo | >15 min retraso | — |
| Recuperación IVA | Acumulado vs Meta | — | — |
| Tiempo prom./visita | <7 min | 7–9 min | >9 min |
| Cumplimiento fotos | >90% | 70–89% | <70% |

---

## 10. Los 7 Pasos de Oro de la Visita

Secuencia operativa central del sistema — el vendedor **no puede saltar pasos**, el sistema los fuerza en orden:

1. **Check-in Georeferenciado** — La App valida que el GPS coincide con las coordenadas del cliente (margen de ±6 a 10 metros)
2. **Inventario en PDV** — Registro de existencias actuales para calcular el sugerido de venta por IA (o foto del anaquel si el cliente no permite contar)
3. **Encuesta de Trade Marketing** — Foto de exhibición, precios de competencia, frentes en anaquel, material POP
4. **Levantamiento de Pedido** — Sugerido automático basado en historial + inventario del paso 2. Si hay adeudo, el sistema lo bloquea.
5. **Prospección** — Visita a clientes potenciales identificados en zonas con tiempo liberado por la optimización
6. **Cobranza y Gestión de Cartera** — Registro de pagos, liquidación de facturas vencidas. El pedido no se libera si el cliente excede su límite de crédito.
7. **Check-out y Score** — Registro del tiempo de permanencia vs. estándar. El sistema califica la visita. Si faltan pasos, no se puede cerrar la jornada.

---

## 11. Glosario de Términos Clave

| Término | Definición en contexto |
|---|---|
| **DSD** | Direct Store Delivery — entrega directa al punto de venta sin intermediario |
| **CEDIS** | Centro de Distribución — almacén principal desde donde salen las rutas |
| **WMS** | Warehouse Management System — sistema de gestión de almacén |
| **Fill Rate** | Porcentaje de pedidos entregados completos. Meta: >98% |
| **FEFO** | First Expired, First Out — rotación de inventario por fecha de vencimiento |
| **OTD** | On Time Delivery — entrega a tiempo. Métrica clave del repartidor |
| **DSO** | Days Sales Outstanding — días promedio de cobro de la cartera |
| **OTIF** | On Time In Full — combinación de puntualidad + completitud de entrega |
| **Time to Load** | Tiempo de carga del camión. Si supera 15 min → prioridad de picking |
| **Robo hormiga** | Pérdida de inventario por pedidos manuales sin autorización |
| **Merma** | Producto perdido por caducidad, daño o robo. Meta: <1.5% |
| **PDV** | Punto de Venta — la tienda del cliente |
| **SKU** | Stock Keeping Unit — código único de producto |
| **Hueco** | Espacio vacío en el anaquel del cliente — oportunidad de venta |
| **Liquidación** | Proceso de cierre de ruta: devoluciones, cobros y reconciliación |
| **Rampa** | Área de andén en el CEDIS donde se valida y carga la mercancía |
| **Sargento** | Concepto de marca: el sistema que presiona, fuerza y audita la operación |
| **Triángulo de Oro** | Framework de layout del dashboard: Alertas (centro) + Flujo (izq) + KPIs (der) |
| **RAV** | Rojo-Amarillo-Verde — sistema de semáforo operativo |

---

## 12. Cómo Usar Este Contexto en la Próxima Sesión

Para retomar el proyecto con Claude, sube este archivo y los dos HTML de Tostisanas. Instrucción sugerida:

```
Lee el archivo Contexto.md. Estamos desarrollando el sistema Mr. Ruta 
para Tostisanas, un software de logística DSD + WMS. Este archivo tiene 
todo el contexto del proyecto. Los archivos activos son:
- Tostisanas_App_v3_Campo.html (App de campo)
- Tostisanas_CEDIS_WMS_Dashboard_v3.html (Dashboard CEDIS)
Ambos están integrados mediante el canal 'tostisanas-cedis-channel'.
Continúa desde donde quedamos.
```

---

## 13. Base de Datos de Productos Tostisanas

### Catálogo Completo

**Total de productos:** 64 productos en 6 categorías  
**Versión:** 1.1 (actualizada 23/04/2026)

### Categorías de Productos

#### 1. Tortillas de Maíz (8 productos)
- Rango de precio: $26.00 - $42.00 MXN
- Vida útil: 7-15 días
- Productos: Blanco, Amarillo, Azul, Rojo, Mini, Jumbo, Orgánico, Sin Conservadores
- SKUs: TM-001 a TM-008

#### 2. Tortillas de Harina (8 productos)
- Rango de precio: $28.00 - $48.00 MXN
- Vida útil: 15-20 días
- Productos: Tradicional, Sobaqueras, Mini, Burrito, Integral, Sin Gluten, Espinaca, Tomate
- SKUs: TH-001 a TH-008

#### 3. Tortillas Bajas en Carbohidratos (6 productos)
- Rango de precio: $52.00 - $62.00 MXN
- Vida útil: 25-30 días
- Productos: Keto Original, Keto Linaza, Proteína Plus, Fit Chía, Zero Carb, Diabetic Friendly
- SKUs: BC-001 a BC-006
- **Característica especial:** Información nutricional detallada (carbohidratos netos, proteína, fibra)

#### 4. Tortillas Integrales (8 productos)
- Rango de precio: $34.00 - $46.00 MXN
- Vida útil: 15-20 días
- Productos: Trigo, Avena, Multigrano, Centeno, Amaranto, Quinoa, Nopal, Semillas Mix
- SKUs: TI-001 a TI-008

#### 5. Tostadas (24 productos = 8 tipos × 3 presentaciones) ⭐
- Rango de precio: $16.00 - $68.00 MXN
- Vida útil: 60-90 días
- **3 presentaciones por tipo:**
  - 30 piezas (personal/familiar pequeña)
  - 50 piezas (familiar mediana)
  - 90 piezas (familiar grande/comercial)
- **8 tipos:** Clásicas, Horneadas, Maíz Azul, Charolas, Caseras, Integrales, Mini, Premium
- SKUs: TS-001-30 a TS-008-90
- Códigos de barras: 7501234571001-024

#### 6. Bocadillos (8 productos)
- Rango de precio: $22.00 - $32.00 MXN
- Vida útil: 90-120 días
- Productos: Totopos (Natural, Sal, Chile, Limón), Chicharrones, Tiras Horneadas, Nachos
- SKUs: BO-001 a BO-008

### Archivos de la Base de Datos

1. **productos_tostisanas.json** (v1.1)
   - Formato JSON completo con metadata
   - Incluye información nutricional para productos bajos en carbohidratos
   - Resumen por categoría

2. **productos_tostisanas_v1.1.js**
   - Objeto JavaScript listo para integrar
   - Funciones auxiliares incluidas:
     - `getProductosBySKU(sku)`
     - `getProductosByCategoria(id)`
     - `getProductosByNombre(nombre)`
     - `generarSugerido()`

3. **productos_tostisanas_v1.1.csv**
   - Formato CSV para Excel/Google Sheets
   - Compatible con importación a bases de datos SQL

4. **PRODUCTOS_README.md**
   - Documentación completa del catálogo
   - Información logística y de precios
   - Guía de integración en apps

5. **TOSTADAS_3_PRESENTACIONES.md**
   - Detalle completo de las 24 variantes de tostadas
   - Análisis de precios por presentación
   - Recomendaciones por canal de venta

### Integración con las Apps

**En la App de Campo:**
```javascript
// Incluir el archivo
<script src="productos_tostisanas_v1.1.js"></script>

// Usar los productos
const producto = PRODUCTOS_TOSTISANAS.getProductosBySKU('TS-001-50');
const sugerido = PRODUCTOS_TOSTISANAS.generarSugerido();
```

**En el Dashboard CEDIS:**
```javascript
// Productos críticos FEFO
const criticos = PRODUCTOS_TOSTISANAS.productos
  .filter(p => p.vidaUtil < 15)
  .sort((a, b) => a.vidaUtil - b.vidaUtil);
```

### Gestión FEFO (First Expired, First Out)

**Productos Críticos (< 15 días):**
- TM-008: Tortillas de Maíz Sin Conservadores (7 días)
- TM-007: Tortillas de Maíz Orgánico (12 días)

**Rotación Rápida (15-30 días):**
- Todas las Tortillas de Maíz (15 días)
- TH-006: Tortillas Sin Gluten (15 días)
- TI-007: Tortillas de Nopal (15 días)

**Larga Duración (> 60 días):**
- Todas las Tostadas (60-90 días)
- Todos los Bocadillos (90-120 días)

---

## 14. Historial del Proyecto

### Versión 3 + Base de Datos v1.1 - 23 de Abril de 2026

**Fase 1: Creación del Sistema**
- **Creación del proyecto Tostisanas** como cliente independiente
- **Ubicación:** `C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas`
- **Archivos de aplicaciones:**
  - `Tostisanas_App_v3_Campo.html` — App de campo personalizada
  - `Tostisanas_CEDIS_WMS_Dashboard_v3.html` — Dashboard CEDIS personalizado
- **Canal de comunicación:** `tostisanas-cedis-channel` (exclusivo para Tostisanas)
- **CEDIS:** Guadalajara Centro
- **Rutas:** Centro A, Centro B, Sur A, Sur B
- **Integración completa:** BroadcastChannel API funcionando en tiempo real

**Fase 2: Base de Datos de Productos**
- **Total de productos:** 64 productos en 6 categorías
- **Archivos de base de datos:**
  - `productos_tostisanas.json` (v1.1) — 27 KB
  - `productos_tostisanas_v1.1.js` — 16 KB
  - `productos_tostisanas_v1.1.csv` — Formato Excel/SQL
  - `PRODUCTOS_README.md` — Documentación completa
  - `TOSTADAS_3_PRESENTACIONES.md` — Detalle de tostadas
- **Innovación:** Tostadas con 3 presentaciones (30, 50 y 90 piezas)
  - 8 tipos de tostadas × 3 presentaciones = 24 productos
  - Códigos de barras: 7501234571001-024
  - Ahorro de ~20% en presentación de 90 piezas
- **Categorías completas:**
  - Tortillas de Maíz: 8 productos
  - Tortillas de Harina: 8 productos
  - Bajas en Carbohidratos: 6 productos (con info nutricional)
  - Tortillas Integrales: 8 productos
  - Tostadas: 24 productos (3 presentaciones)
  - Bocadillos: 8 productos
- **Documentación:**
  - `Contexto.md` — Documentación completa del proyecto
  - `README.md` — Guía de uso actualizada

---

## 14. Notas Importantes

### Diferencias con el Proyecto Original (Mr. Ruta)
- **Canal de comunicación diferente:** `tostisanas-cedis-channel` vs `dsd-cedis-channel`
- **Ubicación geográfica:** Guadalajara Centro vs Monterrey Norte
- **Rutas:** Centro A/B, Sur A/B vs Norte A/B, Sur A/B
- **Branding:** Tostisanas vs Mr. Ruta
- **Carpeta independiente:** Sistema completamente separado para evitar conflictos

### Ventajas de la Arquitectura Actual
- ✅ Sistema completamente funcional sin backend
- ✅ Demo en vivo sin servidor
- ✅ Comunicación en tiempo real < 100ms
- ✅ Modo offline completo
- ✅ Listo para integración con API REST
- ✅ Compatible con PWA (Progressive Web App)

---

*Documento generado el 23 de abril de 2026 · Claude Sonnet 4.6 · Anthropic*
*Para uso interno del proyecto Mr. Ruta — Cliente: Tostisanas*
*Ubicación: C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas*
