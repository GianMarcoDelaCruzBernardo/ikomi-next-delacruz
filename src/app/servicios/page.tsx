import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headset, Settings, Wrench } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios que ofrece IKOMI Perú.",
};

const servicios = [
  { icono: Wrench, titulo: "Instalación Profesional", texto: "Contamos con técnicos certificados para la instalación de todo tipo de sistemas de ventilación. Garantizamos un trabajo limpio, rápido y eficiente." },
  { icono: Settings, titulo: "Mantenimiento Preventivo", texto: "Programas de mantenimiento periódico para extender la vida útil de sus equipos y prevenir fallas costosas. Planes personalizados según sus necesidades." },
  { icono: Headset, titulo: "Asesoría Técnica", texto: "Nuestros ingenieros especializados le ayudarán a seleccionar el equipo más adecuado para su proyecto, optimizando costos y rendimiento." },
];

export default function Servicios() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle etiqueta="Qué hacemos" titulo="Nuestros Servicios" subtitulo="Acompañamos tu proyecto de principio a fin" />
      <div className="grid gap-8 md:grid-cols-3">
        {servicios.map(({ icono: Icono, titulo, texto }) => (
          <article
            key={titulo}
            className="group rounded-2xl border-t-4 border-accent bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
              <Icono className="h-7 w-7" />
            </span>
            <h3 className="mb-3 text-xl font-semibold text-brand">{titulo}</h3>
            <p className="text-gray-600">{texto}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/contacto" className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-white shadow transition hover:bg-accent-dark">
          Solicitar un servicio <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
