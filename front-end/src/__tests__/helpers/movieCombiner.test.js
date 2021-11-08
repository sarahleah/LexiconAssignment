import movieCombiner from '../../helpers/movieCombiner'

test('Should correctly combine movies of different providers', () => {
	const mockData = [
		{
			Provider: "Cinema World",
			Movies: [
				{
					Title: "movie1",
					Poster: 'poster1',
					Actors: 'actor1', 
					Price: 4
				},
				{
					Title: "movie2",
					Poster: 'poster2',
					Actors: 'actor2', 
					Price: 5
				},
			]
		},
		{
			Provider: "Film World",
			Movies: [
				{
					Title: "movie1",
					Poster: 'poster1',
					Actors: 'actor1', 
					Price: 5
				},
				{
					Title: "movie2",
					Poster: 'poster2',
					Actors: 'actor2', 
					Price: 6
				},
			]
		}
	]

	const matchArray = [
		{
			title: "movie1",
			poster: "poster1",
			actors: "actor1",
			prices: [4, 5]
		},
		{
			title: "movie2",
			poster: "poster2",
			actors: "actor2",
			prices: [5, 6]
		}
	]
	expect(movieCombiner(mockData)).toEqual(matchArray)
});