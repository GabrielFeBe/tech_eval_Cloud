'use client'
import Input from "@/app/components/Input";
import { revalidateAll } from "@/lib/actions";
import endpoint from "@/utils/endpoint";
import { useState } from "react";

export default function Page() {
  const [filme, setFilme] = useState({
    titulo: "",
    anoDeLancamento: 0,
    estaDisponivel: false,
  });
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(endpoint.concat('/filmes'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme),
      });
      
      if (!response.ok) {
        const jsonMsg = await response.json();
        throw new Error('Não foi possível criar o filme por'.concat(' - ').concat(jsonMsg.message));
      }
      setFilme({
        titulo: "",
        anoDeLancamento: 0,
        estaDisponivel: false,
      });
      await revalidateAll()
      alert("Filme criado com sucesso!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Criar Filmes</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input label="Título" name="titulo" type="text" state={filme} setState={setFilme} value={filme.titulo} className="rounded-md pl-[5px]"/>
        <Input label="Ano" name="anoDeLancamento" type="number" state={filme} setState={setFilme} value={filme.anoDeLancamento} className="rounded-md pl-[5px]"/>
        <Input label="Está disponível?" name="estaDisponivel" type="checkbox" state={filme} setState={setFilme} value={filme.estaDisponivel}/>
        <button type="submit">Criar</button>
      </form>
    </main>
  );
}