# 📊 Base de Datos Tostisanas - Importación a Baserow

## 🎯 Objetivo
Estos archivos CSV contienen **datos fake realistas** para demostrar el sistema completo de Tostisanas en una presentación en vivo. Todos los datos están coordinados entre la App de Campo y el Dashboard CEDIS.

---

## 📁 Archivos CSV Incluidos

### 1️⃣ **01_productos.csv** (62 productos)
**Tabla:** `productos`

**Campos:**
- `id`, `sku`, `nombre`, `categoria`, `categoria_nombre`
- `presentacion`, `precio_unitario`, `precio_caja`, `unidades_caja`
- `vida_util_dias`, `peso_kg`, `codigo_barras`
- `stock_actual`, `stock_minimo`, `ubicacion_cedis`, `activo`

**Datos destacados:**
- 8 Tortillas de Maíz
- 8 Tortillas de Harina
- 6 Bajas en Carbohidratos (Keto)
- 8 Tortillas Integrales
- **24 Tostadas (8 tipos × 3 presentaciones: 30, 50, 90 piezas)**
- 8 Bocadillos

---

### 2️⃣ **02_clientes.csv** (30 clientes)
**Tabla:** `clientes`

**Campos:**
- `id`, `nombre`, `tipo_negocio`, `colonia`, `direccion`
- `telefono`, `nombre_dueno`, `rfc`
- `credito_dias`, `limite_credito`, `saldo_actual`
- `estatus`, `ultima_visita`, `proxima_visita`
- `ruta_asignada`, `vendedor_asignado`
- `latitud`, `longitud`, `notas`

**Datos destacados:**
- 13 clientes visitados hoy (estatus: `activo`)
- 17 clientes pendientes
- Incluye: Abarrotes, Farmacias, Fondas, Minisupers, etc.
- Coordenadas GPS reales de Guadalajara

---

### 3️⃣ **03_pedidos.csv** (40 pedidos)
**Tabla:** `pedidos`

**Campos:**
- `id`, `numero_pedido`, `fecha`, `hora`
- `cliente_id`, `cliente_nombre`, `vendedor`, `ruta`
- `total`, `cajas`, `estatus`, `metodo_pago`
- `cobrado`, `sincronizado`
- `tiempo_visita_segundos`, `eficiencia_pct`, `fotos_completas`

**Datos destacados:**
- 13 pedidos del 23-Abr (hoy)
- Pedidos históricos de 5 días anteriores
- Tiempos de visita entre 195-445 segundos
- Eficiencia entre 72%-108%

---

### 4️⃣ **04_detalle_pedidos.csv** (57 líneas)
**Tabla:** `detalle_pedidos`

**Campos:**
- `id`, `pedido_id`, `numero_pedido`
- `producto_id`, `sku`, `nombre_producto`
- `cantidad`, `precio_unitario`, `subtotal`, `descuento`, `total`

**Datos destacados:**
- Detalle completo de cada pedido
- Productos más vendidos: TM-001, TH-001, TS-001-50, BO-001

---

### 5️⃣ **05_vendedores.csv** (6 vendedores)
**Tabla:** `vendedores`

**Campos:**
- `id`, `nombre`, `apellidos`, `iniciales`
- `telefono`, `email`, `ruta_asignada`, `cedis`
- `fecha_ingreso`, `estatus`
- `meta_mensual`, `venta_acumulada`, `porcentaje_meta`
- `clientes_asignados`, `clientes_visitados_hoy`
- `puntos_gamificacion`, `nivel`, `color_avatar`

**Datos destacados:**
- Luis Rodríguez (LR) - Protagonista - 113% meta - 4,820 pts - Nivel 4
- Ana García (AG) - Líder - 122% meta - 6,240 pts - Nivel 5
- Carlos Martínez (CM) - Bajo rendimiento - 88% meta

---

### 6️⃣ **06_inventario_cedis.csv** (62 productos)
**Tabla:** `inventario_cedis`

**Campos:**
- `id`, `producto_id`, `sku`, `nombre_producto`
- `stock_actual`, `stock_minimo`, `stock_maximo`
- `ubicacion`, `lote`, `fecha_entrada`, `fecha_vencimiento`
- `dias_vencimiento`, `estatus_fefo`
- `proveedor`, `costo_unitario`

**Datos destacados:**
- **3 productos críticos FEFO** (vida útil < 15 días):
  - TM-008: 6 días
  - TM-001: 7 días
  - TH-001: 7 días
