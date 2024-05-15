"use static";
import Image from "next/image";
import svg from "../assets/search.svg";
import Link from "next/link";
import { pegarAtores, pegarFilmes } from "@/lib/utils";
import SearchInput from "./components/SearchInput";
import BarraDePesquisaHome from "./components/BarraDePesquisaHome";

export default async function Home() {
  let filmes = [];
  let atores = [];
  // pega os filmes do banco de dados
  try {
    filmes = await pegarFilmes();
  } catch (error) {
    filmes = null;
  }
  // pega os atores do banco de dados
  try {
    atores = await pegarAtores();
  } catch (error) {
    atores = null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BarraDePesquisaHome></BarraDePesquisaHome>
      {/* carrossel de filmes */}
      {filmes ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Filmes</h2>
          <div className="flex gap-10 w-[800px] overflow-auto">
            {filmes?.map((filme) => (
              <Link
                href={`/filme/${filme.id}`}
                key={filme.id}
                className="flex flex-col gap-4"
              >
                <p>{filme.titulo}</p>
                <p>{filme.anoDeLancamento}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-red-800 font-bold">
          {" "}
          Não foi possivel carregar os filmes{" "}
        </h2>
      )}
      {/* carrossel de atores */}
      {atores ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Atores</h2>
          <div className="flex gap-10 w-[800px] overflow-auto">
            {atores?.map((ator) => (
              <Link
                href={`/ator/${ator.id}`}
                key={ator.id}
                className="flex flex-col gap-4"
              >
                <p>{ator.nome}</p>
                <p>{ator.dataDeNascimento}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-red-800 font-bold">
          {" "}
          Não foi possivel carregar os atores{" "}
        </h2>
      )}
    </main>
  );
}
