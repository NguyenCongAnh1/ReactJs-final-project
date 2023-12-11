import { Movie } from "../components/card/card"
import { Item } from "../components/xeDay/item"
import { CartContext } from "../store/contextApi/cartContext"
import { mockedContextValue } from "./Home.test"
import '@testing-library/jest-dom';
import {fireEvent, render, screen } from '@testing-library/react';

const mockMovie: Movie = {
    movieId: 1,
    name: 'Test Movie',
    type: 'Action',
    image: 'test-movie.jpg',
    ratings: 8.5,
    name_of_stars: ['Actor 1', 'Actor 2'],
    release_date: '2022-01-01',
    price: '9.99',
    quantity: 1,
    director: 'Director Name',
    producer: 'Producer Name',
    time: '120',
    movieContent: 'Lorem ipsum dolor sit amet.',
}
const TestComponent = () => {
    render (
        <CartContext.Provider value={mockedContextValue}>
            <Item movie={mockMovie} />
        </CartContext.Provider>
    )
}
describe('Test Item Component', () => {
    beforeEach(() => {
        TestComponent();
    })
    test('should render Item component correctly', () => {
        expect(screen.getByText('Test Movie')).toBeInTheDocument();
        expect(screen.getByText('Price: 9.99')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('$9.99')).toBeInTheDocument();
        expect(screen.getByTestId('up-button')).toBeInTheDocument();
        expect(screen.getByTestId('down-button')).toBeInTheDocument();
        expect(screen.getByTestId('remove-button')).toBeInTheDocument();

    })
    test('should call increaseQuantity when up button is clicked', () => {
        fireEvent.click(screen.getByTestId('up-button'));
        expect (mockedContextValue.increaseQuantity).toHaveBeenCalledWith(mockMovie.movieId);

    })
    test('should call decreaseQuantity when down button is clicked', () => {
        fireEvent.click(screen.getByTestId('down-button'));
        expect (mockedContextValue.decreaseQuantity).toHaveBeenCalledWith(mockMovie.movieId);

    })
    test('should call decreaseQuantity when remove button is clicked', () => {
        fireEvent.click(screen.getByTestId('remove-button'));
        expect(mockedContextValue.removeProductFromCart).toHaveBeenCalledWith(mockMovie.movieId);

    })

})