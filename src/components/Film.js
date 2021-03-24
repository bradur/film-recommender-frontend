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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <CardText>
              <FontAwesomeIcon icon={'star'} /> {props.film.rating}
            </CardText>
            <CardBlock className="links">
              <CardLink className="cardLink" href={props.film.imdbLink}>
                <FontAwesomeIcon icon={['fab', 'imdb']} />
              </CardLink>
              { props.film.netflix ? 
              <CardLink className="cardLink" href="#">
                <span className="netflix-icon">N</span>
              </CardLink>
              : ''}
            </CardBlock>
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
  & .links {
    display:flex;
    justify-content: center;
    align-items: center;
  }
  & .cardTitle {
    height:40px;
  }
  & .cardLink {
    font-size:40px;
    padding:0;
    display:flex;
  }
  & .netflix-icon {
    font-size:30px;
    display:inline-block;
    background: black;
    color:red;
    width:35px;
    height:35px;
    border-radius:5px;
    line-height:35px;
    padding:0;
    text-align:center;
    box-sizing:border-box;
  }
  `}
`

export default Film
