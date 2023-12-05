import { getPokemonById } from "../../src/js-foundation/08-patron-adaptador-fetch";

describe("08-patron-adaptador-fetch", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if the pokemon does not exist", async () => {
    const pokemonId = 1000000;
    try {
      const pokemonName = await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon with id ${pokemonId} not found`);
    }
  });
});
