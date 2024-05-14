'use client';
import { useState } from "react";
import Input from "@/app/components/Input";
import endpoint from "@/utils/endpoint";
import { revalidateAll } from "@/lib/actions";


export default function Page() {
  const [atores, setAtores] = useState({
    nome: "",
    dataDeNascimento: new Date(),
    nacionalidade: "",
  });

  const handleSubmit = async (event) => {
     event.preventDefault();
      try{
        const response = await fetch(endpoint.concat('/atores'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(atores),
        });
        if (!response.ok) {
          const jsonMsg = await response.json();
          throw new Error('Não foi possível criar o ator por'.concat(' - ').concat(jsonMsg.message));
        }
        setAtores({
          nome: "",
          dataDeNascimento: new Date(),
          nacionalidade: "",
        });
        await revalidateAll();
        alert("Ator criado com sucesso!");
      } catch (error) {
        alert(error.message);
      }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Criar Atores</h1>
      <form 
      className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input label="Nome" name="nome" type="text" state={atores} setState={setAtores} value={atores.nome}
        className="pl-[5px] rounded-md"/>
        <Input label="Data de nascimento" name="dataDeNascimento" type="date" state={atores} setState={setAtores} value={atores.dataDeNascimento}
        className="pl-[5px] rounded-md"/>
        <Input label="Nacionalidade" name="nacionalidade" type="text" state={atores} setState={setAtores} value={atores.nacionalidade}
        className="pl-[5px] rounded-md"/>
        <button type="submit">Criar</button>
      </form>
    </main>
  );
}