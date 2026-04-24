# 🚀 Comandos Git - Subir a GitHub

## ✅ VERIFICACIÓN DE SEGURIDAD COMPLETADA

Antes de ejecutar estos comandos, verifica que:
- ✅ `.gitignore` está configurado
- ✅ `baserow_config.js` NO está en la carpeta (solo `.example`)
- ✅ `test_baserow.html` NO está en la carpeta
- ✅ No hay tokens en ningún archivo
- ✅ Solo hay datos fake en los CSVs

---

## 📋 Comandos para Subir al Repositorio

### 1. Inicializar Git (si no está inicializado)
```bash
cd "C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas"
git init
```

### 2. Configurar Remoto
```bash
git remote add origin https://github.com/IAingenieria/Tostisanas.git
```

### 3. Verificar qué archivos se van a subir
```bash
# Ver archivos que se agregarán
git status

# Ver archivos ignorados (NO deben aparecer tokens)
git status --ignored
```

### 4. Agregar Archivos
```bash
# Agregar todos los archivos seguros
git add .

# Verificar nuevamente
git status
```

### 5. Commit
```bash
git commit -m "Initial commit: Tostisanas DSD System

- App de Campo para vendedores
- Dashboard CEDIS para supervisores
- Base de datos de 62 productos
- 12 CSVs con datos de ejemplo
- Documentación completa
- Configuración de seguridad"
```

### 6. Push al Repositorio
```bash
# Primera vez (crear rama main)
git branch -M main
git push -u origin main

# Siguientes veces
git push origin main
```

---

## 🔍 VERIFICACIÓN FINAL

### Antes del Push, verifica:

```bash
# 1. Ver qué archivos se van a subir
git ls-files

# 2. Buscar tokens en los archivos (NO debe encontrar nada)
git grep -i "zBza79SbZyJ3S2nnbs5N7j2HvKt4qd5S"
git grep -i "424569"
git grep -i "944872"

# 3. Ver el contenido de .gitignore
cat .gitignore

# 4. Verificar que archivos sensibles están ignorados
git check-ignore baserow_config.js
git check-ignore test_baserow.html
git check-ignore INTEGRACION_BASEROW.md
```

**Si algún comando encuentra tokens, DETENTE y revisa.**

---

## 🚨 SI ENCUENTRAS TOKENS

### NO hagas push. En su lugar:

```bash
# 1. Quitar archivos del staging
git reset

# 2. Agregar archivos al .gitignore
echo "archivo_con_token.js" >> .gitignore

# 3. Limpiar el archivo
# Edita manualmente y elimina el token

# 4. Volver a intentar
git add .
git commit -m "..."
```

---

## 📦 Estructura de Commits Recomendada

### Commit Inicial:
```bash
git commit -m "Initial commit: Tostisanas DSD System"
```

### Commits Posteriores:
```bash
# Feature
git commit -m "feat: agregar nueva funcionalidad X"

# Fix
git commit -m "fix: corregir bug en Y"

# Docs
git commit -m "docs: actualizar README"

# Style
git commit -m "style: mejorar UI de Z"
```

---

## 🌿 Trabajar con Ramas

### Crear rama para desarrollo:
```bash
# Crear y cambiar a rama dev
git checkout -b dev

# Hacer cambios...
git add .
git commit -m "feat: nueva funcionalidad"

# Subir rama dev
git push origin dev

# Volver a main
git checkout main

# Merge de dev a main
git merge dev
git push origin main
```

---

## 🔄 Actualizar desde GitHub

```bash
# Traer cambios del repositorio
git pull origin main

# Si hay conflictos, resolverlos manualmente
# Luego:
git add .
git commit -m "merge: resolver conflictos"
git push origin main
```

---

## 📊 Ver Historial

```bash
# Ver commits
git log --oneline

# Ver cambios en un archivo
git log -p archivo.html

# Ver quién modificó qué
git blame archivo.html
```

---

## 🗑️ Deshacer Cambios

### Antes del commit:
```bash
# Deshacer cambios en un archivo
git checkout -- archivo.html

# Deshacer todos los cambios
git reset --hard
```

### Después del commit (local):
```bash
# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (eliminar cambios)
git reset --hard HEAD~1
```

### Después del push (PELIGROSO):
```bash
# Solo si es absolutamente necesario
git revert HEAD
git push origin main
```

---

## 🔐 Si Expusiste un Token Accidentalmente

### Acción Inmediata:

1. **Revoca el token en Baserow**
2. **Genera un nuevo token**
3. **Limpia el historial de Git:**

```bash
# Eliminar archivo del historial
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch baserow_config.js" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (CUIDADO)
git push origin --force --all
git push origin --force --tags
```

4. **Actualiza tu configuración local**

---

## ✅ Checklist Final Antes del Push

- [ ] `.gitignore` configurado correctamente
- [ ] `baserow_config.js` NO está en el repo
- [ ] `test_baserow.html` NO está en el repo
- [ ] `INTEGRACION_BASEROW.md` NO está en el repo
- [ ] No hay tokens en ningún archivo
- [ ] Solo `baserow_config.example.js` (sin credenciales)
- [ ] CSVs solo tienen datos fake
- [ ] `git status` no muestra archivos sensibles
- [ ] `git grep` no encuentra tokens
- [ ] README.md está actualizado
- [ ] SECURITY.md está incluido

---

## 🎯 Comando Completo (Todo en Uno)

```bash
# Navegar a la carpeta
cd "C:\Users\Dell\Documents\CLAUDE DESKTOP\Mr_Ruta_Tostisanas"

# Verificar seguridad
git status
git grep -i "zBza79SbZyJ3S2nnbs5N7j2HvKt4qd5S" || echo "✅ No se encontraron tokens"

# Si todo está bien, subir
git add .
git commit -m "Initial commit: Tostisanas DSD System"
git branch -M main
git remote add origin https://github.com/IAingenieria/Tostisanas.git
git push -u origin main
```

---

## 📞 Ayuda

Si tienes problemas:
1. Lee el mensaje de error
2. Busca en Google: "git [mensaje de error]"
3. Consulta: https://git-scm.com/docs

---

**¡Listo para subir a GitHub de forma segura! 🚀**
