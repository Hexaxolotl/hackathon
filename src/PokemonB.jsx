import useFetchData from "./useFetchData";
import {useState} from "react"

function PokemonB () {
    const [currentIndex, setCurrentIndex] = useState(0)
    const {records, loading, error} = useFetchData("https://student-data-api.alana-duke25.workers.dev/api/v1/datasets/pokedex/records?limit=10")
    
    if (loading)return <div> loading Pokemon...</div>
    if (error) return <div> Error: {error}</div>
    if (!records || records.length === 0) return <div> No Pokemon found</div>

    const p = records[currentIndex]

    const nextPokemon =()=> {
        if (currentIndex === records.length - 1){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const previousPokemon =()=> {
        if (currentIndex === 0) {
            setCurrentIndex(records.length -1)
        } else {
            setCurrentIndex(currentIndex- 1)
        }
    }

        //choosePokemon is saving the currentIndex and sending it to app.jsx
    const choosePokemon =() => {{
        console.log("you chose:",p)
    }
    }
    return (
        <div className="pokemon-card">
            <img src={p.image} alt={p.name} id="pokeImg" />
            <h2>{p.name}</h2>
            <p>Type: {p.type}</p>
            <p>Stats:</p> <br></br>
            <p> HP: {p.hp} Attack: {p.attack} Defense: {p.defense}</p>
            <button onClick={nextPokemon}>Next</button>
            <button onClick={choosePokemon}>Choose</button>
            <button onClick={previousPokemon}>Back</button>
        </div>
    )
}

    export default PokemonB