import axios from 'axios'

const apiURL = 'https://film-recommender.herokuapp.com/'

const processURL = url => `${apiURL}/${url}`
const get = async (options) => {
  return axios({
    ...options,
    url: processURL(options.url),
  })
}
const post = async ({url, data}) => axios({
  method: 'post',
  url: processURL(url),
  data
})

export { get, post }