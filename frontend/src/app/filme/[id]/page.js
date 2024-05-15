"use client";
import CardInfo from "@/app/components/CardInfo";
import { deletandoFilme, editandoFilme, pegarFilme } from "@/lib/utils";
import { useEffect, useState } from "react";
import { adicionarFilmeAoAtor, pesquisarAtor } from "@/lib/utils";
import SearchInput from "@/app/components/SearchInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { revalidatePathClient } from "@/lib/actions";
import Input from "@/app/components/Input";

export default function Page({ params }) {
  const [filme, setFilme] = useState({});
  const [atorNome, setAtorNome] = useState("");
  const [atoresArray, setAtoresArray] = useState([]);
  const [estaEditando, setEstaEditando] = useState(false);
  const setOfIds = new Set();
  const router = useRouter();
  if (filme.atores) {
    filme.atores.forEach((ator) => {
      setOfIds.add(ator.id);
    });
  }
  useEffect(() => {
    pegarFilmeFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pegarFilmeFunc = async () => {
    try {
      const filme = await pegarFilme(Number(params.id));
      setFilme({ ...filme });
    } catch (error) {
      alert(error.message);
    }
  };

  const relacionarFilmeAoAtor = async (ator) => {
    try {
      await adicionarFilmeAoAtor(ator.id, filme.id);
      setFilme((filme) => {
        return {
          ...filme,
          atores: [...filme.atores, ator],
        };
      });
      setOfIds.add(ator.id);
      revalidatePathClient(`/filme/${filme.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const buscarAtores = async () => {
    try {
      const atores = await pesquisarAtor(atorNome);
      setAtoresArray(atores);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editandoFilme(filme.id, filme);
      setEstaEditando(false);
      revalidatePathClient(`/filme/${filme.id}`);
      revalidatePathClient("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const excluirFilme = async () => {
    try {
      deletandoFilme(filme.id);
      revalidatePathClient("/");
      router.refresh();
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <main className="min-h-screen flex justify-center items-center flex-col">
      <section className="flex w-full h-[400px] items-center justify-around">
        <CardInfo
          currEdit={estaEditando}
          edit={setEstaEditando}
          excluir={excluirFilme}
        >
          {estaEditando ? (
            <form action="" className="mt-[50px] p-4">
              <Input
                label="Titulo"
                name="titulo"
                type="text"
                state={filme}
                setState={setFilme}
                value={filme.titulo}
                className="pl-[5px] rounded-md"
              />
              <Input
                label="Ano"
                name="anoDeLancamento"
                type="number"
                state={filme}
                setState={setFilme}
                value={filme.anoDeLancamento}
                className="rounded-md pl-[5px]"
              />
              <Input
                label="Está disponível?"
                name="estaDisponivel"
                type="checkbox"
                state={filme}
                setState={setFilme}
                checked={filme.estaDisponivel}
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-black p-2 text-white rounded-full mt-4"
              >
                Salvar
              </button>
            </form>
          ) : (
            <>
              <p className="mt-[40px] text-base p-4">Titulo: {filme.titulo}</p>
              <p className="text-base p-4">
                Ano de lançamento: {filme.anoDeLancamento}
              </p>
              <p className="text-base p-4">
                Está disponivel: {filme.estaDisponivel ? "Sim" : "Não"}
              </p>
            </>
          )}
        </CardInfo>
        {/* Linha de filmes */}

        <div>
          <SearchInput
            buttonSize={"w-[40px] h-[44px] top-[-12px] right-[3.5px]"}
            funcaoPesquisa={buscarAtores}
            inpputSize={"w-[300px] h-[51px]"}
            placeholder={"Pesquise por um filme para adicionar ao ator"}
            setTexto={setAtorNome}
            texto={atorNome}
          />
          {/* percorre pelos filmes */}
          {atoresArray.map((ator) => {
            return (
              <div key={ator.id} className="flex flex-col gap-4">
                <p>{ator.nome}</p>
                <p>{ator.nacionalidade}</p>
                {setOfIds.has(ator.id) ? (
                  <p>Relacionado</p>
                ) : (
                  <button onClick={() => relacionarFilmeAoAtor(ator)}>
                    Relacionar
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <h2>Atores presentes no filme</h2>
      <div className="flex flex-wrap w-[800px] gap-3 m-0">
        {filme.atores &&
          filme.atores.map((ator) => {
            return (
              <Link
                key={ator.id}
                href={`/ator/${ator.id}`}
                className="bg-[#626d7b] p-1 rounded-md"
              >
                {ator.nome}
              </Link>
            );
          })}
      </div>
    </main>
  );
}
