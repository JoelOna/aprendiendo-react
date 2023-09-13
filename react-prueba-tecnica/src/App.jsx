import { useEffect, useState } from 'react'
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App() {

  const [fact,setFact] = useState()
  const [imageUrl,setImageUrl] = useState()

  useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const {fact} = data
        setFact(fact)
       
      })
  },[])

  useEffect(()=>{
    if (!fact) return

    const firstWord = fact.split('',1)

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const {url} = data
        console.log(data)
        const newUrl = `https://cataas.com${url}`
        setImageUrl(newUrl)
      })
  },[fact])

  return (
    <>
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={imageUrl}></img>}
    </>
  )
}

export default App
