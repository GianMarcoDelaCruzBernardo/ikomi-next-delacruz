import Image from "next/image";
import Link from "next/link";

type Props = { titulo: string; texto: string };

export default function Hero({ titulo, texto }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      <Image
        src="/img/hero.svg"
        alt="Banner principal de IKOMI Perú"
        width={1200}
        height={450}
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <h1 className="max-w-2xl text-4xl font-bold md:text-5xl">{titulo}</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-200">{texto}</p>
        <Link
          href="/productos"
          className="mt-8 inline-block rounded bg-accent px-6 py-3 font-semibold text-white transition hover:brightness-110"
        >
          Ver productos
        </Link>
      </div>
    </section>
  );
}
