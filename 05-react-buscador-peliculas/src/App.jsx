import './App.css'
import {Movies} from './components/Movies'
import withResults from './mocks/with-results.json'
import withOutResults from './mocks/no-results.json'

function App() {
  const movies = withResults.Search
  const mappedMovies = movies?.map((movie)=>({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return (
    <div className="page">
    <header>
      <h1>Buscador de peliculas</h1>
     <form action="" className="form">
       <input type="text" placeholder="Avengers, Star Wars, The Matrix..."/>
       <button type="submit">Buscar</button>
      </form>     
      </header>

      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
