import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y visión de IKOMI Perú.",
};

export default function Nosotros() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <SectionTitle titulo="Nosotros" />
      <p className="mb-4">TODO: texto de presentación de la empresa (copiar/adaptar del sitio de referencia).</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-soft p-6">
          <h3 className="mb-2 text-xl font-semibold text-brand">Misión</h3>
          <p>TODO</p>
        </div>
        <div className="rounded-lg bg-soft p-6">
          <h3 className="mb-2 text-xl font-semibold text-brand">Visión</h3>
          <p>TODO</p>
        </div>
      </div>
    </section>
  );
}
