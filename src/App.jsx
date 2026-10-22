import "nes.css/css/nes.min.css";
import useFetchData from "./useFetchData"
import PokemonA from "./PokemonA.jsx"
import PokemonB from "./PokemonB.jsx"


function App() {
  const { records, loading, error } = useFetchData("https://student-data-api.alana-duke25.workers.dev/api/v1/datasets/pokedex/records?limit=10")
  
    if (loading) {
      return <h1>⏳Loading Pokemon⌛️</h1>
    }
  
  console.log(records)


  return (
    <div className="container">
      <h1>Pokedex Team Battle</h1>
      <p>{error}</p>
      <p>A Trainer will  be able to compare pokemon stats and see who would win soly based on the pokemon's stats.</p>
      <PokemonA />
      <PokemonB />
    
    </div>
  )
}


export default App
