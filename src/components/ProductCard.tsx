import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Producto } from "@/data/productos";

type Props = { producto: Producto };

export default function ProductCard({ producto }: Props) {
  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-soft">
        <Image
          src={producto.imagen}
          alt={`Imagen de ${producto.nombre}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow">
          {producto.marca}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold text-brand">{producto.nombre}</h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600">{producto.descripcion}</p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="font-bold text-slate-900">{producto.precio ?? "Consultar"}</span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2">
            Ver detalle <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
