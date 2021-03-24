import { Select, Option, Button } from "@bootstrap-styled/v4"

import { orderBy, get, isUndefined } from "lodash"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FilmSorter(props) {
  const [orderAsc, setOrderAsc] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(false)

  const sortFilms = () => {
    if (selectedProperty) {
      props.setFilms(orderBy(props.films, selectedProperty.value, orderAsc ? 'asc' : 'desc'))
    }
  }

  const handleOnChange = (event) => {
    const property = props.sortableProperties.find(p => p.value === event.target.value)
    setSelectedProperty(property)
    sortFilms()
  }

  const handleOnClick = () => {
    setOrderAsc(!orderAsc)
    sortFilms()
  }

  useEffect(() => {
    if (props.sortableProperties.length > 0) {
      setSelectedProperty(props.sortableProperties[0])
    }
  }, [])


  return (
    <FilmSorterWrap>
      <Button onClick={handleOnClick}>
        <FontAwesomeIcon icon={orderAsc ? 'arrow-down' : 'arrow-up'} />
      </Button>
      <Select onChange={(event) => handleOnChange(event)}>
        { Array.isArray(props.sortableProperties) ? props.sortableProperties.map(property => (
        <Option key={property.value} value={property.value}>{property.name}</Option>
        )) : ""}
      </Select>
    </FilmSorterWrap>
  )
}

const FilmSorterWrap = styled.div`
  & {
    height:40px;
  }
`

export default FilmSorter
