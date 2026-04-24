# 🔒 Seguridad - Tostisanas

## ⚠️ INFORMACIÓN SENSIBLE

Este proyecto **NO incluye** información sensible en el repositorio público. Todos los tokens, credenciales y datos privados están protegidos.

---

## 🛡️ Archivos Protegidos (NO en GitHub)

Los siguientes archivos **NUNCA** deben subirse a GitHub:

### 1. Configuración de Baserow
```
❌ baserow_config.js          (contiene API token real)
✅ baserow_config.example.js  (plantilla sin credenciales)
```

### 2. Archivos de Prueba
```
❌ test_baserow.html          (contiene credenciales)
❌ INTEGRACION_BASEROW.md     (contiene IDs y tokens)
```

### 3. Variables de Entorno
```
❌ .env
❌ .env.local
❌ .env.production
```

---

## 🔑 Configuración Segura

### Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/IAingenieria/Tostisanas.git
cd Tostisanas
```

### Paso 2: Crear Configuración Local
```bash
# Copiar el archivo de ejemplo
cp baserow_config.example.js baserow_config.js
```

### Paso 3: Agregar tus Credenciales
Edita `baserow_config.js` y reemplaza:
```javascript
database_id: 'YOUR_DATABASE_ID',  // Tu Database ID de Baserow
api_token: 'YOUR_API_TOKEN_HERE', // Tu API Token de Baserow
```

### Paso 4: Configurar Table IDs
Reemplaza cada `'YOUR_TABLE_ID'` con los IDs reales de tus tablas en Baserow.

---

## 🚫 Lo que NO está en GitHub

### Datos Sensibles Removidos:
- ❌ API Tokens de Baserow
- ❌ Database IDs reales
- ❌ Table IDs reales
- ❌ Credenciales de cualquier tipo
- ❌ Datos personales de clientes
- ❌ Información financiera real

### Datos de Ejemplo (Fake Data):
- ✅ CSVs con datos ficticios para demo
- ✅ Productos de ejemplo
- ✅ Clientes ficticios
- ✅ Pedidos de prueba
- ✅ Vendedores de ejemplo

---

## 🔐 Variables de Entorno (Recomendado)

Para mayor seguridad, usa variables de entorno:

### Crear archivo `.env` (local, NO subir a GitHub):
```bash
# Baserow Configuration
BASEROW_DATABASE_ID=424569
BASEROW_API_TOKEN=tu_token_aqui
BASEROW_BASE_URL=https://api.baserow.io

# Table IDs
BASEROW_TABLE_PRODUCTOS=944872
BASEROW_TABLE_CLIENTES=944916
BASEROW_TABLE_PEDIDOS=944917
# ... etc
```

### Usar en tu código:
```javascript
const BASEROW_CONFIG = {
  database_id: process.env.BASEROW_DATABASE_ID,
  api_token: process.env.BASEROW_API_TOKEN,
  base_url: process.env.BASEROW_BASE_URL
};
```

---

## 🌐 Despliegue en Vercel

### Variables de Entorno en Vercel:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega cada variable:
   - `BASEROW_DATABASE_ID`
   - `BASEROW_API_TOKEN`
   - `BASEROW_TABLE_PRODUCTOS`
   - etc.

### Archivo `vercel.json` (seguro):
```json
{
  "env": {
    "BASEROW_DATABASE_ID": "@baserow-database-id",
    "BASEROW_API_TOKEN": "@baserow-api-token"
  }
}
```

---

## ✅ Checklist de Seguridad

Antes de hacer `git push`, verifica:

- [ ] `.gitignore` está configurado correctamente
- [ ] `baserow_config.js` NO está en el commit
- [ ] `test_baserow.html` NO está en el commit
- [ ] No hay tokens en ningún archivo
- [ ] No hay credenciales hardcodeadas
- [ ] Los CSVs solo tienen datos fake
- [ ] `.env` está en `.gitignore`

---

## 🚨 Si Expones un Token Accidentalmente

### Acción Inmediata:
1. **Revoca el token** en Baserow inmediatamente
2. **Genera un nuevo token**
3. **Actualiza tu configuración local**
4. **Elimina el commit** del historial de Git:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch baserow_config.js" \
     --prune-empty --tag-name-filter cat -- --all
   ```
5. **Force push** (con cuidado):
   ```bash
   git push origin --force --all
   ```

---

## 📞 Contacto de Seguridad

Si encuentras una vulnerabilidad de seguridad:
- **NO** abras un issue público
- Contacta directamente al equipo
- Usa el email: security@iaingenieria.com

---

## 📚 Recursos de Seguridad

- [Baserow Security Best Practices](https://baserow.io/docs/apis/rest-api)
- [GitHub Security Guide](https://docs.github.com/en/code-security)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Última actualización:** 23 de Abril de 2026  
**Versión:** 1.0
