import { useState, useEffect } from "react";
import getPokemonInfo from "./RandomPokemonHelper";
export default function RandomPokemon() {

    const pokeNum = Math.floor(Math.random() * 151) + 1;
    const init_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;
    
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
      fetchPokemon();
    }, []);

     async function fetchPokemon() {
      const newPokeNum = Math.floor(Math.random() * 151) + 1;
      const newPokenName = await getPokemonInfo(newPokeNum);
      setUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${newPokeNum}.png`);
      setName(newPokenName);
    }


    return (
      <div className="RandomPokemon">
        <h1>Pokemon #{pokeNum} : {name}</h1>
        <div>
        <img src={url} alt="" style={{ maxWidth: "160px", maxHeight: "160px" }}/>
        </div>
        <button onClick={fetchPokemon}>Get another Pokemon </button>
      </div>
    );
  }