# Configuración de GitHub Pages con Dominio Personalizado

## ✅ Pasos Completados

1. **Configuración de Vite**: Se actualizó `vite.config.ts` con `base: '/'` para dominio personalizado
2. **Workflow de GitHub Actions**: Se creó `.github/workflows/deploy.yml` para despliegue automático
3. **Archivo CNAME**: Se creó `public/CNAME` con el dominio `www.espacioliminal.com`
4. **Build de producción**: Se verificó que el proyecto se construye correctamente
5. **Commit y push**: Los cambios se subieron al repositorio

## 🔧 Pasos Pendientes (Manual)

Para completar la configuración de GitHub Pages, necesitas realizar estos pasos en GitHub:

### 1. Habilitar GitHub Pages
1. Ve a tu repositorio en GitHub: `https://github.com/estherbenitezcoll-design/esther-understood-healing`
2. Haz clic en **Settings** (Configuración)
3. Desplázate hacia abajo hasta la sección **Pages**
4. En **Source**, selecciona **GitHub Actions**

### 2. Configurar Permisos del Workflow
1. En la misma página de Settings, ve a **Actions** > **General**
2. En **Workflow permissions**, asegúrate de que esté seleccionado:
   - **Read and write permissions**
   - **Allow GitHub Actions to create and approve pull requests** (marcado)

### 3. Configurar Dominio Personalizado
1. En la sección **Pages**, en **Custom domain**, ingresa: `www.espacioliminal.com`
2. Marca la casilla **Enforce HTTPS** (recomendado)
3. GitHub verificará automáticamente el dominio usando el archivo CNAME

### 4. Configurar DNS (En tu proveedor de dominio)
1. Crea un registro **CNAME** que apunte `www.espacioliminal.com` a `estherbenitezcoll-design.github.io`
2. O configura los registros **A** para el dominio raíz:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

### 5. Ejecutar el Workflow
1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose automáticamente
3. Una vez completado, tu sitio estará disponible en:
   `https://www.espacioliminal.com`

## 🚀 Despliegue Automático

Una vez configurado, cada vez que hagas `git push` a la rama `main`, el sitio se actualizará automáticamente.

## 📝 Notas Técnicas

- **Dominio personalizado**: `www.espacioliminal.com`
- **Base Path**: `/` (configurado en `vite.config.ts` para dominio personalizado)
- **Archivo CNAME**: `public/CNAME` (se copia automáticamente al build)
- **Directorio de build**: `dist/`
- **Node.js version**: 18 (configurado en el workflow)
- **Trigger**: Push a rama `main`

## 🔍 Verificación

Para verificar que todo funciona:
1. Configura los registros DNS en tu proveedor de dominio
2. Espera a que se propague el DNS (puede tomar hasta 24 horas)
3. Haz un pequeño cambio en el código
4. Haz commit y push
5. Ve a Actions para ver el workflow ejecutándose
6. Una vez completado, verifica el sitio en `https://www.espacioliminal.com`

## ⚠️ Importante

- El dominio personalizado puede tardar hasta 24 horas en estar completamente activo
- Asegúrate de configurar correctamente los registros DNS en tu proveedor
- GitHub verificará automáticamente el dominio y habilitará HTTPS