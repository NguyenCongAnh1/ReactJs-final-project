import Cart, { Movie } from "../components/card/card";
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { CartContext } from "../store/contextApi/cartContext";
import { mockedContextValue } from "./Home.test";
import { BrowserRouter} from "react-router-dom";

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


describe('Test Cart', () => {
    test('renders Cart component with movie details', () => {


        const TestComponent = () => {
            return (
                <CartContext.Provider value={mockedContextValue}>
                    <BrowserRouter>
                        <Cart movie={mockMovie} />
                    </BrowserRouter>
                </CartContext.Provider>
            )
        }
        // "/Test Movie/i" : Tìm kiếm không phân biệt chữ hoa và chữ thường 
        // "/" "/" bắt đầu và kết thúc chuỗi  
        render(<TestComponent />);
        const movieName = screen.getByText(/Test Movie/i);
        const movieType = screen.getByText(/Action/i);
        const ratings = screen.getByText(/8.5/i);
        const stars = screen.getByText(/Actor 1, Actor 2/i);
        const releaseDate = screen.getByText(/2022-01-01/i);
        const image = screen.getByAltText(/Test Movie/i);

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '../../../crud-json/uploads/test-movie.jpg');
        expect(movieName).toBeInTheDocument();
        expect(movieType).toBeInTheDocument();
        expect(ratings).toBeInTheDocument();
        expect(stars).toBeInTheDocument();
        expect(releaseDate).toBeInTheDocument();
    });

    test('should navigate to movie details page when clicking on card image', () => {
        const TestComponent = () => {
            return (
                <CartContext.Provider value={mockedContextValue}>
                    <BrowserRouter>
                        <Cart movie={mockMovie} />
                    </BrowserRouter>
                </CartContext.Provider>
            )
        }
        render(<TestComponent />);
        const image = screen.getByAltText(/Test Movie/i);
        fireEvent.click(image);
        const expectedPath = `http://localhost/movie/${mockMovie.movieId}`;
        expect(window.location.href).toBe(expectedPath);

    });

})
