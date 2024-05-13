'use client'
import Input from "@/app/components/Input";
import endpoint from "@/utils/endpoint";
import { useState } from "react";

export default function Page() {
  const [filme, setFilme] = useState({
    titulo: "",
    ano: 0,
    disponivel: false,
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
      const data = await response.json();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Criar Filmes</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input label="Título" name="titulo" type="text" state={filme} setState={setFilme} value={filme.titulo} className="rounded-md pl-[5px]"/>
        <Input label="Ano" name="ano" type="number" state={filme} setState={setFilme} value={filme.ano} className="rounded-md pl-[5px]"/>
        <Input label="Está disponível?" name="disponivel" type="checkbox" state={filme} setState={setFilme} value={filme.disponivel}/>
        <button type="submit">Criar</button>
      </form>
    </main>
  );
}