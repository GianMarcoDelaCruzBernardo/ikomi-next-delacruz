# BITACORA_IA.md

## Entrada 1
- **Objetivo:** Automatizar la creación del proyecto Next.js con la estructura que pide el profesor.
- **Prompt utilizado:** "Necesito un script bash para mi Mac que cree un proyecto Next.js con TypeScript, Tailwind, App Router, y que haga commits separados por funcionalidad, además de crear plantillas para DECISIONES.md y BITACORA_IA.md".
- **Resumen de la respuesta:** La IA generó un script `setup-ikomi.sh` completo que instala dependencias, crea carpetas, genera componentes base y hace 9 commits progresivos.
- **Decisión:** Aceptado con modificaciones.
- **Justificación:** El script funcionó perfectamente y me ahorró mucho tiempo, pero tuve que ejecutar los comandos de subida a GitHub manualmente porque dejé la variable REMOTE vacía al principio.

## Entrada 2
- **Objetivo:** Resolver un problema de credenciales al hacer `git push` en mi Mac.
- **Prompt utilizado:** "Me pide contraseña al hacer git push, ¿cómo uso un token en Mac?".
- **Resumen de la respuesta:** La IA me explicó cómo generar un Personal Access Token en GitHub y usar `git credential-osxkeychain erase` para limpiar credenciales viejas.
- **Decisión:** Aceptado.
- **Justificación:** Funcionó a la primera y pude subir el código sin errores de autenticación.

## Entrada 3
- **Objetivo:** Mover la captura de pantalla del build a la carpeta de evidencias.
- **Prompt utilizado:** "Dame un comando para mover la captura más reciente del escritorio a la carpeta evidencias con el nombre 01-build.png".
- **Resumen de la respuesta:** La IA me dio varios comandos con `mv` y `ls`.
- **Decisión:** Modificado.
- **Justificación:** Los primeros comandos fallaron porque mi Mac guarda las capturas como "Captura de pantalla..." y no como "Screenshot", y porque yo estaba usando `Cmd+Shift+Control+4` (que solo copia al portapapeles) en lugar de `Cmd+Shift+4` (que guarda el archivo).

## Entrada 4
- **Objetivo:** Actualizar el archivo DECISIONES.md con justificaciones reales.
- **Prompt utilizado:** "Dame el contenido para DECISIONES.md sobre TypeScript, Tailwind, App Router, Client vs Server Components".
- **Resumen de la respuesta:** La IA generó una tabla con las decisiones de configuración y justificaciones técnicas.
- **Decisión:** Aceptado.
- **Justificación:** Las justificaciones eran correctas y las adapté con mis propias palabras antes de subirlas.

## Entrada 5
- **Objetivo:** Subir la evidencia del build a GitHub.
- **Prompt utilizado:** "Cómo muevo la captura del escritorio a la carpeta evidencias y la subo a git".
- **Resumen de la respuesta:** La IA me dio comandos para mover el archivo y hacer commit/push.
- **Decisión:** Aceptado.
- **Justificación:** Pude subir la evidencia correctamente siguiendo los pasos.

## Errores de la IA detectados (mínimo 2)

### Error 1
- **Qué propuso la IA (antes):** Insistió en que borrara las credenciales de Git porque asumió que estaba en una "Mac de laboratorio compartida".
- **Corrección (después):** Le aclaré que la Mac era mía personal, por lo que guardar la credencial era lo correcto y más cómodo.
- **Por qué:** La IA asumió un contexto de seguridad extremo que no aplicaba a mi situación real, basándose en un prompt anterior.

### Error 2
- **Qué propuso la IA (antes):** Un comando `mv` con comodines (`*.png`) que falló con el error "no matches found" en zsh.
- **Corrección (después):** Tuve que pedirle una alternativa que usara `find` o que fuera más específica con el nombre del archivo, y finalmente lo hice manualmente arrastrando el archivo.
- **Por qué:** La IA no consideró que la terminal zsh de Mac es muy estricta con los comodines si no encuentra exactamente ese patrón de nombre.

## Reflexión personal
El uso de la IA me permitió automatizar la creación del proyecto y resolver errores rápidamente. Sin embargo, tuve que validar cada respuesta porque la IA a veces asume contextos incorrectos o da comandos que no funcionan en mi configuración específica de Mac. Lo más valioso fue el script de setup que me ahorró horas de trabajo manual, pero la parte de documentación (DECISIONES.md y BITACORA_IA.md) la tuve que personalizar para que refleje mis decisiones reales y no suene copiado.
