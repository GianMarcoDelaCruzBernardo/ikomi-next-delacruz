type Props = { titulo: string; subtitulo?: string };

export default function SectionTitle({ titulo, subtitulo }: Props) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-brand">{titulo}</h2>
      <div className="mx-auto mt-2 h-1 w-16 rounded bg-accent" />
      {subtitulo && <p className="mt-3 text-gray-600">{subtitulo}</p>}
    </div>
  );
}
