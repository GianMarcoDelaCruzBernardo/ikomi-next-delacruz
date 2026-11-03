import type { Metadata } from "next";
import { Eye, Fan, Heart, Shield, Target, Users } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y visión de IKOMI Perú.",
};

const valores = [
  { icono: Users, titulo: "Compromiso", texto: "Cumplimos nuestras promesas y superamos expectativas.", color: "bg-blue-100 text-blue-600" },
  { icono: Heart, titulo: "Pasión", texto: "Amamos lo que hacemos y lo reflejamos en cada proyecto.", color: "bg-amber-100 text-amber-600" },
  { icono: Shield, titulo: "Integridad", texto: "Actuamos con honestidad y transparencia siempre.", color: "bg-green-100 text-green-600" },
];

export default function Nosotros() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        etiqueta="Quiénes somos"
        titulo="Sobre Nosotros"
        subtitulo="Somos una empresa peruana comprometida con la excelencia en soluciones de ventilación industrial"
      />

      <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          <h3 className="text-3xl font-bold text-slate-900">Más de 15 años brindando soluciones de calidad</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            En IKOMI Perú nos especializamos en la importación, distribución e instalación de equipos de ventilación y
            climatización industrial. Contamos con un equipo de profesionales altamente capacitados y las mejores
            marcas del mercado.
          </p>
          <p className="leading-relaxed text-gray-600">
            Nuestra experiencia nos ha permitido desarrollar soluciones a medida para diversos sectores industriales,
            comerciales y residenciales, siempre manteniendo los más altos estándares de calidad.
          </p>
        </div>
        <div className="bg-hero relative flex h-80 items-center justify-center overflow-hidden rounded-3xl shadow-2xl">
          <div className="bg-grid absolute inset-0" aria-hidden="true" />
          <Fan className="relative h-40 w-40 animate-spin-slow text-accent motion-reduce:animate-none" strokeWidth={1.2} />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Target className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold">Misión</h3>
          <p className="leading-relaxed text-blue-100">
            Proveer soluciones integrales de ventilación y climatización que superen las expectativas de nuestros
            clientes, mediante productos de alta calidad, servicio técnico especializado y un compromiso inquebrantable
            con la satisfacción del cliente y el cuidado del medio ambiente.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-10 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Eye className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold">Visión</h3>
          <p className="leading-relaxed text-orange-50">
            Ser reconocidos como la empresa líder en el Perú en soluciones de ventilación industrial, destacándonos por
            nuestra innovación, calidad de servicio y compromiso con el desarrollo sostenible de nuestras comunidades.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900">Nuestros Valores</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {valores.map(({ icono: Icono, titulo, texto, color }) => (
            <div key={titulo} className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-lg">
              <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full ${color}`}>
                <Icono className="h-8 w-8" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-slate-900">{titulo}</h4>
              <p className="text-gray-600">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
