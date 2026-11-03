import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { Target, Eye, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y visión de IKOMI Perú.",
};

export default function Nosotros() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle 
        titulo="Sobre Nosotros" 
        subtitulo="Somos una empresa peruana comprometida con la excelencia en soluciones de ventilación industrial"
      />

      {/* About Content */}
      <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">
            Más de 15 años brindando soluciones de calidad
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            En IKOMI Perú nos especializamos en la importación, distribución e instalación de 
            equipos de ventilación y climatización industrial. Contamos con un equipo de 
            profesionales altamente capacitados y las mejores marcas del mercado.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nuestra experiencia nos ha permitido desarrollar soluciones a medida para diversos 
            sectores industriales, comerciales y residenciales, siempre manteniendo los más 
            altos estándares de calidad.
          </p>
        </div>
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
            alt="Equipo de IKOMI Perú"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="group rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-10 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Target className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold">Misión</h3>
          <p className="leading-relaxed text-blue-100">
            Proveer soluciones integrales de ventilación y climatización que superen las 
            expectativas de nuestros clientes, mediante productos de alta calidad, 
            servicio técnico especializado y un compromiso inquebrantable con la 
            satisfacción del cliente y el cuidado del medio ambiente.
          </p>
        </div>

        <div className="group rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 p-10 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <Eye className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold">Visión</h3>
          <p className="leading-relaxed text-orange-100">
            Ser reconocidos como la empresa líder en el Perú en soluciones de ventilación 
            industrial, destacándonos por nuestra innovación, calidad de servicio y 
            compromiso con el desarrollo sostenible de nuestras comunidades.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-20">
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900">Nuestros Valores</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-lg text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <h4 className="mb-2 text-xl font-bold text-slate-900">Compromiso</h4>
            <p className="text-gray-600">Cumplimos nuestras promesas y superamos expectativas</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <Heart className="h-8 w-8" />
            </div>
            <h4 className="mb-2 text-xl font-bold text-slate-900">Pasión</h4>
            <p className="text-gray-600">Amamos lo que hacemos y lo reflejamos en cada proyecto</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Shield className="h-8 w-8" />
            </div>
            <h4 className="mb-2 text-xl font-bold text-slate-900">Integridad</h4>
            <p className="text-gray-600">Actuamos con honestidad y transparencia siempre</p>
          </div>
        </div>
      </div>
    </section>
  );
}
