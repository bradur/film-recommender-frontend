import { useState, useEffect } from "react"
import GenreButton from "./GenreButton"
import PropTypes from "prop-types"
import imdbAPI from "./../services/api/imdbAPI"
import {
  Row
} from "@bootstrap-styled/v4"
function GenrePicker(props) {

  const getSelectedGenres = () => props.genres.filter(genre => genre.selected)
  const handleOnClick = async (genre) => {
    genre.selected = !genre.selected
    const selectedGenres = getSelectedGenres()
    if (selectedGenres.length > 0) {
      const films = await imdbAPI.getRecommendations(getSelectedGenres())
      props.setFilms(films)
    } else {
      props.setFilms([])
    }
  }

  return (
    <Row className="GenrePicker">
      {props.genres.length
        ? props.genres.map((genre) => (
            <GenreButton key={genre.name} genre={genre} handleOnClick={handleOnClick}></GenreButton>
          ))
        : "No genres were found"}
    </Row>
  )
}

GenrePicker.propTypes = {
  genres: PropTypes.array,
}

export default GenrePicker
