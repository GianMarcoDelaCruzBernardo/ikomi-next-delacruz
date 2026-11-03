import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProducto, productos } from "@/data/productos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) return { title: "Producto no encontrado" };
  return { title: producto.nombre, description: producto.descripcion };
}

export default async function DetalleProducto({ params }: Props) {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) notFound();

  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-2">
      <Image
        src={producto.imagen}
        alt={`Imagen de ${producto.nombre}`}
        width={400}
        height={300}
        className="w-full rounded-lg shadow"
      />
      <div>
        <p className="text-accent">{producto.marca}</p>
        <h1 className="mb-4 text-3xl font-bold text-brand">{producto.nombre}</h1>
        <p className="mb-6">{producto.descripcion}</p>
        <Link href="/productos" className="text-brand underline">← Volver a productos</Link>
      </div>
    </section>
  );
}
