import { useState, useEffect } from "react"
import imdbAPI from "./services/api/imdbAPI"
import { getGenres } from "./services/api/genreAPI"
import GenrePicker from "./components/GenrePicker"
import FilmList from "./components/FilmList"
import styled from "styled-components"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowUp, faStar } from '@fortawesome/free-solid-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowDown, faArrowUp, faImdb, faStar)

function App() {
  const [genres, setGenres] = useState([])
  const [films, setFilms] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      const fetchedGenres = await getGenres()
      setGenres(fetchedGenres.data.map(genre => ({name: genre, selected: false})))
    }
    fetchGenres()
  }, [])

  return (
    <AppWrapper className="App text-center">
      <h1>Film recommender</h1>
      <GenrePicker genres={genres} setFilms={setFilms}></GenrePicker>
      <FilmList films={films} setFilms={setFilms}></FilmList>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  max-width:960px;
  margin:40px auto;
`

export default App
