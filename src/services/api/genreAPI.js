import { get } from '../connector.js'
const url = 'api/genres/'

const getGenres = async () => {
  return get({url})
}

export { getGenres }