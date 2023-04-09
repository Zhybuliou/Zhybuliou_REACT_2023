import { describe, test } from 'vitest';
import { unmountComponentAtNode } from 'react-dom';
import server from '../mocks/server';
import apiResult from '../service/api';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement('div') as HTMLDivElement;
  document.body.appendChild(container);
  server.listen();
});

afterEach(() => {
  unmountComponentAtNode(container as Element);
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
  server.resetHandlers();
  server.close();
});

const mockPerson = [
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
];

describe('response function', () => {
  test('getDataFromServerSearch should return object', async () => {
    const persons = await apiResult('https://rickandmortyapi.com/api/character/?', 'Rails');
    expect(persons.results).toStrictEqual(mockPerson);
  });
  test('getDataFromServerSearch should return object', async () => {
    const persons = await apiResult('https://rickandmortyapi.com/api/character/?', 'ddddddd');
    expect(persons.error).toStrictEqual('There is nothing here');
  });
});
