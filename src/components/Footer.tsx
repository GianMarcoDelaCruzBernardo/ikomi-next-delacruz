import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-gray-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">IKOMI PERÚ</h3>
          <p className="text-sm">Sitio replicado con fines académicos (TECSUP).</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">Enlaces</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/nosotros" className="hover:text-accent">Nosotros</Link></li>
            <li><Link href="/productos" className="hover:text-accent">Productos</Link></li>
            <li><Link href="/contacto" className="hover:text-accent">Contáctenos</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">Contacto</h3>
          <p className="text-sm">TODO: dirección, teléfono y correo del sitio de referencia.</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© 2026 IKOMI Perú - Réplica académica</p>
    </footer>
  );
}
