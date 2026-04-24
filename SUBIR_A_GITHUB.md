# 🚀 GUÍA COMPLETA: Subir Tostisanas a GitHub

## ✅ VERIFICACIÓN DE SEGURIDAD (3 VECES)

### 🔒 **VERIFICACIÓN #1: Archivos Sensibles**

#### Archivos que **NO DEBEN** estar en el repositorio:
- ❌ `baserow_config.js` (contiene token real)
- ❌ `test_baserow.html` (contiene credenciales)
- ❌ `INTEGRACION_BASEROW.md` (contiene IDs y tokens)
- ❌ `.env` o `.env.local`
- ❌ Cualquier archivo con tokens

#### Archivos que **SÍ DEBEN** estar:
- ✅ `baserow_config.example.js` (sin credenciales)
- ✅ `README_GITHUB.md`
- ✅ `SECURITY.md`
- ✅ `.gitignore`
- ✅ Todos los CSVs (solo datos fake)
- ✅ Las 2 apps HTML
- ✅ Documentación

---

### 🔍 **VERIFICACIÓN #2: Contenido de Archivos**

#### Buscar tokens en archivos:
```powershell
# En PowerShell, ejecutar:
cd "C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas"

# Buscar token API
Get-ChildItem -Recurse -Include *.html,*.js,*.md | Select-String "zBza79SbZyJ3S2nnbs5N7j2HvKt4qd5S"

# Buscar Database ID
Get-ChildItem -Recurse -Include *.html,*.js,*.md | Select-String "424569"

# Buscar Table IDs
Get-ChildItem -Recurse -Include *.html,*.js,*.md | Select-String "944872"
```

**Si encuentras algo, DETENTE y elimina esos archivos.**

---

### 🛡️ **VERIFICACIÓN #3: Script Automático**

```powershell
# Ejecutar script de verificación
.\verify_security.ps1
```

**Solo continúa si el script dice: "✅ ¡TODO CORRECTO!"**

---

## 📋 PASOS PARA SUBIR A GITHUB

### **Paso 1: Preparar el Repositorio Local**

```powershell
# Navegar a la carpeta
cd "C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas"

# Inicializar Git (si no está inicializado)
git init

# Verificar estado
git status
```

---

### **Paso 2: Verificar .gitignore**

```powershell
# Ver contenido de .gitignore
cat .gitignore

# Debe incluir:
# - baserow_config.js
# - test_baserow.html
# - INTEGRACION_BASEROW.md
# - .env
```

---

### **Paso 3: Verificar Archivos a Subir**

```powershell
# Ver qué archivos se van a agregar
git status

# Ver archivos ignorados (NO deben aparecer tokens)
git status --ignored

# Verificar que archivos sensibles están ignorados
git check-ignore baserow_config.js
git check-ignore test_baserow.html
```

**Debe decir que están ignorados.**

---

### **Paso 4: Agregar Archivos**

```powershell
# Agregar todos los archivos seguros
git add .

# Verificar qué se agregó
git status
```

---

### **Paso 5: Commit**

```powershell
git commit -m "Initial commit: Tostisanas DSD System

- App de Campo para vendedores (offline-first)
- Dashboard CEDIS para supervisores
- Base de datos de 62 productos Tostisanas
- 12 CSVs con datos de ejemplo (fake data)
- Gamificación con puntos y logros
- Monitor Sargento para control de tiempos
- Protocolo de fotos para compliance
- Sincronización en tiempo real vía BroadcastChannel
- Documentación completa
- Configuración de seguridad"
```

---

### **Paso 6: Configurar Remoto**

```powershell
# Agregar repositorio remoto
git remote add origin https://github.com/IAingenieria/Tostisanas.git

# Verificar
git remote -v
```

---

### **Paso 7: Push a GitHub**

```powershell
# Crear rama main y push
git branch -M main
git push -u origin main
```

---

## 🔐 VERIFICACIÓN POST-PUSH

### **1. Verificar en GitHub**

1. Ve a: https://github.com/IAingenieria/Tostisanas
2. Verifica que **NO** aparezcan:
   - ❌ `baserow_config.js`
   - ❌ `test_baserow.html`
   - ❌ `INTEGRACION_BASEROW.md`

3. Verifica que **SÍ** aparezcan:
   - ✅ `README_GITHUB.md`
   - ✅ `SECURITY.md`
   - ✅ `.gitignore`
   - ✅ Carpeta `CSV_BASEROW/`
   - ✅ Las 2 apps HTML

### **2. Buscar Tokens en GitHub**

1. En GitHub, usa la búsqueda:
   - Busca: `zBza79SbZyJ3S2nnbs5N7j2HvKt4qd5S`
   - Busca: `424569`
   - Busca: `944872`

**NO debe encontrar nada.**

### **3. Verificar Archivos Públicos**

```powershell
# Clonar en otra carpeta para verificar
cd C:\temp
git clone https://github.com/IAingenieria/Tostisanas.git
cd Tostisanas

# Buscar tokens
Get-ChildItem -Recurse | Select-String "zBza79SbZyJ3S2nnbs5N7j2HvKt4qd5S"
```

**NO debe encontrar nada.**

---

## 🚨 SI EXPUSISTE UN TOKEN

### **Acción Inmediata:**

