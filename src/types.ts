interface ArtistId {
  id: string
  name: string
  gender: string
  lifespan: {
    born: string
    death: string | null
  }
  country: string
  aliases: string[]
  tags: string[]
}

interface RecordingInfo {
  all_recordings: string[]
  all_albums: string[]
}

export { ArtistId, RecordingInfo }
