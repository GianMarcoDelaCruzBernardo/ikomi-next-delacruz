import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-brand">404</h1>
      <p className="mt-4 text-lg">La página que buscas no existe.</p>
      <Link href="/" className="mt-6 inline-block rounded bg-accent px-6 py-2 font-semibold text-white">
        Volver al inicio
      </Link>
    </section>
  );
}
