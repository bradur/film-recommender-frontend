import { get } from "../connector.js"
const url = "api/imdb/recommendations-by-genre"


const serializeGenres = genres => {console.log(genres);return genres.map(genre => genre.name).join(',')}

const getRecommendations = async (genres) => {
  const response = await get({
    url: `${url}/${serializeGenres(genres)}`
  })
  return response.data
}

export default { getRecommendations }
