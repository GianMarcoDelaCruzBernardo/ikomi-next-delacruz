import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Productos",
  description: "Catálogo de productos de IKOMI Perú.",
};

export default function Productos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle etiqueta="Catálogo" titulo="Productos" subtitulo="Equipos de ventilación y extracción para cada necesidad" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <ProductCard key={p.slug} producto={p} />
        ))}
      </div>
    </section>
  );
}
