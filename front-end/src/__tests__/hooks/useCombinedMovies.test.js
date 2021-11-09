import useCombinedMovies from '../../hooks/useCombinedMovies'
import { renderHook } from '@testing-library/react-hooks'
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query'

jest.retryTimes(7)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

test('Combined Movies Hook Combines Movies', async () => {
	const wrapper = ({ children }) => (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
	
	const matchObject = {
		isSuccess: true,
		isError: false,
		isLoading: false,
		data: expect.arrayContaining([{
			id: expect.any(String),
			title: expect.any(String),
			poster: expect.any(String),
			actors: expect.any(String),
			prices: expect.arrayContaining([{
				name: expect.any(String),
				price: expect.any(Number)
			}])
		}])
	}

	const { result, waitFor } = renderHook(() => useCombinedMovies(), { wrapper });

	await waitFor(() => result.current.isSuccess);
	expect(result.current).toMatchObject(matchObject)
})