import Film from "./Film"
import FilmSortingSelect from "./FilmSorter"
import {
  Row,
  Jumbotron
} from "@bootstrap-styled/v4"

import styled from "styled-components"

function FilmList(props) {

  const sortableProperties = [
    {
      name: "Name",
      value: "name"
    },
    {
      name: "Rating",
      value: "rating"
    },
    {
      name: "Release date",
      value: "releaseDate"
    }
  ]

  return (
    <>
      <FilmSortingSelect
        films={props.films}
        setFilms={props.setFilms}
        sortableProperties={sortableProperties}
      ></FilmSortingSelect>
      <Row>
        {props.films.length
          ? props.films.map((film) => <Film film={film} key={film.name}></Film>)
          : (
            <Jumbotron className="w-100">Select a genre to get some recommendations!</Jumbotron>
          )}
      </Row>
    </>
  )
}

const ButtonWrapper = styled.div`
  ${(props) => `& {
    margin:10px;
  }
  & .button {
    background: ${props.theme["$bg-secondary"]};
  }
  `}
`

export default FilmList
