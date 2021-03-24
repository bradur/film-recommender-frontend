import { useState, useEffect } from "react"
import GenreButton from "./GenreButton"
import PropTypes from "prop-types"
import styled from "styled-components"
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
    <GenrePickerWrapper>
      <Row className="GenrePicker">
        {props.genres.length
          ? props.genres.map((genre) => (
              <GenreButton key={genre.name} genre={genre} handleOnClick={handleOnClick}></GenreButton>
            ))
          : "No genres were found"}
      </Row>
    </GenrePickerWrapper>
  )
}

const GenrePickerWrapper = styled.div`
  & {
    margin: 40px auto;
  }
`

GenrePicker.propTypes = {
  genres: PropTypes.array,
}

export default GenrePicker
