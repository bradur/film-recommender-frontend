import { Button, Col } from "@bootstrap-styled/v4"
import styled from "styled-components"

function GenreButton(props) {
  return (
    <Col className="col-lg-2">
      <ButtonWrapper className="w-100">
        <Button
          onClick={() => props.handleOnClick(props.genre)}
          active={props.genre.selected}
          className="w-100 p-2"
        >
          {props.genre.name}
        </Button>
      </ButtonWrapper>
    </Col>
  )
}

const ButtonWrapper = styled.div`
  & {
    margin:5px;
    display:inline-block;
  }
`
export default GenreButton
