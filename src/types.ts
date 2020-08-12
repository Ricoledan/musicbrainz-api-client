interface ArtistId {
  id: String
  name: String
  gender: String
  lifespan: {
    born: String
    death: String | null
  }
  country: String
  aliases: String[]
  tags: String[]
}

interface RecordingInfo {
  all_recordings: String[]
  all_albums: String[]
}

export { ArtistId, RecordingInfo }
