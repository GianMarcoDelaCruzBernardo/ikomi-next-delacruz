import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/productos";
import { ArrowRight, Tag } from "lucide-react";

type Props = { producto: Producto };

export default function ProductCard({ producto }: Props) {
  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Badge */}
      {producto.precio && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
          {producto.precio}
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <Image
          src={producto.imagen}
          alt={`Imagen de ${producto.nombre}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-xl">
            Ver Detalles
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <Tag className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-medium text-amber-600">{producto.marca}</span>
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
          {producto.nombre}
        </h3>
        
        <p className="line-clamp-2 text-sm text-gray-600 leading-relaxed">
          {producto.descripcion}
        </p>

        {/* Hover Arrow */}
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
          Ver más información
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 blur-2xl transition-all duration-500 group-hover:scale-150"></div>
    </Link>
  );
}
