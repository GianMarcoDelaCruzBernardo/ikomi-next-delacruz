// Solo interfaz (sin envío real), según el enunciado.
export default function ContactForm() {
  const campo = "w-full rounded border border-gray-300 px-3 py-2 focus:border-brand focus:outline-none";
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-sm font-medium">Nombre</label>
        <input id="nombre" name="nombre" type="text" className={campo} />
      </div>
      <div>
        <label htmlFor="correo" className="mb-1 block text-sm font-medium">Correo</label>
        <input id="correo" name="correo" type="email" className={campo} />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1 block text-sm font-medium">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={5} className={campo} />
      </div>
      <button type="button" className="rounded bg-brand px-6 py-2 font-semibold text-white transition hover:bg-brand-dark">
        Enviar
      </button>
    </form>
  );
}
