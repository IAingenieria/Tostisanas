// ══════════════════════════════════════════════════════════
// CONFIGURACIÓN BASEROW - TOSTISANAS (EJEMPLO)
// ══════════════════════════════════════════════════════════
// 
// INSTRUCCIONES:
// 1. Copia este archivo como: baserow_config.js
// 2. Reemplaza los valores de ejemplo con tus credenciales reales
// 3. NUNCA subas baserow_config.js a GitHub
//
// ══════════════════════════════════════════════════════════

const BASEROW_CONFIG = {
  // Credenciales - REEMPLAZAR CON TUS VALORES
  database_id: 'YOUR_DATABASE_ID', // Ejemplo: 424569
  api_token: 'YOUR_API_TOKEN_HERE', // Obtén tu token en Baserow
  base_url: 'https://api.baserow.io',
  
  // IDs de Tablas - REEMPLAZAR CON TUS IDs
  tables: {
    productos: 'YOUR_TABLE_ID',           // Ejemplo: 944872
    clientes: 'YOUR_TABLE_ID',            // Ejemplo: 944916
    pedidos: 'YOUR_TABLE_ID',             // Ejemplo: 944917
    detalle_pedidos: 'YOUR_TABLE_ID',     // Ejemplo: 944918
    vendedores: 'YOUR_TABLE_ID',          // Ejemplo: 944919
    inventario_cedis: 'YOUR_TABLE_ID',    // Ejemplo: 944920
    rutas: 'YOUR_TABLE_ID',               // Ejemplo: 944921
    gamificacion_logros: 'YOUR_TABLE_ID', // Ejemplo: 944922
    alertas_cedis: 'YOUR_TABLE_ID',       // Ejemplo: 944924
    fotos_visitas: 'YOUR_TABLE_ID',       // Ejemplo: 944925
    kpis_diarios: 'YOUR_TABLE_ID',        // Ejemplo: 944926
    cobros: 'YOUR_TABLE_ID'               // Ejemplo: 944927
  },
  
  // Headers para requests
  getHeaders() {
    return {
      'Authorization': `Token ${this.api_token}`,
      'Content-Type': 'application/json'
    };
  },
  
  // URL base para cada tabla
  getTableUrl(tableName) {
    const tableId = this.tables[tableName];
    return `${this.base_url}/api/database/rows/table/${tableId}/`;
  }
};

// ══════════════════════════════════════════════════════════
// FUNCIONES HELPER PARA BASEROW API
// ══════════════════════════════════════════════════════════

// Obtener todos los registros de una tabla
async function getRows(tableName, filters = {}) {
  const url = BASEROW_CONFIG.getTableUrl(tableName);
  const params = new URLSearchParams(filters);
  
  try {
    const response = await fetch(`${url}?${params}`, {
      method: 'GET',
      headers: BASEROW_CONFIG.getHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error);
    return [];
  }
}

// Obtener un registro específico por ID
async function getRow(tableName, rowId) {
  const url = BASEROW_CONFIG.getTableUrl(tableName);
  
  try {
    const response = await fetch(`${url}${rowId}/`, {
      method: 'GET',
      headers: BASEROW_CONFIG.getHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching row ${rowId} from ${tableName}:`, error);
    return null;
  }
}

// Crear un nuevo registro
async function createRow(tableName, data) {
  const url = BASEROW_CONFIG.getTableUrl(tableName);
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: BASEROW_CONFIG.getHeaders(),
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error creating row in ${tableName}:`, error);
    return null;
  }
}

// Actualizar un registro existente
async function updateRow(tableName, rowId, data) {
  const url = BASEROW_CONFIG.getTableUrl(tableName);
  
  try {
    const response = await fetch(`${url}${rowId}/`, {
      method: 'PATCH',
      headers: BASEROW_CONFIG.getHeaders(),
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error updating row ${rowId} in ${tableName}:`, error);
    return null;
  }
}

// Eliminar un registro
async function deleteRow(tableName, rowId) {
  const url = BASEROW_CONFIG.getTableUrl(tableName);
  
  try {
    const response = await fetch(`${url}${rowId}/`, {
      method: 'DELETE',
      headers: BASEROW_CONFIG.getHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return true;
  } catch (error) {
    console.error(`Error deleting row ${rowId} from ${tableName}:`, error);
    return false;
  }
}

// ══════════════════════════════════════════════════════════
// FUNCIONES ESPECÍFICAS PARA TOSTISANAS
// ══════════════════════════════════════════════════════════

// Obtener productos con stock bajo
async function getProductosStockBajo() {
  const productos = await getRows('inventario_cedis');
  return productos.filter(p => p.stock_actual <= p.stock_minimo);
}

// Obtener productos críticos FEFO (vencen en menos de 15 días)
async function getProductosCriticosFEFO() {
  const productos = await getRows('inventario_cedis');
  return productos.filter(p => p.dias_vencimiento <= 15)
    .sort((a, b) => a.dias_vencimiento - b.dias_vencimiento);
}

// Obtener pedidos de hoy
async function getPedidosHoy() {
  const hoy = new Date().toISOString().split('T')[0];
  const pedidos = await getRows('pedidos');
  return pedidos.filter(p => p.fecha === hoy);
}

// Obtener alertas activas
async function getAlertasActivas() {
  const alertas = await getRows('alertas_cedis');
  return alertas.filter(a => a.estatus === 'activa')
    .sort((a, b) => {
      const prioridad = { alta: 3, media: 2, baja: 1 };
      return prioridad[b.prioridad] - prioridad[a.prioridad];
    });
}

// Obtener KPIs de un vendedor
async function getKPIsVendedor(vendedorId) {
  const kpis = await getRows('kpis_diarios');
  return kpis.filter(k => k.vendedor_id === vendedorId)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

// Obtener clientes pendientes de un vendedor
async function getClientesPendientes(vendedorId) {
  const clientes = await getRows('clientes');
  return clientes.filter(c => 
    c.vendedor_asignado === vendedorId && 
    c.estatus === 'pendiente'
  );
}

// Crear un nuevo pedido
async function crearPedido(pedidoData) {
  const pedido = await createRow('pedidos', pedidoData);
  
  if (!pedido) {
    console.error('Error al crear pedido');
    return null;
  }
  
  console.log('✅ Pedido creado:', pedido);
  return pedido;
}

// Registrar un cobro
async function registrarCobro(cobroData) {
  const cobro = await createRow('cobros', cobroData);
  
  if (cobro) {
    console.log('✅ Cobro registrado:', cobro);
  }
  
  return cobro;
}

// Actualizar stock después de un pedido
async function actualizarStock(detallesPedido) {
  for (const detalle of detallesPedido) {
    const inventario = await getRow('inventario_cedis', detalle.producto_id);
    
    if (inventario) {
      const nuevoStock = inventario.stock_actual - detalle.cantidad;
      await updateRow('inventario_cedis', detalle.producto_id, {
        stock_actual: nuevoStock
      });
      
      console.log(`📦 Stock actualizado: ${detalle.sku} - ${nuevoStock} unidades`);
    }
  }
}

// ══════════════════════════════════════════════════════════
// EXPORTAR PARA USO EN OTRAS APPS
// ══════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BASEROW_CONFIG,
    getRows,
    getRow,
    createRow,
    updateRow,
    deleteRow,
    getProductosStockBajo,
    getProductosCriticosFEFO,
    getPedidosHoy,
    getAlertasActivas,
    getKPIsVendedor,
    getClientesPendientes,
    crearPedido,
    registrarCobro,
    actualizarStock
  };
}
