# MusicBrainz API Client
🎵 JavaScript Client for accessing musicbrainz api

MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.

[MusicBrainz API Documentation](https://musicbrainz.org/doc/MusicBrainz_API)

## Basic Artist Info
```
getArtistInfo('Kendrick Lamar')


Request: GET /artist
Response:
{
  id: '381086ea-f511-4aba-bdf9-71c753dc5077',
  name: 'Kendrick Lamar',
  gender: 'male',
  lifespan: { born: '1987-06-17', death: null },
  country: 'US',
  aliases: [ 'Kendrick Lamar Duckworth', 'Kendrick Duckworth', 'K. Dot' ],
  tags: [
    'pop',
    'rap',
    'hip hop',
    'pop rap',
    'west coast hip hop',
    'boom bap',
    'jazz rap',
    'conscious hip hop',
    'hardcore hip hop'
  ]
}
```

## Recording Info
```
getArtistRecordingDetails('381086ea-f511-4aba-bdf9-71c753dc5077')

Request: GET /artist/id
Response:
{
  all_recordings: [
    '1 Train',
    '2Nite',
    '3 Minutes of Watts',
    '21',
    '100',
    '100 Favors',
    'A Milli',
    'A Song 4 Buffy (Freestyle)',
    'A.D.H.D',
    'A.D.H.D.',
    'A1 Everything',
    "Ab-Soul's Outro",
    'Acceptance',
    'Act Tuff',
    'Again and Again',
    'Alien Girl (Today with Her)',
    'All Day (Ft. Kanye West)',
    'All Day (remix)'
  ],
  all_albums: [
    'Section.80',
    'good kid, m.A.A.d city',
    'Welcome to Compton',
    'To Pimp a Butterfly',
    'DAMN.',
    'Riding for compton',
    'Finessed in Red 3',
    'Finessed in Red IV',
    'untitled unmastered.',
    'Hub City Threat: Minor of the Year',
    'Training Day',
    "No Sleep 'Til NYC",
    'C4',
    'Overly Dedicated',
    'Compton State of Mind',
    'Ever Heard of Section 80',
    'The New West Mixtape',
    'The Recipe',
    'Good Kid Done Good',
    'Found Myself',
    'Kendrication',
    'Welcome to Class 2014',
    'King of New York',
    'Straight Outta Compton',
    'The Takeover'
  ]
}
```