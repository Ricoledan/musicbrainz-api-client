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

export { ArtistId }
