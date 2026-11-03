import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

type Props = { titulo: string; texto: string };

export default function Hero({ titulo, texto }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 py-20 md:py-32 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              Líderes en ventilación industrial
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              {titulo}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Soluciones de Aire
              </span>
            </h1>
            
            <p className="max-w-xl text-lg text-gray-300 md:text-xl leading-relaxed">
              {texto}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/productos"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Ver Catálogo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              >
                Contáctanos
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-amber-400">15+</div>
                <div className="text-sm text-gray-400">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-gray-400">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">50+</div>
                <div className="text-sm text-gray-400">Marcas representadas</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1585771507490-74e6a59e444d?w=800&h=600&fit=crop"
                alt="Sistemas de ventilación industrial IKOMI"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Calidad Garantizada</div>
                    <div className="text-sm text-gray-300">Certificación ISO 9001</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
