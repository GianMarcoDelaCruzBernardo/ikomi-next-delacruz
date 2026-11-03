import Link from "next/link";
import { Clock, Fan, Mail, MapPin, Phone } from "lucide-react";
import { empresa } from "@/data/empresa";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-blue-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <Fan className="h-5 w-5" />
            </span>
            IKOMI <span className="text-accent">PERÚ</span>
          </div>
          <p className="text-sm leading-relaxed">
            Soluciones de ventilación y climatización industrial. Sitio replicado con fines académicos (TECSUP).
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros" className="transition hover:text-accent">Nosotros</Link></li>
            <li><Link href="/servicios" className="transition hover:text-accent">Servicios</Link></li>
            <li><Link href="/productos" className="transition hover:text-accent">Productos</Link></li>
            <li><Link href="/marcas" className="transition hover:text-accent">Marcas</Link></li>
            <li><Link href="/contacto" className="transition hover:text-accent">Contáctenos</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" />{empresa.direccion}</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" />{empresa.telefono}</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" />{empresa.correo}</li>
            <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-accent" />{empresa.horario}</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">
        © 2026 IKOMI Perú · Réplica académica
      </p>
    </footer>
  );
}
