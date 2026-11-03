import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { empresa } from "@/data/empresa";

export const metadata: Metadata = {
  title: "Contáctenos",
  description: "Escríbenos para conocer más sobre IKOMI Perú.",
};

export default function Contacto() {
  const datos = [
    { icono: MapPin, t: "Dirección", v: empresa.direccion },
    { icono: Phone, t: "Teléfono", v: empresa.telefono },
    { icono: Mail, t: "Correo", v: empresa.correo },
    { icono: Clock, t: "Horario", v: empresa.horario },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle etiqueta="Hablemos" titulo="Contáctenos" subtitulo="Cuéntanos tu proyecto y te responderemos pronto" />
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="bg-hero rounded-3xl p-8 text-white shadow-xl lg:col-span-2">
          <h3 className="mb-6 text-xl font-bold">Información de contacto</h3>
          <ul className="space-y-6">
            {datos.map(({ icono: Icono, t, v }) => (
              <li key={t} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Icono className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="text-sm text-blue-200">{t}</p>
                  <p className="font-medium">{v}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
