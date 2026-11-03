import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-28 text-center">
      <p className="text-8xl font-bold text-brand">404</p>
      <div className="mx-auto my-4 h-1 w-20 rounded-full bg-accent" />
      <p className="mt-4 text-lg text-gray-600">La página que buscas no existe.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 font-semibold text-white shadow transition hover:bg-accent-dark"
      >
        <Home className="h-4 w-4" /> Volver al inicio
      </Link>
    </section>
  );
}
