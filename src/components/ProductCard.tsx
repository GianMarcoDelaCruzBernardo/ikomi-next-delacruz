import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/productos";

type Props = { producto: Producto };

export default function ProductCard({ producto }: Props) {
  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Image
        src={producto.imagen}
        alt={`Imagen de ${producto.nombre}`}
        width={400}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-accent">{producto.marca}</p>
        <h3 className="text-lg font-semibold text-brand group-hover:underline">{producto.nombre}</h3>
      </div>
    </Link>
  );
}
