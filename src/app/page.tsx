import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";
import { Zap, Shield, Award, Clock } from "lucide-react";

export default function Inicio() {
  const features = [
    {
      icon: Zap,
      title: "Alta Eficiencia",
      description: "Equipos de última generación con máximo rendimiento energético"
    },
    {
      icon: Shield,
      title: "Garantía Extendida",
      description: "Hasta 5 años de garantía en todos nuestros productos"
    },
    {
      icon: Award,
      title: "Calidad Certificada",
      description: "Productos con certificación ISO y estándares internacionales"
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Atención técnica permanente para nuestros clientes"
    }
  ];

  return (
    <>
      <Hero
        titulo="Bienvenidos a IKOMI Perú"
        texto="Somos líderes en soluciones de ventilación y climatización industrial. Ofrecemos productos de la más alta calidad para mantener sus espacios con el mejor aire y temperatura."
      />
      
      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle 
          titulo="Productos Destacados" 
          subtitulo="Descubre nuestra amplia gama de soluciones en ventilación y climatización para todo tipo de industrias"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productos.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="/productos" 
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Ver Todos los Productos
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Nuestro equipo de expertos está listo para asesorarte y encontrar la mejor solución para tu proyecto
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-5 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Contáctanos Ahora
          </a>
        </div>
      </section>
    </>
  );
}
