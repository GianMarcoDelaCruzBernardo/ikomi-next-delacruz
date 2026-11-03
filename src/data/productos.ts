export type Producto = {
  slug: string;
  nombre: string;
  marca: string;
  descripcion: string;
  imagen: string;
};

// TODO: reemplaza por los productos reales de https://www.ikomiperu.com/
export const productos: Producto[] = [
  {
    slug: "producto-uno",
    nombre: "Producto Uno",
    marca: "Marca A",
    descripcion: "Descripción del producto uno. Reemplazar con el texto del sitio de referencia.",
    imagen: "/img/producto-1.svg",
  },
  {
    slug: "producto-dos",
    nombre: "Producto Dos",
    marca: "Marca B",
    descripcion: "Descripción del producto dos. Reemplazar con el texto del sitio de referencia.",
    imagen: "/img/producto-2.svg",
  },
  {
    slug: "producto-tres",
    nombre: "Producto Tres",
    marca: "Marca A",
    descripcion: "Descripción del producto tres. Reemplazar con el texto del sitio de referencia.",
    imagen: "/img/producto-3.svg",
  },
];

export function getProducto(slug: string) {
  return productos.find((p) => p.slug === slug);
}
