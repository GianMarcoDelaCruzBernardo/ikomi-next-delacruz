type Props = { titulo: string; subtitulo?: string; etiqueta?: string };

export default function SectionTitle({ titulo, subtitulo, etiqueta }: Props) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {etiqueta && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{etiqueta}</p>
      )}
      <h2 className="mb-4 text-3xl font-bold text-brand md:text-4xl">{titulo}</h2>
      <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-accent" />
      {subtitulo && <p className="text-lg text-gray-600">{subtitulo}</p>}
    </div>
  );
}
