# ══════════════════════════════════════════════════════════
# SCRIPT DE VERIFICACIÓN DE SEGURIDAD - TOSTISANAS
# ══════════════════════════════════════════════════════════
# 
# Este script verifica que NO haya información sensible
# antes de subir al repositorio de GitHub
#
# ══════════════════════════════════════════════════════════

Write-Host "🔒 VERIFICACIÓN DE SEGURIDAD - TOSTISANAS" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

$errorsFound = 0

# ── 1. VERIFICAR ARCHIVOS SENSIBLES ──────────────────────
Write-Host "📁 Verificando archivos sensibles..." -ForegroundColor Yellow

$sensitiveFiles = @(
    "baserow_config.js",
    "test_baserow.html",
    "INTEGRACION_BASEROW.md",
    ".env",
    ".env.local"
)

foreach ($file in $sensitiveFiles) {
    if (Test-Path $file) {
        Write-Host "   ❌ PELIGRO: $file existe (debe estar en .gitignore)" -ForegroundColor Red
        $errorsFound++
    } else {
        Write-Host "   ✅ $file no encontrado (correcto)" -ForegroundColor Green
    }
}

Write-Host ""

# ── 2. VERIFICAR .GITIGNORE ──────────────────────────────
Write-Host "📋 Verificando .gitignore..." -ForegroundColor Yellow

if (Test-Path ".gitignore") {
    Write-Host "   ✅ .gitignore existe" -ForegroundColor Green
    
    $gitignoreContent = Get-Content ".gitignore" -Raw
    
    $requiredEntries = @(
        "baserow_config.js",
        "test_baserow.html",
        ".env"
    )
    
    foreach ($entry in $requiredEntries) {
        if ($gitignoreContent -match [regex]::Escape($entry)) {
            Write-Host "   ✅ '$entry' está en .gitignore" -ForegroundColor Green
        } else {
            Write-Host "   ❌ '$entry' NO está en .gitignore" -ForegroundColor Red
            $errorsFound++
        }
    }
} else {
    Write-Host "   ❌ .gitignore NO existe" -ForegroundColor Red
    $errorsFound++
}

Write-Host ""

# ── 3. BUSCAR TOKENS EN ARCHIVOS ────────────────────────
Write-Host "🔍 Buscando tokens en archivos..." -ForegroundColor Yellow

$tokensToFind = @(
    "zBza79SbZyJ3S2nnbs5N7j2HvKt4qd5S",  # API Token
    "424569",                              # Database ID
    "944872",                              # Table ID ejemplo
    "944916",
    "944917"
)

$filesToCheck = Get-ChildItem -Recurse -Include *.html,*.js,*.md -Exclude baserow_config.js,test_baserow.html,INTEGRACION_BASEROW.md

foreach ($token in $tokensToFind) {
    $found = $false
    foreach ($file in $filesToCheck) {
        $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
        if ($content -and $content -match [regex]::Escape($token)) {
            Write-Host "   ❌ Token '$token' encontrado en: $($file.Name)" -ForegroundColor Red
            $errorsFound++
            $found = $true
        }
    }
    if (-not $found) {
        Write-Host "   ✅ Token '$token' no encontrado" -ForegroundColor Green
    }
}

Write-Host ""

# ── 4. VERIFICAR ARCHIVOS EXAMPLE ────────────────────────
Write-Host "📝 Verificando archivos .example..." -ForegroundColor Yellow

if (Test-Path "baserow_config.example.js") {
    Write-Host "   ✅ baserow_config.example.js existe" -ForegroundColor Green
    
    $exampleContent = Get-Content "baserow_config.example.js" -Raw
    if ($exampleContent -match "YOUR_DATABASE_ID" -and $exampleContent -match "YOUR_API_TOKEN") {
        Write-Host "   ✅ baserow_config.example.js tiene placeholders" -ForegroundColor Green
    } else {
        Write-Host "   ❌ baserow_config.example.js puede contener datos reales" -ForegroundColor Red
        $errorsFound++
    }
} else {
    Write-Host "   ❌ baserow_config.example.js NO existe" -ForegroundColor Red
    $errorsFound++
}

Write-Host ""

# ── 5. VERIFICAR SECURITY.MD ─────────────────────────────
Write-Host "🛡️ Verificando SECURITY.md..." -ForegroundColor Yellow

if (Test-Path "SECURITY.md") {
    Write-Host "   ✅ SECURITY.md existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️ SECURITY.md NO existe (recomendado)" -ForegroundColor Yellow
}

Write-Host ""

# ── 6. VERIFICAR README ──────────────────────────────────
Write-Host "📖 Verificando README..." -ForegroundColor Yellow

if (Test-Path "README_GITHUB.md") {
    Write-Host "   ✅ README_GITHUB.md existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️ README_GITHUB.md NO existe" -ForegroundColor Yellow
}

Write-Host ""

# ── 7. VERIFICAR CSVs ────────────────────────────────────
Write-Host "📊 Verificando CSVs..." -ForegroundColor Yellow

$csvFiles = Get-ChildItem -Path "CSV_BASEROW" -Filter "*.csv" -ErrorAction SilentlyContinue

if ($csvFiles) {
    Write-Host "   ✅ Se encontraron $($csvFiles.Count) archivos CSV" -ForegroundColor Green
    
    # Verificar que no contengan datos sensibles reales
    $sensitivePatterns = @(
        "\b\d{16}\b",  # Números de tarjeta
        "\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"  # Emails reales
    )
    
    foreach ($csv in $csvFiles) {
        $content = Get-Content $csv.FullName -Raw
        foreach ($pattern in $sensitivePatterns) {
            if ($content -match $pattern) {
                Write-Host "   ⚠️ Posible dato sensible en: $($csv.Name)" -ForegroundColor Yellow
            }
        }
    }
} else {
    Write-Host "   ⚠️ No se encontraron CSVs en CSV_BASEROW/" -ForegroundColor Yellow
}

Write-Host ""

# ── RESUMEN ──────────────────────────────────────────────
Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "📊 RESUMEN DE VERIFICACIÓN" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

if ($errorsFound -eq 0) {
    Write-Host "✅ ¡TODO CORRECTO! Es seguro subir a GitHub" -ForegroundColor Green
    Write-Host ""
    Write-Host "Puedes ejecutar:" -ForegroundColor Cyan
    Write-Host "   git add ." -ForegroundColor White
    Write-Host "   git commit -m 'Initial commit'" -ForegroundColor White
    Write-Host "   git push origin main" -ForegroundColor White
    Write-Host ""
    exit 0
} else {
    Write-Host "❌ SE ENCONTRARON $errorsFound PROBLEMAS" -ForegroundColor Red
    Write-Host ""
    Write-Host "⚠️ NO SUBAS A GITHUB HASTA RESOLVER LOS PROBLEMAS" -ForegroundColor Red
    Write-Host ""
    Write-Host "Acciones recomendadas:" -ForegroundColor Yellow
    Write-Host "1. Revisa los archivos marcados en rojo" -ForegroundColor White
    Write-Host "2. Elimina o mueve archivos sensibles" -ForegroundColor White
    Write-Host "3. Verifica que .gitignore esté correcto" -ForegroundColor White
    Write-Host "4. Vuelve a ejecutar este script" -ForegroundColor White
    Write-Host ""
    exit 1
}
