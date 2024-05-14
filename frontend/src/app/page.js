'use static';
import Image from "next/image";
import svg from "../assets/search.svg";
import endpoint from "@/utils/endpoint";
import Link from 'next/link';

export default async function Home() {
  let filmes;
  let atores;
  // pega os filmes do banco de dados
  try {
    const response = await fetch(endpoint.concat("/filmes"), {
      next:{
        tags: ['filmes']
      }
    });
    if (!response.ok) {
      throw new Error('Não foi possível carregar os filmes');
    }
    const filmesRes = await response.json();
    filmes = filmesRes;
  } catch (error) {
    console.log(error.message);
  }

  // pega os atores do banco de dados
  try {
    const response = await fetch(endpoint.concat("/atores") , {
      next:{
        tags: ['atores']
      }
    });
    if (!response.ok) {
      throw new Error('Não foi possível carregar os atores');
    }
    const atoresRes = await response.json();
    atores = atoresRes;
  } catch (error) {
    console.log(error.message);
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     

      <label htmlFor="" className="relative">
        <input type="text" className="w-[947px] h-[51px] rounded-full pl-[20px]" placeholder="Pesquise por filme ou ator aqui"/>
        <button className="bg-[#373E52] w-[82px] h-[44px] rounded-full flex items-center justify-center absolute top-[3.5px] right-[3.5px]">
          <Image src={svg} alt="search" width="36.2" height="28" />
        </button>
      </label>

      {/* carrossel de filmes */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Filmes</h2>
        <div className="flex gap-10 w-[800px] overflow-auto">
          {filmes?.map((filme) => (
            <Link href={`/filme/${filme.id}`} 
             key={filme.id} className="flex flex-col gap-4">
              <p>{filme.titulo}</p>
              <p>{filme.anoDeLancamento}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* carrossel de atores */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Atores</h2>
        <div className="flex gap-10 w-[800px] overflow-auto">
          {atores?.map((ator) => (
            <Link href={`/ator/${ator.id}`}
             key={ator.id} className="flex flex-col gap-4">
              <p>{ator.nome}</p>
              <p>{ator.dataDeNascimento}</p>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
}
