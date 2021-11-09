export default function movieCombiner(cinemas){
	return cinemas[0].Movies.map((elem, i) => {
		let movieObject = {
			id: elem.ID,
			title: elem.Title,
			poster: elem.Poster,
			actors: elem.Actors,
			prices: []
		}
		cinemas.forEach((cinema) => {
			movieObject.prices.push({
				name: cinema.Provider,
				price: cinema.Movies[i].Price
			})
		})
		return movieObject
	})
}