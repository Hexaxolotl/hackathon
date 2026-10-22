import { useState, useEffect } from 'react'
//custom hooks in react are a clean way to package up logic—like fetching data from an API (in my case rn its my pokemon API)so I can reuse it across different components without repeating myself.
function useFetchData(url) {
  const [records, setRecords] = useState([]) //this is holding the actual data array returned from my API (like the list of Pokémon). It starts as an empty array [].
  const [loading, setLoading] = useState(true) //A true/false flag that lets my app know if it's still waiting on the API. It starts as true so my app knows fetching is happening.
  const [error, setError] = useState("") //A string reserved to hold an error message if something goes wrong (like a bad URL or internet outage). It starts empty "".

  //useEffect tells React, "Run this code when the component first appears on the screen."
  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(url) // here is where I am reaching out to my data end point just like in vanilla JS code.
        const json = await response.json()
        if (response.ok) { //Checks if the server responded successfully (status code in the 200s)
          setRecords(json.records) // if the server responds is good the gets saved here.
        } else {
          setError(json.error.message) //if failed it captures the error here
        }
      } catch (problem) {
        setError("Could not load " + url + " (" + problem.message + ")")
      }
      setLoading(false)
    }
    load() //Inside, it defines an async function named load() and immediately calls it because useEffect itself can't directly be marked as async.
  }, [url]) //dependency array at the bottom: This tells React that if the url ever changes, it should re-run the fetch.

  return { records, loading, error }
}

export default useFetchData
