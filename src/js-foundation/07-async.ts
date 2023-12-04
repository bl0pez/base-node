export const getPokemonById = async (id: string): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await fetch(url);
  const pokemon = await resp.json();

  return pokemon.name;
};
