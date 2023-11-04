const getPokemonById = (id, cb) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((pokemon) => cb(pokemon.name))
        .catch((error) => console.error(error))

}

module.exports = getPokemonById;