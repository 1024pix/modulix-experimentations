import './style.css';

document.querySelector('#app').innerHTML = '';

document.forms[0].onsubmit = async (event) => {
  event.preventDefault();

  console.log(document.getElementById('wanted-pokemon').value);

  document.querySelector('#app').innerHTML = await fetchPokemon(
    document.getElementById('wanted-pokemon').value
  );
};

async function fetchPokemon(wantedPokemonName) {
  const pokemon = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + wantedPokemonName
  ).then((response) => response.json());

  return `<p>${pokemon.id}</p><img src="${pokemon.sprites.front_default}" alt=""/>`;
}
