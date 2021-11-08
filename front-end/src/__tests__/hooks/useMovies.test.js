import useMovies from "../../hooks/useMovies"
import { renderHook } from '@testing-library/react-hooks'
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

jest.retryTimes(7)

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

	await waitFor(() => result.current.filmWorldMovies.isSuccess);
	expect(result.current.filmWorldMovies).toMatchObject(matchData);
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

	await waitFor(() => result.current.cinemaWorldMovies.isSuccess);
	expect(result.current.cinemaWorldMovies).toMatchObject(matchData);
});

