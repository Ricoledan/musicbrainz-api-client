import axios from 'axios'
import { ArtistId, RecordingInfo } from './types'

const HTTPClient = axios.create({
  method: 'GET',
  baseURL: 'http://musicbrainz.org/ws/2/',
})

const getArtistInfo = (name: string) => {
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
    let i: number
    const arr = []
    for (i = 0; i < response.length; i++) {
      arr.push(response[i].name)
    }
    return arr
  }
}

const getArtistRecordingDetails = (id: string) => {
  HTTPClient({
    url: `/artist/${id}?inc=works%20releases%20release-groups%20recordings`,
    params: {
      fmt: 'json',
    },
  })
    .then(
      (response: any): RecordingInfo => ({
        all_recordings: formatArray(response.data.recordings),
        all_albums: formatArray(response.data['release-groups']),
      })
    )
    .catch((error: any) => {
      return error.response
    })

  function formatArray(response: any) {
    let i: number
    const arr: any = []
    for (i = 0; i < response.length; i++) {
      if (!arr.includes(response[i].title)) {
        arr.push(response[i].title)
      }
    }
    return arr
  }
}

export { getArtistInfo, getArtistRecordingDetails }
