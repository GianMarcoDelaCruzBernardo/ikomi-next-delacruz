type Props = { titulo: string; subtitulo?: string };

export default function SectionTitle({ titulo, subtitulo }: Props) {
  return (
    <div className="mb-12 text-center">
      <h2 className="relative inline-block text-4xl font-extrabold text-slate-900 md:text-5xl">
        {titulo}
        <span className="absolute -bottom-3 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></span>
      </h2>
      {subtitulo && (
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          {subtitulo}
        </p>
      )}
    </div>
  );
}
