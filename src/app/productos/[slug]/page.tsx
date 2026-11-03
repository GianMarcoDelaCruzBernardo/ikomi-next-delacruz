import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageSquare } from "lucide-react";
import ProductCard from "@/components/ProductCard";
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

  const relacionados = productos.filter((p) => p.slug !== producto.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-16">
        <Link href="/productos" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Volver a productos
        </Link>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-soft shadow-xl">
            <Image
              src={producto.imagen}
              alt={`Imagen de ${producto.nombre}`}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-accent-dark">
              {producto.marca}
            </span>
            <h1 className="mb-4 text-3xl font-bold text-brand md:text-4xl">{producto.nombre}</h1>
            <p className="mb-6 leading-relaxed text-gray-600">{producto.descripcion}</p>
            <p className="mb-8 text-3xl font-bold text-slate-900">{producto.precio ?? "Consultar precio"}</p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              <MessageSquare className="h-5 w-5" /> Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-brand">También te puede interesar</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((p) => (
              <ProductCard key={p.slug} producto={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
