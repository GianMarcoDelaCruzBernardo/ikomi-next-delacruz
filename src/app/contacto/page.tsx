import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctenos",
  description: "Escríbenos para conocer más sobre IKOMI Perú.",
};

export default function Contacto() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <SectionTitle titulo="Contáctenos" />
      <ContactForm />
    </section>
  );
}
