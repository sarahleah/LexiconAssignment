import {formatMoviesURL} from '../helpers/formatURL'


test('Does the URL formatter Work with filmworld', () => {
	expect(formatMoviesURL('filmworld')).toEqual('https://challenge.lexicondigital.com.au/api/v2/filmworld/movies')
});

test('Does the URL formatter Work with cinemaworld', () => {
	expect(formatMoviesURL('cinemaworld')).toEqual('https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies')
});