export const getPokemonById = (
  id: string | number,
  cb: (name: string) => void
) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => cb(pokemon.name))
    .catch((error) => console.error(error));
};
