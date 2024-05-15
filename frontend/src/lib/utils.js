import endpoint from "@/utils/endpoint";

export async function pegarAtores() {
  const response = await fetch(endpoint.concat("/atores"));
  if (!response.ok) {
    throw new Error("Não foi possível pegar os atores");
  }
  return await response.json();
}

export async function pegarAtor(id) {
  const response = await fetch(endpoint.concat("/atores/").concat(id));
  if (!response.ok) {
    throw new Error("Não foi possível pegar o ator");
  }
  return await response.json();
}

export async function pegarFilmes() {
  const response = await fetch(endpoint.concat("/filmes"));
  if (!response.ok) {
    throw new Error("Não foi possível pegar os filmes");
  }
  return await response.json();
}

export async function pegarFilme(id) {
  const response = await fetch(endpoint.concat("/filmes/").concat(id));
  if (!response.ok) {
    throw new Error("Não foi possível pegar o filme");
  }
  return await response.json();
}

export async function pesquisarFilme(filme) {
  const response = await fetch(
    endpoint.concat(`/filmes/titulo?titulo=${filme}`)
  );
  if (!response.ok) {
    throw new Error("Não foi possível pesquisar o filme");
  }
  return await response.json();
}

export async function pesquisarAtor(ator) {
  const response = await fetch(endpoint.concat(`/atores/nome?nome=${ator}`));
  if (!response.ok) {
    throw new Error("Não foi possível pesquisar o ator");
  }
  return await response.json();
}

// Faz o relacionamento.
export async function adicionarFilmeAoAtor(atorId, filmeId) {
  const response = await fetch(endpoint.concat("/relacionar"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ atorId, filmeId }),
  });
  if (!response.ok) {
    throw new Error("Não foi possível adicionar o filme ao ator");
  }
  return await response.json();
}

// excluir o relacionamento
export async function excluirRelacionamento(atorId, filmeId) {
  const response = await fetch(endpoint.concat("/relacionar"), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ atorId, filmeId }),
  });
  if (!response.ok) {
    throw new Error("Não foi possível excluir o relacionamento");
  }
  return await response.json();
}

// Deleta o ator.

export async function deletandoAtor(atorId) {
  const response = await fetch(endpoint.concat("/atores/").concat(atorId), {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Não foi possível deletar o ator");
  }
}

export async function deletandoFilme(filmeId) {
  const response = await fetch(endpoint.concat("/filmes/").concat(filmeId), {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Não foi possível deletar o filme");
  }
}

export async function editandoAtor(atorId, ator) {
  const response = await fetch(endpoint.concat("/atores/").concat(atorId), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ator),
  });
  if (!response.ok) {
    throw new Error("Não foi possível editar o ator");
  }
  return await response.json();
}

export async function editandoFilme(filmeId, filme) {
  const response = await fetch(endpoint.concat("/filmes/").concat(filmeId), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filme),
  });
  if (!response.ok) {
    throw new Error("Não foi possível editar o filme");
  }
  return await response.json();
}
