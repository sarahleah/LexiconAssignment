import fetchMovies from '../api/fetchMovies';

jest.retryTimes(5)


describe('Test Movie Data Fetching for filmworld', () => {
  test('Api Fetching Returns Correct Data', async () => {
    const response = await fetchMovies("filmworld")
  
    const matchObject = {
      "Provider": "Film World",
    }
    expect(response).toMatchObject(matchObject)
  });
})

describe('Test Movie Data Fetching for cinemaworld', () => {
  test('Api Fetching Returns Correct Data', async () => {
    const response = await fetchMovies("cinemaworld")
  
    const matchObject = {
      "Provider": "Cinema World",
    }
    expect(response).toMatchObject(matchObject)
  });
})


