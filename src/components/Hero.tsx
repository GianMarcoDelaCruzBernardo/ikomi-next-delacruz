"use client";
import Link from "next/link";
import { ArrowRight, Wind, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

type Props = { titulo: string; texto: string };

// Imágenes de carros de lujo de Unsplash que SÍ funcionan
const heroImages = [
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&h=1080&fit=crop", // Lamborghini
  "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1920&h=1080&fit=crop", // Ferrari
  "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1920&h=1080&fit=crop", // Porsche
];

export default function Hero({ titulo, texto }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[650px] overflow-hidden">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand/90 to-accent/85" />
        </div>
      ))}

      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className={`space-y-6 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-accent/50 bg-accent/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            <Wind className="h-5 w-5 text-accent" />
            Potencia y rendimiento
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl">
            {titulo}
          </h1>

          <p className="max-w-xl text-xl text-blue-100 leading-relaxed">
            {texto}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/productos"
              className="group inline-flex items-center gap-3 rounded-lg bg-accent px-8 py-4 font-bold text-white shadow-2xl shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark hover:shadow-accent/50"
            >
              Ver catálogo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/60"
            >
              Solicitar cotización
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { num: "15+", label: "Años de experiencia" },
              { num: "6", label: "Modelos exclusivos" },
              { num: "6", label: "Marcas premium" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 p-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent">{stat.num}</div>
                <div className="text-xs text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`relative hidden md:flex transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
          <div className="relative h-[450px] w-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute inset-4 rounded-full border-2 border-white/20 animate-ping" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
            <div className="absolute inset-8 rounded-full border-2 border-accent/40 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
            
            <div className="absolute inset-12 flex items-center justify-center rounded-full border-4 border-white/30 bg-white/10 backdrop-blur-md shadow-2xl">
              <Wind className="h-56 w-56 animate-spin-slow text-accent" strokeWidth={1.5} />
            </div>

            <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand shadow-2xl">
              <ShieldCheck className="h-5 w-5 text-accent" />
              Calidad garantizada
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "w-12 bg-accent" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
