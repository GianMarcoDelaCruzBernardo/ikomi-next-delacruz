import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios que ofrece IKOMI Perú.",
};

const servicios = [
  { titulo: "Servicio 1", texto: "TODO: descripción del servicio." },
  { titulo: "Servicio 2", texto: "TODO: descripción del servicio." },
  { titulo: "Servicio 3", texto: "TODO: descripción del servicio." },
];

export default function Servicios() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle titulo="Servicios" />
      <div className="grid gap-6 md:grid-cols-3">
        {servicios.map((s) => (
          <article key={s.titulo} className="rounded-lg border-t-4 border-accent bg-white p-6 shadow">
            <h3 className="mb-2 text-xl font-semibold text-brand">{s.titulo}</h3>
            <p>{s.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
