export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Criar Atores</h1>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span>Nome</span>
          <input type="text" />
        </label>
        <label className="flex flex-col">
          <span>Descrição</span>
          <textarea />
        </label>
        <label className="flex flex-col">
          Idade
          <input type="number" />
        </label>
        <button type="submit">Criar</button>
      </form>
    </main>
  );
}