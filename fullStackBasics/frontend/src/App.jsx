import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // Using vite proxy
    axios.get('/api/jokes') 
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error.message))
  }, [jokes, setJokes])

  return (
    <>
      <h1>Chai aur FullStack</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
