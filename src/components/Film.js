import {
  CardBlock,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Col
} from "@bootstrap-styled/v4"

import styled from "styled-components"
import defaultFilmPicture from "../images/film.png"

function Film(props) {
  return (
    <Col className="col-lg-4">
      <FilmWrap>
        <Card>
          <CardTitle className="cardTitle">{props.film.name}</CardTitle>
          <CardImg
            top
            width="100%"
            src={props.img ? props.img : defaultFilmPicture}
          />
          <CardBlock>
            <CardSubtitle>{props.film.releaseDate}</CardSubtitle>
            <CardText>{props.film.rating}</CardText>
            <CardLink>{props.film.imdbLink}</CardLink>
          </CardBlock>
        </Card>
      </FilmWrap>
    </Col>
  )
}

const FilmWrap = styled.div`
  ${(props) => `& {
    display:inline-block;
    padding: 20px;
    box-sizing:border-box;
  }
  & .card {
    padding: 25px;
    background: ${props.theme["$light"]};
    color: ${props.theme["$secondary"]};
    border:0;
    box-sizing:border-box;
  }
  & .cardTitle {
    height:40px;
  }
  `}
`

export default Film
