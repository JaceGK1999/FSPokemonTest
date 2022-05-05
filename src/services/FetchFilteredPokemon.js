export async function fetchFilteredPokemon(type, search, sort) {
  const params = new URLSearchParams();

  params.set('perPage', 10);

  if (type !== 'all') {
    params.set('type', type);
  }

  if (sort) {
    params.set('direction', sort);
  }

  if (search) {
    params.set('pokemon', search);
  }

  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
