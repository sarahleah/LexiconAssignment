import useMovies from "../../hooks/useMovies"
import { renderHook } from '@testing-library/react-hooks'
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient();

test('Does the useMovies Hook Return Intended Data For FilmWorld', async () => {
	const matchData = {
		data: {
			Provider: 'Film World',
			Movies: expect.any(Array)
		}
	}

	//Create a new wrapper to isloate this test from any other tests
	const wrapper = ({ children }) => (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
 
	const { result, waitFor } = renderHook(() => useMovies(), { wrapper });

	await waitFor(() => result.current.filmworldMovies.isSuccess);
	expect(result.current.filmworldMovies).toMatchObject(matchData);
});

test('Does the useMovies Hook Return Intended Data For CinemaWorld', async () => {
	const matchData = {
		data: {
			Provider: 'Cinema World',
			Movies: expect.any(Array)
		}
	}

	//Create a new wrapper to isloate this test from any other tests
	const wrapper = ({ children }) => (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
 
	const { result, waitFor } = renderHook(() => useMovies(), { wrapper });

	await waitFor(() => result.current.cinemaworldMovies.isSuccess);
	expect(result.current.cinemaworldMovies).toMatchObject(matchData);
});

