export default async function getPokemonInfo(pokemonNumber) {
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}/`;
    
    const speciesResponse = await fetch(speciesUrl);
    if (!speciesResponse.ok) {
        throw new Error('Pokémon not found');
    }
    const speciesData = await speciesResponse.json();
    const name = speciesData.name; // Assuming capitalize method exists
    // const descriptionUrl = speciesData.flavor_text_entries[0].flavor_text;
    
    // const descriptionResponse = await fetch(descriptionUrl);
    // if (!descriptionResponse.ok) {
    //     throw new Error('Description not available');
    // }
    // const descriptionData = await descriptionResponse.json();
    // const description = descriptionData.filter(entry => entry.language.name === 'en')[0].flavor_text.replace(/\n/g, ' ');

    return  name;
    }


// const pokemonNumber = prompt("Enter Pokémon number: ");
// getPokemonInfo(pokemonNumber)
//     .then(result => {
//         if (result.error) {
//             console.log(result.error);
//         } else {
//             const { name, description } = result;
//             console.log("Name:", name);
//             console.log("Description:", description);
//         }
//     });
