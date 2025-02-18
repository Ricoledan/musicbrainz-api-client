test('sample test', async () => {
  const results = {
    id: '381086ea-f511-4aba-bdf9-71c753dc5077',
    name: 'Kendrick Lamar',
    gender: 'male',
    lifespan: { born: '1987-06-17', death: null },
    country: 'US',
    aliases: ['Kendrick Lamar Duckworth', 'Kendrick Duckworth', 'K. Dot'],
    tags: [
      'pop',
      'rap',
      'hip hop',
      'pop rap',
      'west coast hip hop',
      'boom bap',
      'jazz rap',
      'conscious hip hop',
      'hardcore hip hop',
    ],
  }

  expect(results).toEqual({
    id: '381086ea-f511-4aba-bdf9-71c753dc5077',
    name: 'Kendrick Lamar',
    gender: 'male',
    lifespan: { born: '1987-06-17', death: null },
    country: 'US',
    aliases: ['Kendrick Lamar Duckworth', 'Kendrick Duckworth', 'K. Dot'],
    tags: [
      'pop',
      'rap',
      'hip hop',
      'pop rap',
      'west coast hip hop',
      'boom bap',
      'jazz rap',
      'conscious hip hop',
      'hardcore hip hop',
    ],
  })
})
