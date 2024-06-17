import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  // const [products, error, loading]=customReactQuery('/api/products')

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController();
    ; (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {signal: controller.signal})
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("Request Canceled", error.message);
        }
        setError(true)
        setLoading(false)
      }
    })()

    return () => {
      controller.abort();
    }
  }, [])


  if (error)
    return <h1>Something went wrong!</h1>

  if (loading)
    return <h1>Loading...</h1>
  return (
    <>
      <h1>Chai aur API</h1>
      <input name='search' placeholder='Search' type='text'
        value={search} onChange={(e) => setSearch(e.target.value)}
      ></input>
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {


  return [products, error, loading];
}