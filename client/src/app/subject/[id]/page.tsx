export default function SubjectPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Página da Matéria ID: {params.id}</h1>
      {/* Adicione o conteúdo do roadmap aqui */}
    </div>
  );
}