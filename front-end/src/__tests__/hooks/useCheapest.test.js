import { renderHook } from '@testing-library/react-hooks'
import useCheapest from '../../hooks/useCheapest'

test('Hook should correctly return the cinema with the cheapest option', () => {
	const { result } = renderHook(() => useCheapest(
	{
		name: "filmworld",
		price: 10
	},
	{
		name: "cinemaworld",
		price: 8
	}
	)) 

	expect(result.current.name).toEqual("cinemaworld")
})