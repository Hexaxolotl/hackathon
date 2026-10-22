import useFetchData from "./useFetchData";
import {useState} from "react';

function FighterA () {
    const [currentIndex, setCurrentIndex] = useState(0)
    const {records, loading, error} = useFetchData("https://student-data-api.alana-duke25.workers.dev/api/v1/datasets/pokedex/records?limit=10")

    if (loading)return <div> loading Pokemon...</div>
    if (error) return <div> Error: {error}</div>
    if (!records || records.length === 0) return <div> No Pokemon found</div>

    const p = records[currentIndex]

    return (
        <div className="pokemon-card">
            <img src={p.image} alt={p.name} id="pokeimg" />
            <h2>{p.name}</h2>
            <p>Type: {p.type}</p>
            <p>Stats:</p> <br></br>
            <p> HP: {p.hp} Attack: {p.attack} Defense: {p.defense}</p>
        </div>
    )
}

    export default FighterA