import { BOARD_IMAGES_NUMBER } from "../../utils/constants";
const POKE_API = "https://pokeapi.co/api/v2/pokemon";

type Input = {
  limit?: number;
};

const fetchImages = async ({ limit = BOARD_IMAGES_NUMBER }: Input = {}) => {
  const response = await fetch(`${POKE_API}?limit=${limit}`);
  const data = await response.json();

  const imageUrls = data.results.map(async (pokemon: { url: string }) => {
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonData = await pokemonResponse.json();

    return pokemonData.sprites.front_default;
  });

  return Promise.all(imageUrls);
};

export default fetchImages;
