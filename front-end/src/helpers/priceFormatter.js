export default function priceFormatter(price){
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'AUD',
	});

	return formatter
		.format(price)
		.substring(1)
}