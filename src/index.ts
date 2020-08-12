const axios = require('axios')
import { ArtistId } from './types'

const HTTPClient = axios.create({
  method: 'GET',
  baseURL: 'http://musicbrainz.org/ws/2/',
})

const getArtistId = (name: string) => {
  const formatName = encodeURIComponent(name).toLowerCase()
  HTTPClient({
    url: `/artist/`,
    params: {
      query: `artist:${formatName}`,
      fmt: 'json',
    },
  })
    .then(
      (response: any): ArtistId => ({
        id: response.data.artists[0].id,
        name: response.data.artists[0].name,
        gender: response.data.artists[0].gender,
        lifespan: {
          born: response.data.artists[0]['life-span'].begin,
          death: response.data.artists[0]['life-span'].ended,
        },
        country: response.data.artists[0].country,
        aliases: formatArray(response.data.artists[0].aliases),
        tags: formatArray(response.data.artists[0].tags),
      })
    )
    .catch((error: any) => {
      return error.response
    })

  function formatArray(response: any) {
    let i,
      arr = []
    for (i = 0; i < response.length; i++) {
      arr.push(response[i].name)
    }
    return arr
  }
}

export { getArtistId }
