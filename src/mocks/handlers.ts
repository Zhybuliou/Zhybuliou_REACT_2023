import { rest } from 'msw';

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const name = req.url.searchParams.get('name');
    if (name === 'ddddddd') {
      return res(ctx.status(404));
    }
    if (name === 'Rails') {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 10,
              name: 'Alan Rails',
              status: 'Dead',
              species: 'Human',
              type: 'Superhuman (Ghost trains summoner)',
              gender: 'Male',
              origin: {
                name: 'unknown',
                url: '',
              },
              location: {
                name: "Worldender's lair",
                url: 'https://rickandmortyapi.com/api/location/4',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
              episode: ['https://rickandmortyapi.com/api/episode/25'],
              url: 'https://rickandmortyapi.com/api/character/10',
              created: '2017-11-04T20:19:09.017Z',
            },
          ],
        })
      );
    }
    return res(ctx.status(404));
  }),
];

export default handlers;
