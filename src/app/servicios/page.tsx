import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { Wrench, ClipboardCheck, Phone, Truck, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Servicios que ofrece IKOMI Perú.",
};

const servicios = [
  { 
    icon: Wrench,
    titulo: "Instalación Profesional", 
    texto: "Contamos con técnicos certificados para la instalación de todo tipo de sistemas de ventilación. Garantizamos un trabajo limpio, rápido y eficiente." 
  },
  { 
    icon: ClipboardCheck,
    titulo: "Mantenimiento Preventivo", 
    texto: "Programas de mantenimiento periódico para extender la vida útil de sus equipos y prevenir fallas costosas. Planes personalizados según sus necesidades." 
  },
  { 
    icon: Phone,
    titulo: "Asesoría Técnica", 
    texto: "Nuestros ingenieros especializados le ayudarán a seleccionar el equipo más adecuado para su proyecto, optimizando costos y rendimiento." 
  },
  { 
    icon: Truck,
    titulo: "Entrega a Domicilio", 
    texto: "Servicio de delivery a todo Lima y provincias. Empaque seguro y transporte especializado para equipos delicados." 
  },
  { 
    icon: Award,
    titulo: "Garantía Extendida", 
    texto: "Todos nuestros productos cuentan con garantía del fabricante. Ofrecemos también garantías extendidas para su tranquilidad." 
  },
  { 
    icon: Clock,
    titulo: "Soporte 24/7", 
    texto: "Atención de emergencias las 24 horas del día, los 7 días de la semana. Respuesta rápida para minimizar tiempos de inactividad." 
  },
];

export default function Servicios() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle 
        titulo="Nuestros Servicios" 
        subtitulo="Ofrecemos soluciones integrales para todas sus necesidades de ventilación y climatización"
      />
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((s, index) => (
          <div 
            key={s.titulo} 
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
            
            <div className="relative">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-8 w-8" />
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {s.titulo}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {s.texto}
              </p>
            </div>
            
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/10 to-blue-600/10 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 p-12 text-center">
        <h3 className="mb-4 text-3xl font-bold text-white">¿Necesitas un servicio especializado?</h3>
        <p className="mb-8 text-gray-300">Contáctanos y te brindaremos una cotización personalizada sin compromiso</p>
        <a 
          href="/contacto" 
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
        >
          Solicitar Cotización
        </a>
      </div>
    </section>
  );
}
