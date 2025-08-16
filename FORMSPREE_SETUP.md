# Configuración de FormSubmit para el Formulario de Contacto

Este documento explica cómo activar FormSubmit para que el formulario de contacto envíe emails a **eb.espacioliminal@gmail.com**.

## Pasos para Activar FormSubmit

### 1. Activación Automática (¡Ya está configurado!)
El formulario ya está configurado para usar FormSubmit con el email **eb.espacioliminal@gmail.com**. No necesitas crear cuenta ni registrarte.

### 2. Confirmación por Email (Primer uso)
1. **Envía el primer mensaje de prueba** desde el formulario en tu sitio web
2. **Revisa tu email** eb.espacioliminal@gmail.com
3. **Busca un email de FormSubmit** con el asunto "Please confirm your email address"
4. **Haz clic en el enlace de confirmación** dentro del email
5. ¡Listo! FormSubmit está activado para tu email

### 3. Configuración Actual
El formulario está configurado con las siguientes opciones:
- **Email destino**: `eb.espacioliminal@gmail.com`
- **Sin CAPTCHA**: Para mejor experiencia de usuario
- **Plantilla tabla**: Los emails llegan en formato tabla organizado
- **Reply-to**: Configurado con el email del usuario para responder fácilmente

### 4. Configuraciones Adicionales Disponibles

Si necesitas más funcionalidades, puedes modificar el código para incluir:

#### Página de redirección personalizada
```typescript
_next: "https://www.espacioliminal.com/gracias"
```

#### Activar CAPTCHA (si hay spam)
```typescript
_captcha: "true"
```

#### Cambiar plantilla de email
```typescript
_template: "box"  // o "basic"
```

### 5. Verificar Funcionamiento
1. **Primera vez**: Envía un mensaje de prueba y confirma tu email
2. **Siguientes mensajes**: Llegarán automáticamente a **eb.espacioliminal@gmail.com**
3. **Formato del email**: Recibirás los datos en formato tabla organizado
4. **Responder**: Puedes responder directamente desde tu cliente de email

## Ventajas de FormSubmit

### ✅ Completamente Gratuito
- Sin límites de envíos
- Sin registro requerido
- Sin configuración compleja
- Activación instantánea tras confirmación

### ✅ Características Incluidas
- Protección anti-spam integrada
- Múltiples plantillas de email
- Redirección personalizable
- Compatible con cualquier sitio web
- Sin dependencias de JavaScript

## Solución de Problemas

### El formulario no envía emails
1. **Primer uso**: Asegúrate de haber confirmado tu email
2. Revisa la consola del navegador para errores
3. Verifica que el email eb.espacioliminal@gmail.com sea correcto

### Los emails van a spam
1. Agrega `noreply@formsubmit.co` a tus contactos
2. Marca los primeros emails como "No es spam"
3. Los siguientes emails llegarán a la bandeja principal

### No llega el email de confirmación
1. Revisa la carpeta de spam
2. Verifica que el email esté escrito correctamente
3. Intenta enviar otro mensaje de prueba

## Recursos Adicionales

Si necesitas más información:
1. Consultar la [documentación oficial de FormSubmit](https://formsubmit.co/)
2. Ver ejemplos de configuración en su sitio web
3. Revisar las opciones avanzadas disponibles

---

**Nota**: Una vez confirmado el email, el formulario enviará automáticamente todos los mensajes a **eb.espacioliminal@gmail.com** con el asunto "Nuevo mensaje de contacto de [Nombre del usuario]". ¡No olvides confirmar tu email con el primer envío!