export default function movieCombiner(cinemas){
	return cinemas[0].Movies.map((elem, i) => {
		let movieObject = {
			title: elem.Title,
			poster: elem.Poster,
			actors: elem.Actors,
			prices: []
		}
		cinemas.forEach((cinema) => {
			movieObject.prices.push(cinema.Movies[i].Price)
		})
		return movieObject
	})
}