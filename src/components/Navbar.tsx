"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 bg-brand text-white shadow">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">
          IKOMI <span className="text-accent">PERÚ</span>
        </Link>

        <button
          className="text-2xl md:hidden"
          aria-label="Abrir o cerrar menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? "✕" : "☰"}
        </button>

        <ul className={`${abierto ? "flex" : "hidden"} w-full flex-col gap-2 pt-3 md:flex md:w-auto md:flex-row md:gap-6 md:pt-0`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setAbierto(false)}
                className={`block py-1 transition hover:text-accent ${activo(l.href) ? "border-b-2 border-accent font-semibold text-accent" : ""}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
