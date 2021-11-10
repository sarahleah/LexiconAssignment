import priceFormatter from '../../helpers/priceFormatter'

test('Price formats correctly', () => {
	expect(priceFormatter(2)).toBe('$2.00')
})

test('Price formats correctly with decimals', () => {
	expect(priceFormatter(2.11)).toBe('$2.11')
})

test('Price formats correctly with decimals and rounding', () => {
	expect(priceFormatter(2.117)).toBe('$2.12')
})