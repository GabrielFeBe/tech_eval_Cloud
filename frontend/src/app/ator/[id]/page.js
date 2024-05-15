"use client";
import CardInfo from "@/app/components/CardInfo";
import { deletandoAtor, editandoAtor, pegarAtor } from "@/lib/utils";
import { useEffect, useState } from "react";
import { pesquisarFilme, adicionarFilmeAoAtor } from "@/lib/utils";
import SearchInput from "@/app/components/SearchInput";
import Link from "next/link";
import { revalidatePathClient } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Input from "@/app/components/Input";

export default function AtorPage({ params }) {
  const [ator, setAtor] = useState({});
  const [filme, setFilme] = useState("");
  const [filmesArray, setFilmesArray] = useState([]);
  const [estaEditando, setEstaEditando] = useState(false);
  const setOfIds = new Set();
  const router = useRouter();

  if (ator.filmes) {
    ator.filmes.forEach((filme) => {
      setOfIds.add(filme.id);
    });
  }
  useEffect(() => {
    const pegarAtorFunc = async () => {
      try {
        const ator = await pegarAtor(Number(params.id));
        setAtor({ ...ator });
      } catch (error) {
        alert(error.message);
      }
    };
    pegarAtorFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pesquisarFilmePorNome = async () => {
    try {
      const filmes = await pesquisarFilme(filme);
      setFilmesArray(filmes);
    } catch (error) {
      alert(error.message);
    }
  };

  const relacionarFilmeAoAtor = async (filme) => {
    try {
      await adicionarFilmeAoAtor(ator.id, filme.id);
      setAtor((ator) => {
        return {
          ...ator,
          filmes: [...ator.filmes, filme],
        };
      });
      setOfIds.add(filme.id);
      revalidatePathClient(`/ator/${ator.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editandoAtor(ator.id, ator);
      setEstaEditando(false);
      revalidatePathClient(`/ator/${ator.id}`);
      revalidatePathClient("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const deletarAtor = async () => {
    try {
      deletandoAtor(ator.id);
      revalidatePathClient("/");
      router.refresh();
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const dataFormatada = () =>
    new Date(ator.dataDeNascimento).toISOString().substring(0, 10);
  return (
    <main className="min-h-screen flex justify-center items-center flex-col">
      <section className="flex w-full h-[400px] items-center justify-around">
        <CardInfo
          edit={setEstaEditando}
          excluir={deletarAtor}
          currEdit={estaEditando}
        >
          {estaEditando ? (
            <form action="" className="mt-[50px] p-4">
              <Input
                label="Nome"
                name="nome"
                type="text"
                state={ator}
                setState={setAtor}
                value={ator.nome}
                className="pl-[5px] rounded-md"
              />
              <Input
                label="Data de nascimento"
                name="dataDeNascimento"
                type="date"
                state={ator}
                setState={setAtor}
                value={dataFormatada()}
                className="pl-[5px] rounded-md"
              />
              <Input
                label="Nacionalidade"
                name="nacionalidade"
                type="text"
                state={ator}
                setState={setAtor}
                value={ator.nacionalidade}
                className="pl-[5px] rounded-md"
              />
              <button onClick={handleSubmit} type="submit" className="bg-black p-2 text-white rounded-full mt-4">
                Salvar
              </button>
            </form>
          ) : (
            <>
              <p className="mt-[40px] text-base p-4">Nome: {ator.nome}</p>
              <p className="text-base p-4">
                Data de Nascimento: {ator.dataDeNascimento && dataFormatada()}
              </p>
              <p className="text-base p-4">
                Nacionalidade: {ator.nacionalidade}
              </p>
            </>
          )}
        </CardInfo>
        {/* Linha de filmes */}

        <div className="h-[320px] overflow-y-auto">
          <SearchInput
            buttonSize={"w-[40px] h-[44px] top-[-12px] right-[3.5px]"}
            funcaoPesquisa={pesquisarFilmePorNome}
            inpputSize={"w-[300px] h-[51px]"}
            placeholder={"Pesquise por um filme para relacionar"}
            setTexto={setFilme}
            texto={filme}
          />
          {/* percorre pelos filmes */}
          {filmesArray.map((filme) => {
            return (
              <div key={filme.id} className="flex flex-col gap-1 mt-3">
                <p>{filme.titulo}</p>
                <p>{filme.anoDeLancamento}</p>
                {setOfIds.has(filme.id) ? (
                  <p>Relacionado</p>
                ) : (
                  <button onClick={() => relacionarFilmeAoAtor(filme)}
                  className="bg-black p-2 text-white rounded-full w-[100px]"
                  >
                    Relacionar
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <h2>Filmes com o ator</h2>
      <div className="flex flex-wrap w-[800px] gap-3 m-0">
      {ator.filmes &&
        ator.filmes.map((filme) => {
          return (
            <Link
            key={filme.id}
            href={`/filme/${filme.id}`}
            className="bg-[#626d7b] p-1 rounded-md"
            >
              {filme.titulo}
            </Link>
          );
        })}
        </div>
    </main>
  );
}
