import { render, screen, within } from '@testing-library/react'
import Card from '../../components/card/Card'

describe('Cheapest Badge', () => {
	test('Cheapest badge displaying on row with lowest price for first collumn', () => {
    render(<Card
            movieData={{
							title: "movie1",
							poster: "poster1",
							actors: "actor1",
							prices: [
								{
									name: 'Film World',
									price: 4
								} ,
								{
									name: 'Cinema World',
									price: 5
								} 
							]
						}}/>)
    expect(screen.getByTestId("cin1Cheap")).toBeInTheDocument();
})

	test('Cheapest badge not displaying on row with highest price for first collumn', () => {
			render(<Card
							movieData={{
								title: "movie1",
								poster: "poster1",
								actors: "actor1",
								prices: [
									{
										name: 'Film World',
										price: 4
									} ,
									{
										name: 'Cinema World',
										price: 5
									} 
								]
							}}/>)
			expect(screen.queryByTestId("cin2Cheap")).not.toBeInTheDocument();
	})

	test('Cheapest badge displaying on row with lowest price for second collumn', () => {
			render(<Card
								movieData={{
									title: "movie1",
									poster: "poster1",
									actors: "actor1",
									prices: [
										{
											name: 'Film World',
											price: 5
										} ,
										{
											name: 'Cinema World',
											price: 4
										} 
									]
								}}/>)
			expect(screen.getByTestId("cin2Cheap")).toBeInTheDocument();
	})

	test('Cheapest badge not displaying on row with lowest price for second collumn', () => {
			render(<Card
								movieData={{
									title: "movie1",
									poster: "poster1",
									actors: "actor1",
									prices: [
										{
											name: 'Film World',
											price: 5
										} ,
										{
											name: 'Cinema World',
											price: 4
										} 
									]
								}}/>)
			expect(screen.queryByTestId("cin1Cheap")).not.toBeInTheDocument();
	})
})

describe('Title Displaying Correctly', () => {
	test('Correct Title Displays', () => {
		render(
			<Card
				movieData={{
					title: "movie1",
					poster: "poster1",
					actors: "actor1",
					prices: [
						{
							name: 'Film World',
							price: 4
						} ,
						{
							name: 'Cinema World',
							price: 5
						} 
					]
				}}/>
		)
		const { getByText } = within(screen.getByTestId('cardTitle'))
		expect(getByText("movie1")).toBeInTheDocument()
	})
})