1. **Revoca el token en Baserow**
   - Ve a Baserow → Settings → API Tokens
   - Revoca el token expuesto
   - Genera uno nuevo

2. **Elimina el commit del historial**
   ```powershell
   # Eliminar archivo del historial
   git filter-branch --force --index-filter `
     "git rm --cached --ignore-unmatch baserow_config.js" `
     --prune-empty --tag-name-filter cat -- --all
   
   # Force push
   git push origin --force --all
   ```

3. **Actualiza tu configuración local**
   - Edita `baserow_config.js` con el nuevo token
   - Verifica que esté en `.gitignore`

---

## 🌐 DESPLEGAR EN VERCEL

### **Opción 1: Desde GitHub**

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa el repositorio `Tostisanas`
4. Configura variables de entorno:
   - `BASEROW_DATABASE_ID` = tu Database ID
   - `BASEROW_API_TOKEN` = tu API Token
5. Deploy

### **Opción 2: Vercel CLI**

```powershell
# Instalar Vercel CLI
npm i -g vercel

# Deploy
cd "C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas"
vercel

# Configurar variables de entorno
vercel env add BASEROW_DATABASE_ID
vercel env add BASEROW_API_TOKEN
```

---

## ✅ CHECKLIST FINAL

Antes de considerar el proceso completo, verifica:

### **Seguridad:**
- [ ] ✅ No hay tokens en el repositorio
- [ ] ✅ No hay credenciales en archivos
- [ ] ✅ `.gitignore` está configurado
- [ ] ✅ `baserow_config.js` NO está en GitHub
- [ ] ✅ Solo `baserow_config.example.js` está en GitHub
- [ ] ✅ Script de verificación pasó

### **Archivos:**
- [ ] ✅ README_GITHUB.md está en el repo
- [ ] ✅ SECURITY.md está en el repo
- [ ] ✅ Las 2 apps HTML están en el repo
- [ ] ✅ 12 CSVs están en CSV_BASEROW/
- [ ] ✅ Documentación completa está incluida

### **Funcionalidad:**
- [ ] ✅ Apps funcionan localmente
- [ ] ✅ CSVs tienen solo datos fake
- [ ] ✅ No hay información personal real

### **GitHub:**
- [ ] ✅ Repositorio es público o privado según necesidad
- [ ] ✅ README se ve correctamente
- [ ] ✅ No aparecen archivos sensibles
- [ ] ✅ Búsqueda de tokens no encuentra nada

### **Vercel (Opcional):**
- [ ] ⏳ Variables de entorno configuradas
- [ ] ⏳ Deploy exitoso
- [ ] ⏳ Apps funcionan en producción

---

## 📊 RESUMEN DE ARCHIVOS

### **✅ SEGUROS para GitHub (SÍ subir):**

```
Tostisanas/
├── Tostisanas_App_v3_Campo.html          ✅
├── Tostisanas_CEDIS_WMS_Dashboard_v3.html ✅
├── baserow_config.example.js              ✅
├── README_GITHUB.md                       ✅
├── SECURITY.md                            ✅
├── GIT_COMMANDS.md                        ✅
├── SUBIR_A_GITHUB.md                      ✅
├── .gitignore                             ✅
├── CSV_BASEROW/
│   ├── 01_productos.csv                   ✅
│   ├── 02_clientes.csv                    ✅
│   ├── ... (todos los CSVs)               ✅
│   ├── README_BASEROW.md                  ✅
│   └── DATOS_DEMO_VISUAL.md               ✅
├── productos_tostisanas_v1.1.js           ✅
├── productos_tostisanas_v1.1.csv          ✅
├── README.md                              ✅
├── Contexto.md                            ✅
├── PRODUCTOS_README.md                    ✅
├── TOSTADAS_3_PRESENTACIONES.md           ✅
└── RESUMEN_COMPLETO.md                    ✅
```

### **❌ PELIGROSOS (NO subir):**

```
❌ baserow_config.js           (token real)
❌ test_baserow.html           (credenciales)
❌ INTEGRACION_BASEROW.md      (IDs y tokens)
❌ .env                        (variables sensibles)
❌ verify_security.ps1         (opcional, pero seguro)
```

---

## 🎯 COMANDO COMPLETO (TODO EN UNO)

```powershell
# Navegar a la carpeta
cd "C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas"

# Verificar seguridad
.\verify_security.ps1

# Si todo está bien, continuar:
git init
git add .
git commit -m "Initial commit: Tostisanas DSD System"
git branch -M main
git remote add origin https://github.com/IAingenieria/Tostisanas.git
git push -u origin main

# Verificar en GitHub
start https://github.com/IAingenieria/Tostisanas
```

---

## 📞 SOPORTE

Si tienes problemas:
1. Lee el mensaje de error completo
2. Verifica que no haya tokens expuestos
3. Consulta `GIT_COMMANDS.md`
4. Revisa `SECURITY.md`

---

## ✅ CONFIRMACIÓN FINAL

Una vez completado todo:

```
✅ Repositorio en GitHub: https://github.com/IAingenieria/Tostisanas
✅ Sin información sensible
✅ Documentación completa
✅ Apps funcionando
✅ Listo para demo
```

---

**¡LISTO PARA SUBIR A GITHUB DE FORMA SEGURA! 🚀**

*Última verificación: 23 de Abril de 2026*
