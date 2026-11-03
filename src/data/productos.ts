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
    slug: "ventilador-industrial",
    nombre: "Ventilador Industrial VF-2000",
    marca: "IKOMI",
    descripcion: "Ventilador industrial de alto rendimiento para aplicaciones comerciales e industriales. Motor trifásico de 2HP con aspas de aluminio balanceadas. Ideal para naves industriales, almacenes y centros comerciales.",
    imagen: "https://images.unsplash.com/photo-1585771507490-74e6a59e444d?w=400&h=300&fit=crop",
    precio: "S/ 1,299.00"
  },
  {
    slug: "extractor-aires",
    nombre: "Extractor de Aires EA-500",
    marca: "IKOMI",
    descripcion: "Sistema de extracción de aire de alta eficiencia con control automático de humedad. Silencioso y de bajo consumo energético. Perfecto para baños, cocinas y áreas industriales.",
    imagen: "https://images.unsplash.com/photo-1585771507490-74e6a59e444d?w=400&h=300&fit=crop",
    precio: "S/ 899.00"
  },
  {
    slug: "sistema-ventilacion",
    nombre: "Sistema de Ventilación SV-3000",
    marca: "TechAir",
    descripcion: "Sistema completo de ventilación mecánica con filtrado HEPA. Incluye ductos, rejillas de distribución y control digital. Garantiza la calidad del aire en espacios cerrados.",
    imagen: "https://images.unsplash.com/photo-1585771507490-74e6a59e444d?w=400&h=300&fit=crop",
    precio: "S/ 2,499.00"
  },
  {
    slug: "ventilador-techo",
    nombre: "Ventilador de Techo VT-150",
    marca: "IKOMI",
    descripcion: "Ventilador de techo con diseño moderno y 5 aspas de madera. Control remoto incluido, 3 velocidades y luz LED integrada. Silencioso y de bajo consumo.",
    imagen: "https://images.unsplash.com/photo-1513506003013-d5347e0f95ea?w=400&h=300&fit=crop",
    precio: "S/ 459.00"
  },
  {
    slug: "extractor-pared",
    nombre: "Extractor de Pared EP-800",
    marca: "TechAir",
    descripcion: "Extractor axial de pared para renovación constante de aire. Construcción en acero galvanizado con protección anticorrosiva. Ideal para restaurantes y locales comerciales.",
    imagen: "https://images.unsplash.com/photo-1585771507490-74e6a59e444d?w=400&h=300&fit=crop",
    precio: "S/ 679.00"
  },
  {
    slug: "ventilador-centrifugo",
    nombre: "Ventilador Centrífugo VC-1200",
    marca: "IKOMI",
    descripcion: "Ventilador centrífugo de alta presión para sistemas de climatización. Rodamiento sellado de por vida, motor de cobre 100% y protección térmica incorporada.",
    imagen: "https://images.unsplash.com/photo-1585771507490-74e6a59e444d?w=400&h=300&fit=crop",
    precio: "S/ 1,599.00"
  },
];

export function getProducto(slug: string) {
  return productos.find((p) => p.slug === slug);
}
