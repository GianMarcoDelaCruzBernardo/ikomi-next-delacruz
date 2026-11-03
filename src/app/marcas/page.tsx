import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Marcas",
  description: "Marcas con las que trabajamos.",
};

// SVGs inline de las marcas de carros
const logosSVG: Record<string, JSX.Element> = {
  Lamborghini: (
    <svg viewBox="0 0 100 100" className="h-16 w-16">
      <path fill="currentColor" d="M10 85 L35 25 L45 25 L25 85 Z M40 85 L60 15 L70 15 L55 85 Z M65 85 L80 25 L90 25 L70 85 Z"/>
    </svg>
  ),
  Ferrari: (
    <svg viewBox="0 0 100 100" className="h-16 w-16">
      <path fill="currentColor" d="M20 70 Q20 30 50 30 Q80 30 80 70 L80 85 L20 85 Z M35 50 L45 50 L45 70 L35 70 Z M55 50 L65 50 L65 70 L55 70 Z"/>
    </svg>
  ),
  Porsche: (
    <svg viewBox="0 0 100 100" className="h-16 w-16">
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="8"/>
      <path fill="currentColor" d="M50 25 L55 40 L70 40 L58 50 L63 65 L50 55 L37 65 L42 50 L30 40 L45 40 Z"/>
    </svg>
  ),
  McLaren: (
    <svg viewBox="0 0 100 100" className="h-16 w-16">
      <path fill="currentColor" d="M30 20 Q50 10 70 20 L75 35 Q70 45 60 45 Q70 50 75 60 L70 75 Q50 85 30 75 L25 60 Q30 50 40 45 Q30 45 25 35 Z"/>
    </svg>
  ),
  Audi: (
    <svg viewBox="0 0 100 100" className="h-16 w-16">
      <circle cx="30" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="6"/>
      <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="6"/>
      <circle cx="70" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="6"/>
    </svg>
  ),
  BMW: (
    <svg viewBox="0 0 100 100" className="h-16 w-16">
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="6"/>
      <path fill="currentColor" d="M50 50 L30 30 L50 30 Z M50 50 L70 30 L50 30 Z M50 50 L70 70 L50 70 Z M50 50 L30 70 L50 70 Z"/>
    </svg>
  ),
};

const marcas = Array.from(new Set(productos.map((p) => p.marca))).map((nombre) => ({
  nombre,
  cantidad: productos.filter((p) => p.marca === nombre).length,
  logo: logosSVG[nombre] || null,
}));

export default function Marcas() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle etiqueta="Aliados" titulo="Nuestras Marcas" subtitulo="Trabajamos con los mejores fabricantes de superdeportivos del mundo" />
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {marcas.map((m) => (
          <Link
            key={m.nombre}
            href="/productos"
            className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {m.logo ? (
              <div className="mb-6 flex h-24 w-full items-center justify-center text-brand transition-all duration-300 group-hover:text-accent group-hover:scale-110">
                {m.logo}
              </div>
            ) : (
              <span className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-3xl font-bold text-white transition group-hover:bg-accent">
                {m.nombre.charAt(0)}
              </span>
            )}
            <h3 className="text-2xl font-bold text-brand">{m.nombre}</h3>
            <p className="mt-2 text-sm text-gray-500">
              {m.cantidad} {m.cantidad === 1 ? "modelo" : "modelos"}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
