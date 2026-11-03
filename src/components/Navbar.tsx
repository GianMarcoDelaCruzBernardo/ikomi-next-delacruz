"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Fan, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/contacto", label: "Contáctenos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  const activo = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
            <Fan className="h-5 w-5 text-white" />
          </span>
          <span>
            IKOMI <span className="text-accent">PERÚ</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10 ${
                  activo(l.href) ? "bg-white/15 text-accent" : "text-white/90"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          aria-label="Abrir o cerrar menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {abierto && (
        <ul className="space-y-1 border-t border-white/10 bg-brand-dark px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setAbierto(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-white/10 ${
                  activo(l.href) ? "bg-white/15 text-accent" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
