"use client";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { pesquisarAtor, pesquisarFilme } from "@/lib/utils";
import Link from "next/link";

export default function BarraDePesquisaHome({ state, setState }) {
  const [textoPesquisa, setTextoPesquisa] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [atores, setAtores] = useState([]);
  const [estaFocado, setEstaFocado] = useState(false);
  const [estaPorCima, setEstaPorCima] = useState(false);

  const pesquisar = async () => {
    if (textoPesquisa.length > 0) {
      try {
        const filmes = await pesquisarFilme(textoPesquisa);
        const atores = await pesquisarAtor(textoPesquisa);
        setFilmes(filmes);
        setAtores(atores);
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("Digite algo para pesquisar");
    }
  };
  return (
    <SearchInput
      buttonSize={"top-[3.5px] right-[3.5px] w-[82px] h-[44px]"}
      inpputSize={"w-[947px] h-[51px]"}
      placeholder={"Pesquise por filme ou ator aqui"}
      texto={textoPesquisa}
      setTexto={setTextoPesquisa}
      funcaoPesquisa={pesquisar}
      onFocus={() => setEstaPorCima(true)}
      onBlur={() => setEstaPorCima(false)}
      onMouseEnter={() => setEstaPorCima(true)}
      onMouseLeave={() => setEstaPorCima(false)}
    >
      {(filmes.length > 0 || atores.length) > 0 &&
        (estaFocado || estaPorCima) && (
          <div
            className="absolute bg-slate-400 w-full h-[300px] overflow-y-auto"
            onMouseEnter={() => setEstaPorCima(true)}
            onMouseLeave={() => setEstaPorCima(false)}
          >
            {[...filmes, ...atores].map((item) => {
              if (item.titulo) {
                return (
                  <Link
                    href={`/filme/${item.id}`}
                    key={item.id}
                    className="flex flex-col gap-4 hover:bg-slate-600"
                  >
                    <p>{item.titulo}</p>
                    <p>{item.anoDeLancamento}</p>
                  </Link>
                );
              } else {
                return (
                  <Link
                    href={`/ator/${item.id}`}
                    key={item.id}
                    className="flex flex-col gap-4 hover:bg-slate-600"
                  >
                    <p>{item.nome}</p>
                    <p>{item.nacionalidade}</p>
                  </Link>
                );
              }
            })}
          </div>
        )}
    </SearchInput>
  );
}
