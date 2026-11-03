# ikomi-next-delacruz

Réplica del sitio corporativo de **IKOMI Perú** (https://www.ikomiperu.com/) con **Next.js (App Router)**.
Proyecto de la Evaluación 03 – Desarrollo de Aplicaciones Web Avanzado (TECSUP).

## Qué hace el proyecto
Sitio corporativo con páginas de Inicio, Nosotros, Servicios, Productos (con detalle dinámico), Marcas y Contacto, navegación responsive y página 404 personalizada.

## Tecnologías
Next.js (App Router) · TypeScript · Tailwind CSS · ESLint · carpeta `src/` · `next/image` · `next/font`

## Instalación y ejecución
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compilar para producción
npm run start    # servir la compilación
```

## Despliegue
TODO: enlace del despliegue (por ejemplo Vercel).

## Rutas
| Ruta | Archivo |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/nosotros` | `src/app/nosotros/page.tsx` |
| `/servicios` | `src/app/servicios/page.tsx` |
| `/productos` | `src/app/productos/page.tsx` |
| `/productos/[slug]` | `src/app/productos/[slug]/page.tsx` |
| `/marcas` | `src/app/marcas/page.tsx` |
| `/contacto` | `src/app/contacto/page.tsx` |
| 404 | `src/app/not-found.tsx` |

## Árbol de componentes
```
RootLayout (Server)  src/app/layout.tsx
├── Navbar (CLIENT)  usePathname + useState del menú
├── main → page de cada ruta (Server)
│   ├── Hero (Server)
│   ├── SectionTitle (Server)
│   ├── ProductCard (Server)  ← recibe "producto" por props
│   └── ContactForm (Server)  ← solo interfaz
└── Footer (Server)
```

## Documentación del proceso
- [`DECISIONES.md`](./DECISIONES.md): qué elegí, qué descarté y por qué.
- [`BITACORA_IA.md`](./BITACORA_IA.md): qué le pregunté a la IA, qué respondió y qué decidí.
- [`evidencias/`](./evidencias): capturas (build, Network, responsive).
- Historial de commits: cada parte del trabajo está en un commit propio.
