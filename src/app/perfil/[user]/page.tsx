export default function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <div>
      <h1>Usuário: {params.user}</h1>
    </div>
  );
}
