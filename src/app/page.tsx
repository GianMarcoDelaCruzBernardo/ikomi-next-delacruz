import Link from "next/link";
import { ArrowRight, Headset, Settings, Wrench } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

export default function Inicio() {
  const marcas = new Set(productos.map((p) => p.marca)).size;

  return (
    <>
      <Hero
        titulo="Bienvenidos a IKOMI Perú"
        texto="Somos líderes en soluciones de ventilación y climatización industrial. Ofrecemos productos de la más alta calidad para mantener sus espacios con el mejor aire y temperatura."
      />
      
      {/* Stats - Posicionado correctamente SIN overlap */}
      <section className="relative z-10 mx-auto -mt-16 max-w-5xl px-4">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { n: "15+", t: "Años de experiencia" },
            { n: String(productos.length), t: "Productos en catálogo" },
            { n: String(marcas), t: "Marcas aliadas" },
          ].map((d) => (
            <div
              key={d.t}
              className="rounded-2xl bg-white p-6 text-center shadow-xl ring-1 ring-slate-100"
            >
              <p className="text-4xl font-bold text-brand">{d.n}</p>
              <p className="mt-1 text-sm text-gray-600">{d.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle
          etiqueta="Catálogo"
          titulo="Productos Destacados"
          subtitulo="Descubre nuestra amplia gama de soluciones en ventilación"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productos.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/productos" className="inline-flex items-center gap-2 font-semibold text-brand hover:text-accent">
            Ver todo el catálogo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Servicios rápidos */}
      <section className="bg-soft py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            { icono: Wrench, titulo: "Instalación", texto: "Técnicos certificados y trabajo limpio." },
            { icono: Settings, titulo: "Mantenimiento", texto: "Planes preventivos a tu medida." },
            { icono: Headset, titulo: "Asesoría técnica", texto: "Ingenieros que eligen el equipo ideal." },
          ].map(({ icono: Icono, titulo, texto }) => (
            <div key={titulo} className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icono className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold text-brand">{titulo}</h3>
                <p className="text-sm text-gray-600">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero relative overflow-hidden py-20 text-white">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Necesitas una solución personalizada?</h2>
          <p className="mb-8 text-lg text-blue-100">Nuestro equipo de expertos está listo para asesorarte.</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-10 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            Contáctanos ahora <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
