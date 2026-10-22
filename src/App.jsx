import "@picocss/pico/css/pico.css"
import useFetchData from "./useFetchData"
import RecordCard from './RecordCard.jsx'


function App() {
  const { records, loading, error } = useFetchData("https://student-data-api.alana-duke25.workers.dev/api/v1/datasets/pokedex/records?limit=10")
  
    if (loading) {
      return <h1>⏳Loading Pokemon⌛️</h1>
    }
  
  console.log(records)
  return (

    <div>
      <h1>Pokedex Team Battle</h1>
      <p>{error}</p>
      {records.map((record)=><RecordCard key={record.id} record ={record} />)}
      <p>A Trainer will  be able to compare pokemon stats and see who would win soly based on the pokemon's stats.</p>
    </div>
  )
}

function fighterA () {
  
}

export default App
