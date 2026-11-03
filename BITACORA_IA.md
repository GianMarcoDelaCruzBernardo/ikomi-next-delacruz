# BITACORA_IA.md

## 5.1 Entradas de la Bitácora

### Entrada 1
- **Objetivo:** Automatizar la creación del proyecto Next.js con la estructura que pide la rúbrica.
- **Prompt utilizado:** "Necesito un script bash para mi Mac que cree un proyecto Next.js con TypeScript, Tailwind, App Router, y que haga commits separados por funcionalidad, además de crear plantillas para DECISIONES.md y BITACORA_IA.md".
- **Resumen de la respuesta:** La IA generó un script `setup-ikomi.sh` completo que instala dependencias, crea carpetas, genera componentes base y hace 9 commits progresivos.
- **Decisión:** Aceptado con modificaciones.
- **Justificación:** El script funcionó y me ahorró mucho tiempo, pero tuve que ejecutar los comandos de subida a GitHub manualmente porque dejé la variable REMOTE vacía al principio.

### Entrada 2
- **Objetivo:** Resolver un problema de credenciales al hacer `git push` en mi Mac.
- **Prompt utilizado:** "Me pide contraseña al hacer git push, ¿cómo uso un token en Mac?".
- **Resumen de la respuesta:** La IA me explicó cómo generar un Personal Access Token en GitHub y usar `git credential-osxkeychain erase` para limpiar credenciales viejas.
- **Decisión:** Modificado.
- **Justificación:** La IA asumió que estaba en una Mac de laboratorio compartida y me dijo que borrara las credenciales. Le aclaré que la Mac era mía personal, por lo que guardar la credencial era lo correcto y más cómodo.

### Entrada 3
- **Objetivo:** Mover la captura de pantalla del build a la carpeta de evidencias.
- **Prompt utilizado:** "Dame un comando para mover la captura más reciente del escritorio a la carpeta evidencias con el nombre 01-build.png".
- **Resumen de la respuesta:** La IA me dio comandos con `mv` y comodines (`*.png`).
- **Decisión:** Modificado.
- **Justificación:** Los comandos fallaron en la terminal zsh de Mac porque es muy estricta con los comodines. Tuve que pedirle una alternativa más específica y finalmente lo hice manualmente.

### Entrada 4
- **Objetivo:** Justificar las decisiones técnicas en DECISIONES.md.
- **Prompt utilizado:** "Dame el contenido para DECISIONES.md sobre TypeScript, Tailwind, App Router, Client vs Server Components".
- **Resumen de la respuesta:** La IA generó una tabla con las decisiones de configuración y justificaciones técnicas.
- **Decisión:** Aceptado.
- **Justificación:** Las justificaciones eran correctas, las adapté con mis propias palabras antes de subirlas.

### Entrada 5
- **Objetivo:** Mejorar el diseño con imágenes de carros de lujo y animaciones.
- **Prompt utilizado:** "Agrega imágenes de marcas de carros con animaciones y un banner profesional sin romper el diseño actual".
- **Resumen de la respuesta:** La IA propuso usar URLs de Unsplash y la librería `lucide-react`.
- **Decisión:** Modificado.
- **Justificación:** Las URLs de Unsplash daban error 404 en el componente `next/image` y `lucide-react` no tenía los logos de las marcas. Tuve que pedirle que usara SVGs inline para las marcas y buscar otras URLs de Unsplash que sí funcionaran.

## 5.2 Errores de la IA detectados

### Error 1: URLs de imágenes rotas en Next.js Image
- **Qué propuso la IA (antes):** Me dio URLs directas de Unsplash (ej. `https://images.unsplash.com/photo-1503...`) para usarlas en el componente `<Image src="..." />`.
- **Corrección (después):** Next.js arrojó el error `upstream image response failed 404`. Tuve que pedirle que buscara IDs de imágenes que sí existieran y, además, actualizar el `next.config.ts` para agregar `remotePatterns` y autorizar el dominio de Unsplash.
- **Por qué:** La IA alucinó URLs que ya no existen en Unsplash y no consideró que Next.js bloquea dominios externos por seguridad si no se configuran explícitamente.

### Error 2: Sintaxis de Tailwind CSS incompatible con Turbopack
- **Qué propuso la IA (antes):** Al intentar mejorar el diseño, la IA reescribió el `globals.css` usando el bloque `@theme { ... }` de Tailwind v4.
- **Corrección (después):** El servidor de Next.js 16 con Turbopack arrojó el error `Unknown at rule: @theme` y el sitio se quedó sin estilos. Tuve que pedirle que restaurara el archivo a su sintaxis original (`@import "tailwindcss";` y variables CSS estándar en `:root`) para que compilara sin errores.
- **Por qué:** La IA no verificó la versión exacta de Tailwind y PostCSS que estaba corriendo en mi entorno local.

## 5.3 Reflexión personal

Gracias a la IA entendí mucho mejor la diferencia entre los **Server Components y los Client Components** en Next.js, ya que me explicó por qué el Navbar necesita `"use client"` (por los hooks como `useState` y `usePathname`) mientras que el resto del sitio puede renderizarse en el servidor para mejorar el rendimiento. También comprendí cómo funciona la navegación del lado del cliente con `<Link>`.

Sin embargo, tuve que razonar por mi cuenta la **estructura de carpetas y la lógica de los datos**. La IA me daba el código, pero cuando algo fallaba (como las rutas dinámicas o el error 404 de las imágenes), tuve que leer la documentación oficial de Next.js y entender los mensajes de error de la terminal para saber qué pedirle. La IA es excelente para acelerar la escritura de código, pero la lógica de cómo se conectan los archivos y la depuración de errores específicos de mi entorno tuve que resolverla yo analizando cada falla.
