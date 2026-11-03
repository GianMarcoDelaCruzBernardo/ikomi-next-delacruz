import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Marcas",
  description: "Marcas con las que trabaja IKOMI Perú.",
};

const marcas = Array.from(new Set(productos.map((p) => p.marca)));

export default function Marcas() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle titulo="Marcas" />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {marcas.map((m) => (
          <div key={m} className="flex h-28 items-center justify-center rounded-lg bg-soft font-semibold text-brand transition hover:scale-105">
            {m}
          </div>
        ))}
      </div>
    </section>
  );
}
