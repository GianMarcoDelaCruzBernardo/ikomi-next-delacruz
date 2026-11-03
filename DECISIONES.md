# DECISIONES.md

## 1. Decisiones de configuración
| Opción elegida | Alternativa descartada | Justificación |
| --- | --- | --- |
| TypeScript | JavaScript | Elegí TypeScript porque ofrece autocompletado y detecta errores de tipo en tiempo de compilación, lo cual es vital para manejar datos de productos de forma segura y evitar bugs. |
| Tailwind CSS | CSS Modules / Bootstrap | Tailwind permite estilizar directamente en el JSX sin salir del componente, manteniendo el código más limpio y el bundle final más pequeño que Bootstrap. |
| Carpeta `src/` | Sin `src/` | Usar la carpeta `src/` mantiene el directorio raíz más organizado, separando claramente el código fuente de archivos de configuración. |
| App Router | Pages Router | El App Router es el estándar actual de Next.js y me permite usar Server Components por defecto, mejorando el rendimiento de carga inicial del sitio. |
| ESLint | Sin ESLint | ESLint ayuda a mantener un código limpio y consistente, atrapando errores de sintaxis o malas prácticas antes de que lleguen a producción. |

## 5. Client vs Server Components
Decidí que solo el `Navbar` fuera un Client Component (`"use client"`) porque necesita usar el hook `usePathname` para resaltar el enlace activo y `useState` para el menú hamburguesa en móviles. El resto de componentes (como `ProductCard` o `Hero`) se mantienen como Server Components para que se rendericen en el servidor y envíen menos JavaScript al navegador.

## 8. next/image y next/font
Usé `next/image` para que las imágenes de los productos se optimicen automáticamente (cambio de tamaño y formato WebP), mejorando el LCP. Usé `next/font` para cargar la tipografía Poppins directamente desde los servidores de Next.js, evitando el "layout shift" (CLS) y mejorando la velocidad de carga.
