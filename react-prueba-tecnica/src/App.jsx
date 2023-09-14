import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro.jsx'

function App() {

  const {fact,refreshRandomFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})  


  const handleClick = async ()=>{
     refreshRandomFact()
  }

  return (
    <>
    <button onClick={handleClick}>Get new fact</button>
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={imageUrl}></img>}

    <Otro/>
    </>
  )
}

export default App