- Stock bajo en TM-008 (45 unidades, mínimo 40)

---

### 7️⃣ **07_rutas.csv** (6 rutas)
**Tabla:** `rutas`

**Campos:**
- `id`, `nombre_ruta`, `cedis`, `vendedor_id`, `vendedor_nombre`
- `dia_semana`, `hora_inicio`, `hora_fin`
- `clientes_asignados`, `clientes_completados`
- `estatus`, `distancia_km`, `tiempo_estimado_min`, `zona_geografica`

**Datos destacados:**
- Ruta Centro A (Luis Rodríguez): 13/30 completados
- Ruta Norte A (Ana García): 19/30 completados (mejor rendimiento)

---

### 8️⃣ **08_gamificacion_logros.csv** (24 logros)
**Tabla:** `gamificacion_logros`

**Campos:**
- `id`, `vendedor_id`, `vendedor_nombre`
- `logro_id`, `logro_nombre`, `logro_descripcion`, `icono`
- `puntos_otorgados`, `fecha_desbloqueo`
- `categoria`, `desbloqueado`

**Datos destacados:**
- Luis Rodríguez: 4 logros desbloqueados (⚡🎯🔥🚀)
- Ana García: 5 logros desbloqueados (incluye ⭐ Mes de oro)

---

### 9️⃣ **09_alertas_cedis.csv** (12 alertas)
**Tabla:** `alertas_cedis`

**Campos:**
- `id`, `tipo_alerta`, `prioridad`, `titulo`, `descripcion`
- `producto_id`, `sku`, `cliente_id`, `vendedor_id`
- `fecha_creacion`, `estatus`, `accion_recomendada`

**Datos destacados:**
- 3 alertas de stock crítico
- 3 alertas de vencimiento próximo
- 1 cliente sin pedido 42 días
- 1 adeudo pendiente ($1,200)

---

### 🔟 **10_fotos_visitas.csv** (12 fotos)
**Tabla:** `fotos_visitas`

**Campos:**
- `id`, `pedido_id`, `numero_pedido`
- `cliente_id`, `cliente_nombre`, `vendedor_id`
- `tipo_foto`, `descripcion`, `fecha_hora`
- `latitud`, `longitud`, `cumple_protocolo`, `url_foto`

**Datos destacados:**
- 4 tipos de foto por visita: fachada, exhibidor, anaquel, firma
- URLs fake pero realistas
- Coordenadas GPS de cada foto

---

### 1️⃣1️⃣ **11_kpis_diarios.csv** (18 registros)
**Tabla:** `kpis_diarios`

**Campos:**
- `id`, `fecha`, `vendedor_id`, `vendedor_nombre`
- `cobertura_pct`, `efectividad_pct`, `ticket_promedio`
- `devoluciones_pct`, `tiempo_promedio_seg`, `meta_mensual_pct`
- `visitas_completadas`, `visitas_totales`, `venta_dia`, `puntos_ganados`

**Datos destacados:**
- KPIs de hoy (23-Abr) para 6 vendedores
- KPIs históricos de 3 días anteriores
- Luis Rodríguez hoy: 96% cobertura, 88% efectividad, 82s promedio

---

### 1️⃣2️⃣ **12_cobros.csv** (13 cobros)
**Tabla:** `cobros`

**Campos:**
- `id`, `pedido_id`, `numero_pedido`
- `cliente_id`, `cliente_nombre`, `vendedor_id`
- `monto`, `metodo_pago`, `fecha_cobro`, `hora_cobro`
- `estatus`, `referencia`, `notas`

**Datos destacados:**
- 8 cobros en efectivo (estatus: `cobrado`)
- 5 cobros a crédito (estatus: `pendiente`, vencen 08-May)

---

## 🚀 Instrucciones de Importación a Baserow

### Paso 1: Crear Workspace
1. Accede a Baserow
2. Crea un nuevo workspace: **"Tostisanas Demo"**

### Paso 2: Importar Tablas (en orden)
Importa los CSV en este orden para respetar las relaciones:

1. ✅ `01_productos.csv`
2. ✅ `05_vendedores.csv`
3. ✅ `02_clientes.csv`
4. ✅ `07_rutas.csv`
5. ✅ `03_pedidos.csv`
6. ✅ `04_detalle_pedidos.csv`
7. ✅ `06_inventario_cedis.csv`
8. ✅ `08_gamificacion_logros.csv`
9. ✅ `09_alertas_cedis.csv`
10. ✅ `10_fotos_visitas.csv`
11. ✅ `11_kpis_diarios.csv`
12. ✅ `12_cobros.csv`

