import { httpClient } from "../plugins";

export const getPokemonById = async (id: string | number) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);

    return pokemon.name;
  } catch (error) {
    throw `Pokemon with id ${id} not found`;
  }
};
