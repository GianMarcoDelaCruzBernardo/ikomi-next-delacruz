// Solo interfaz (sin envío real), según el enunciado.
import { Send } from "lucide-react";

export default function ContactForm() {
  const campo =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm transition placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15";
  const etiqueta = "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <form className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={etiqueta}>Nombre</label>
          <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" className={campo} />
        </div>
        <div>
          <label htmlFor="correo" className={etiqueta}>Correo</label>
          <input id="correo" name="correo" type="email" placeholder="tucorreo@ejemplo.com" className={campo} />
        </div>
      </div>
      <div>
        <label htmlFor="mensaje" className={etiqueta}>Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={5} placeholder="Cuéntanos qué necesitas…" className={campo} />
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3 font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-brand-dark"
      >
        Enviar mensaje <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