### Paso 3: Configurar Relaciones (Links)

#### En tabla `clientes`:
- `vendedor_asignado` → Link to `vendedores.id`

#### En tabla `pedidos`:
- `cliente_id` → Link to `clientes.id`
- `vendedor` → Link to `vendedores.nombre`

#### En tabla `detalle_pedidos`:
- `pedido_id` → Link to `pedidos.id`
- `producto_id` → Link to `productos.id`

#### En tabla `inventario_cedis`:
- `producto_id` → Link to `productos.id`

#### En tabla `alertas_cedis`:
- `producto_id` → Link to `productos.id`
- `cliente_id` → Link to `clientes.id`
- `vendedor_id` → Link to `vendedores.id`

### Paso 4: Crear Vistas

#### Vista: **Productos Críticos FEFO**
- Tabla: `inventario_cedis`
- Filtro: `dias_vencimiento` ≤ 15
- Ordenar: `dias_vencimiento` ascendente

#### Vista: **Pedidos Hoy**
- Tabla: `pedidos`
- Filtro: `fecha` = 2026-04-23
- Ordenar: `hora` ascendente

#### Vista: **Alertas Activas**
- Tabla: `alertas_cedis`
- Filtro: `estatus` = activa
- Ordenar: `prioridad` (alta → media → baja)

#### Vista: **Top Vendedores**
- Tabla: `vendedores`
- Ordenar: `porcentaje_meta` descendente

---

## 📊 Datos Clave para la Demo

### Dashboard CEDIS mostrará:
- ✅ **3 productos críticos FEFO** (TM-008, TM-001, TH-001)
- ✅ **13 pedidos en cola** (de hoy)
- ✅ **12 alertas activas**
- ✅ **6 vendedores** monitoreados en tiempo real
- ✅ **Stock total:** 62 productos
- ✅ **Venta del día:** $38,428 (Luis Rodríguez)

### App de Campo mostrará:
- ✅ **Luis Rodríguez** - Vendedor protagonista
- ✅ **Ruta Centro A** - 13/30 clientes visitados
- ✅ **Productos sugeridos:** TM-001 (×3), TH-001 (×2), TS-001-50 (×4)
- ✅ **KPIs del día:** 96% cobertura, 88% efectividad
- ✅ **Gamificación:** 4,820 puntos, Nivel 4
- ✅ **Próximo cliente:** Abarrotes Don Roberto

---

## 🔗 Accesos API para Integración

Una vez importado en Baserow, comparte:

1. **Database ID**
2. **API Token** (con permisos de lectura)
3. **Table IDs** de cada tabla

Esto permitirá que la App y el Dashboard consuman datos reales desde Baserow en la demo en vivo.

---

## 🎬 Flujo de Demo Sugerido

1. **Mostrar Dashboard CEDIS:**
   - Alertas de stock crítico
   - Productos próximos a vencer
   - Monitor de vendedores en tiempo real

2. **Abrir App de Campo (Luis Rodríguez):**
   - Ver ruta del día
   - Capturar pedido en "Abarrotes Don Roberto"
   - Usar productos sugeridos
   - Confirmar pedido

3. **Volver al Dashboard:**
   - Ver pedido nuevo en cola
   - Actualización en tiempo real vía BroadcastChannel

4. **Mostrar Gamificación:**
   - Puntos ganados
   - Logros desbloqueados
   - Ranking de vendedores

---

## ✅ Checklist Pre-Demo

- [ ] Todos los CSV importados en Baserow
- [ ] Relaciones configuradas correctamente
- [ ] Vistas creadas (Críticos FEFO, Pedidos Hoy, Alertas)
- [ ] API Token generado
- [ ] App de Campo conectada a Baserow
- [ ] Dashboard CEDIS conectado a Baserow
- [ ] BroadcastChannel funcionando entre apps
- [ ] Datos de prueba verificados

---

## 📞 Soporte

Para cualquier duda sobre la estructura de datos o importación, consulta:
- `PRODUCTOS_README.md` - Documentación de productos
- `Contexto.md` - Contexto completo del proyecto
- `README.md` - Visión general del sistema

---

**¡Listo para una demo impresionante! 🚀**
