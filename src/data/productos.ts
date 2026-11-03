export type Producto = {
  slug: string;
  nombre: string;
  marca: string;
  descripcion: string;
  imagen: string;
  precio?: string;
};

export const productos: Producto[] = [
  {
    slug: "lamborghini-huracan",
    nombre: "Lamborghini Huracán EVO",
    marca: "Lamborghini",
    descripcion: "Supercar italiano con motor V10 de 5.2L y 640 HP. Diseño aerodinámico agresivo y tecnología de punta.",
    imagen: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
    precio: "$ 261,000",
  },
  {
    slug: "ferrari-488",
    nombre: "Ferrari F8 Tributo",
    marca: "Ferrari",
    descripcion: "Deportivo de altas prestaciones con motor V8 biturbo de 3.9L y 720 HP. Velocidad máxima 340 km/h.",
    imagen: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop",
    precio: "$ 280,000",
  },
  {
    slug: "porsche-911",
    nombre: "Porsche 911 Turbo S",
    marca: "Porsche",
    descripcion: "Icono alemán con motor boxer 6 cilindros de 3.8L y 650 HP. Tracción integral y sistema PDK.",
    imagen: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop",
    precio: "$ 230,000",
  },
  {
    slug: "mclaren-720s",
    nombre: "McLaren 720S",
    marca: "McLaren",
    descripcion: "Superdeportivo británico con motor V8 de 4.0L y 720 HP. Chasis monocasco de fibra de carbono.",
    imagen: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=600&fit=crop",
    precio: "$ 310,000",
  },
  {
    slug: "audi-r8",
    nombre: "Audi R8 V10 Plus",
    marca: "Audi",
    descripcion: "Exclusivo deportivo con motor V10 de 5.2L y 610 HP. Quattro AWD y suspensión magnética.",
    imagen: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
    precio: "$ 208,000",
  },
  {
    slug: "bmw-m8",
    nombre: "BMW M8 Competition",
    marca: "BMW",
    descripcion: "Gran turismo de lujo con motor V8 de 4.4L y 625 HP. Interior premium y tecnología M.",
    imagen: "https://images.unsplash.com/photo-1555215695-3004980adade?w=800&h=600&fit=crop",
    precio: "$ 146,000",
  },
];

export function getProducto(slug: string) {
  return productos.find((p) => p.slug === slug);
}
