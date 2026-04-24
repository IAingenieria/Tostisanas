# 🚚 Sistema Mr. Ruta - Tostisanas

Sistema completo de gestión de rutas y CEDIS para **Tostisanas**.

## 📦 Archivos del Proyecto

### 1. Dashboard CEDIS
**Archivo:** `Tostisanas_CEDIS_WMS_Dashboard_v3.html`

Centro de control para el CEDIS de Guadalajara Centro.

**Características:**
- 📊 Dashboard en tiempo real
- 📦 Gestión de pedidos en vivo
- 📋 Control de inventario FEFO
- 🚚 Despacho de rutas
- 📈 Reportes y análisis
- ⏱️ Sargento Monitor (control de tiempos)
- 📸 Cumplimiento de fotos
- 🔐 Seguridad patrimonial (doble autorización)
- 🔌 Conectividad con apps de campo

### 2. App de Campo
**Archivo:** `Tostisanas_App_v3_Campo.html`

Aplicación móvil para vendedores en ruta.

**Características:**
- 📱 Interfaz móvil optimizada
- 📍 Gestión de ruta diaria
- 📦 Captura de pedidos
- ⏱️ Timer Sargento (meta 7 min)
- 📸 Protocolo de 4 fotos obligatorias
- 🏆 Sistema de gamificación
- 📊 Dashboard de supervisor
- 📵 Modo offline completo
- 🔄 Sincronización automática con CEDIS

### 3. Base de Datos de Productos
**Archivos:**
- `productos_tostisanas.json` (v1.1) - Base de datos JSON completa
- `productos_tostisanas_v1.1.js` - JavaScript para integrar en apps
- `productos_tostisanas_v1.1.csv` - CSV para Excel/SQL
- `PRODUCTOS_README.md` - Documentación de productos
- `TOSTADAS_3_PRESENTACIONES.md` - Detalle de tostadas

**Total de productos:** 64 productos en 6 categorías
- Tortillas de Maíz: 8 productos
- Tortillas de Harina: 8 productos
- Bajas en Carbohidratos: 6 productos
- Tortillas Integrales: 8 productos
- **Tostadas: 24 productos (8 tipos × 3 presentaciones)**
- Bocadillos: 8 productos

**Novedad:** Tostadas disponibles en 3 presentaciones:
- 30 piezas (personal/familiar pequeña)
- 50 piezas (familiar mediana)
- 90 piezas (familiar grande/comercial)

## 🔌 Integración en Tiempo Real

Ambas aplicaciones se comunican mediante **BroadcastChannel API**:

- **Canal:** `tostisanas-cedis-channel`
- **Tecnología:** BroadcastChannel API (demo) / WebSocket + Redis (producción)
- **Latencia:** < 100ms
- **Sin servidor:** Comunicación directa entre pestañas del navegador

### Cómo funciona:
1. Vendedor confirma pedido en App de Campo
2. Pedido se envía automáticamente al canal
3. Dashboard CEDIS recibe y muestra el pedido instantáneamente
4. CEDIS envía confirmación de recepción
5. Vendedor recibe notificación de CFDI generado

## 🚀 Cómo Usar

### Opción 1: Servidor Local (Recomendado)

1. Abre una terminal en esta carpeta
2. Inicia un servidor HTTP:
   ```powershell
   python -m http.server 8000
   ```
3. Abre en el navegador:
   - Dashboard CEDIS: `http://localhost:8000/Tostisanas_CEDIS_WMS_Dashboard_v3.html`
   - App de Campo: `http://localhost:8000/Tostisanas_App_v3_Campo.html`

### Opción 2: Abrir Directamente

Simplemente abre ambos archivos HTML en pestañas separadas del mismo navegador.

## 🎯 Demo en Vivo

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

## 📊 Datos del Sistema

- **CEDIS:** Guadalajara Centro
- **Rutas:** Centro A, Centro B, Sur A, Sur B
- **Vendedores:** 6 vendedores activos
- **Clientes:** ~30 clientes por ruta
- **Horario:** Turno matutino (6:00 AM - 6:00 PM)

## 🔧 Configuración

### Canal de Comunicación
El canal está configurado en ambos archivos:
```javascript
const CHANNEL_NAME = 'tostisanas-cedis-channel';
```

### Modo Offline
Presiona la tecla **"O"** en la App de Campo para simular modo offline/online.

## 📱 Características Avanzadas

### Sargento Monitor
- Meta: 7 minutos por cliente
- Alarma al 80% (5:36)
- Alarma crítica al 100% (7:00)

### Protocolo de Fotos
4 fotos obligatorias por visita:
1. 📸 Fachada del local
2. 🏪 Anaquel completo
3. 📦 Productos Tostisanas
4. ✍️ Firma del cliente

### Gamificación
- Sistema de puntos y niveles
- Rankings por zona/región/nacional
- Recompensas canjeables
- Logros desbloqueables

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript ES6+
- Chart.js (gráficos)
- BroadcastChannel API
- LocalStorage (modo offline)

## 📝 Notas

- Sistema completamente funcional sin backend
- Datos simulados para demo
- Listo para integración con API REST
- Compatible con PWA (Progressive Web App)

---

**Versión:** 3.0  
**Cliente:** Tostisanas  
**Fecha:** Abril 2026
