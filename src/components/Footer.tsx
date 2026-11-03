import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              IKOMI <span className="text-amber-400">PERÚ</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Líderes en soluciones de ventilación y climatización industrial. 
              Comprometidos con la calidad y el servicio excellence desde 2009.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/nosotros" className="transition-colors hover:text-amber-400">Nosotros</Link></li>
              <li><Link href="/servicios" className="transition-colors hover:text-amber-400">Servicios</Link></li>
              <li><Link href="/productos" className="transition-colors hover:text-amber-400">Productos</Link></li>
              <li><Link href="/marcas" className="transition-colors hover:text-amber-400">Marcas</Link></li>
              <li><Link href="/contacto" className="transition-colors hover:text-amber-400">Contáctenos</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Productos</h4>
            <ul className="space-y-2">
              <li><Link href="/productos/ventilador-industrial" className="transition-colors hover:text-amber-400">Ventiladores Industriales</Link></li>
              <li><Link href="/productos/extractor-aires" className="transition-colors hover:text-amber-400">Extractores de Aire</Link></li>
              <li><Link href="/productos/sistema-ventilacion" className="transition-colors hover:text-amber-400">Sistemas de Ventilación</Link></li>
              <li><Link href="/productos/ventilador-techo" className="transition-colors hover:text-amber-400">Ventiladores de Techo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5" />
                <span className="text-sm">Av. Industrial 1234, Lima, Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-sm">+51 1 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-sm">ventas@ikomiperu.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>© 2026 IKOMI Perú - Réplica académica TECSUP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
