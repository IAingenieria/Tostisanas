# 🚚 Tostisanas - Sistema DSD (Direct Store Delivery)

Sistema completo de distribución directa a tiendas para Tostisanas, incluyendo app móvil para vendedores y dashboard para CEDIS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![Baserow](https://img.shields.io/badge/Database-Baserow-blue)](https://baserow.io)

---

## 🎯 Características Principales

### 📱 App de Campo (Vendedores)
- ✅ **Offline-first**: Funciona sin conexión a internet
- ✅ **IA Contextual**: Sugerencias de productos basadas en historial
- ✅ **Gamificación**: Puntos, niveles y logros para motivar vendedores
- ✅ **Monitor Sargento**: Control de tiempos de visita
- ✅ **Protocolo de Fotos**: "Foto o No Existe" para compliance
- ✅ **Registro de Cobros**: En efectivo o crédito
- ✅ **Sincronización en Tiempo Real**: Vía BroadcastChannel

### 🏭 Dashboard CEDIS (Supervisores)
- ✅ **Monitor en Tiempo Real**: 6 vendedores simultáneos
- ✅ **Inventario FEFO**: Productos próximos a vencer
- ✅ **Alertas Inteligentes**: Stock bajo, adeudos, oportunidades
- ✅ **Feed de Pedidos**: Actualización automática
- ✅ **Foto Compliance**: Verificación de protocolo
- ✅ **Gráficas y KPIs**: Análisis de rendimiento

---

## 🚀 Demo en Vivo

- **App de Campo**: [Ver Demo](https://tostisanas-campo.vercel.app)
- **Dashboard CEDIS**: [Ver Demo](https://tostisanas-cedis.vercel.app)

---

## 📊 Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Database**: [Baserow](https://baserow.io) (Open Source Airtable)
- **Sync**: BroadcastChannel API
- **Deploy**: Vercel
- **Charts**: Chart.js

---

## 📁 Estructura del Proyecto

```
Tostisanas/
├── 📱 APPS/
│   ├── Tostisanas_App_v3_Campo.html      # App móvil vendedores
│   └── Tostisanas_CEDIS_WMS_Dashboard_v3.html  # Dashboard CEDIS
│
├── 📊 DATABASE/
│   ├── productos_tostisanas_v1.1.js      # Base de datos productos
│   └── productos_tostisanas_v1.1.csv     # CSV productos
│
├── 📄 CSV_BASEROW/
│   ├── 01_productos.csv                  # 62 productos
│   ├── 02_clientes.csv                   # 30 clientes
│   ├── 03_pedidos.csv                    # 40 pedidos
│   ├── 04_detalle_pedidos.csv            # 57 líneas
│   ├── 05_vendedores.csv                 # 6 vendedores
│   ├── 06_inventario_cedis.csv           # 62 productos
│   ├── 07_rutas.csv                      # 6 rutas
│   ├── 08_gamificacion_logros.csv        # 24 logros
│   ├── 09_alertas_cedis.csv              # 12 alertas
│   ├── 10_fotos_visitas.csv              # 12 fotos
│   ├── 11_kpis_diarios.csv               # 18 KPIs
│   ├── 12_cobros.csv                     # 13 cobros
│   ├── README_BASEROW.md                 # Guía de importación
│   └── DATOS_DEMO_VISUAL.md              # Datos para demo
│
├── 📖 DOCS/
│   ├── README.md                         # Visión general
│   ├── Contexto.md                       # Contexto del proyecto
│   ├── PRODUCTOS_README.md               # Documentación productos
│   ├── TOSTADAS_3_PRESENTACIONES.md      # Detalle tostadas
│   ├── SECURITY.md                       # Guía de seguridad
│   └── RESUMEN_COMPLETO.md               # Resumen ejecutivo
│
├── 🔧 CONFIG/
│   └── baserow_config.example.js         # Plantilla configuración
│
├── .gitignore                            # Archivos ignorados
└── README.md                             # Este archivo
```

---

## 🛠️ Instalación

### 1. Clonar el Repositorio
```bash
git clone https://github.com/IAingenieria/Tostisanas.git
cd Tostisanas
```

### 2. Configurar Baserow (Opcional)

Si quieres usar tu propia base de datos:

```bash
# Copiar archivo de configuración
cp baserow_config.example.js baserow_config.js

# Editar con tus credenciales
nano baserow_config.js
```

Reemplaza:
- `YOUR_DATABASE_ID` con tu Database ID
- `YOUR_API_TOKEN_HERE` con tu API Token
- `YOUR_TABLE_ID` con cada Table ID

### 3. Importar Datos a Baserow

1. Crea una cuenta en [Baserow](https://baserow.io)
2. Crea un nuevo workspace
3. Importa los 12 CSVs de la carpeta `CSV_BASEROW/`
4. Sigue la guía en `CSV_BASEROW/README_BASEROW.md`

### 4. Abrir las Apps

```bash
# App de Campo
open Tostisanas_App_v3_Campo.html

# Dashboard CEDIS
open Tostisanas_CEDIS_WMS_Dashboard_v3.html
```

---

## 🌐 Despliegue en Vercel

### Opción 1: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opción 2: Deploy desde GitHub

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno:
   - `BASEROW_DATABASE_ID`
   - `BASEROW_API_TOKEN`
3. Deploy automático en cada push

---

## 📊 Datos de Ejemplo

El proyecto incluye **datos fake** para demostración:
- 62 productos de Tostisanas
- 30 clientes ficticios en Guadalajara
- 40 pedidos de ejemplo
- 6 vendedores con KPIs
- 12 alertas de prueba

**Todos los datos son ficticios y seguros para uso público.**

---

## 🎮 Uso

### App de Campo (Vendedores)

1. **Ver Ruta del Día**
   - 30 clientes asignados
   - Progreso en tiempo real

2. **Capturar Pedido**
   - Productos sugeridos por IA
   - Botones +/- para cantidades
   - Total automático

3. **Confirmar Pedido**
   - Generar QR para cliente
   - Registrar cobro (efectivo/crédito)
   - Sincronizar con CEDIS

4. **Gamificación**
   - Ganar puntos por acciones
   - Desbloquear logros
   - Ver ranking de zona

### Dashboard CEDIS (Supervisores)

1. **Monitor en Tiempo Real**
   - Ver 6 vendedores simultáneos
   - Tiempos de visita
   - Progreso de rutas

2. **Gestión de Inventario**
   - Productos críticos FEFO
   - Stock bajo
   - Alertas automáticas

3. **Análisis de Ventas**
   - Gráficas de rendimiento
   - KPIs por vendedor
   - Foto compliance

---

## 🔒 Seguridad

**⚠️ IMPORTANTE:** Este repositorio NO contiene información sensible.

- ❌ No hay tokens reales
- ❌ No hay credenciales
- ❌ No hay datos personales
- ✅ Solo datos de ejemplo (fake)

Para más información, lee [SECURITY.md](SECURITY.md)

---

## 📱 Compatibilidad

### App de Campo:
- ✅ Chrome/Edge (recomendado)
- ✅ Safari (iOS)
- ✅ Firefox
- ✅ Funciona offline

### Dashboard CEDIS:
- ✅ Chrome/Edge (recomendado)
- ✅ Safari
- ✅ Firefox
- ⚠️ Requiere conexión a internet

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

## 👥 Equipo

**IA Ingeniería**
- Website: [iaingenieria.com](https://iaingenieria.com)
- Email: contacto@iaingenieria.com
- GitHub: [@IAingenieria](https://github.com/IAingenieria)

---

## 🙏 Agradecimientos

- [Baserow](https://baserow.io) - Base de datos open source
- [Chart.js](https://www.chartjs.org) - Gráficas
- [Vercel](https://vercel.com) - Hosting
- [Lucide Icons](https://lucide.dev) - Iconos

---

## 📞 Soporte

¿Necesitas ayuda? 

- 📧 Email: soporte@iaingenieria.com
- 💬 Issues: [GitHub Issues](https://github.com/IAingenieria/Tostisanas/issues)
- 📚 Docs: [Ver Documentación](./DOCS/)

---

**Hecho con ❤️ por IA Ingeniería**

*Última actualización: Abril 2026*
