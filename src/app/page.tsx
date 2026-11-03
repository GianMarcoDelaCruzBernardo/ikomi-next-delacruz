import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

export default function Inicio() {
  return (
    <>
      <Hero
        titulo="Bienvenidos a IKOMI Perú"
        texto="TODO: reemplaza por el texto del banner del sitio de referencia."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle titulo="Productos destacados" subtitulo="Conoce parte de nuestro catálogo" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>
    </>
  );
}
