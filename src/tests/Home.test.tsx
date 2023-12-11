import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '../components/home';
import { CartContext, CartContextType } from '../store/contextApi/cartContext';
import { BrowserRouter } from 'react-router-dom';


export const mockedContextValue: CartContextType = {
    cart: [
        {
            movieId: 1,
            name: "Shawshank Redemption",
            type: "Drama",
            ratings: 6.5,
            name_of_stars: ["Tim Robbins", "Morgan Freeman"],
            image: "the shawshank.jpg",
            time: "105",
            release_date: "1994/09/23",
            director: "Frank Darabont",
            producer: "Niki Marvin",
            movieContent: "The Shawshank Redemption is a gripping drama that follows the story of Andy Dufresne, a banker sentenced to life in Shawshank State Penitentiary for a crime he didn't commit. As he navigates the harsh realities of prison life, Andy forms an unlikely friendship with fellow inmate Red. Together, they find solace and eventual redemption through acts of common decency, hope, and resilience.",
            price: "10.99",
            quantity: 0
        },
        {
            movieId: 2,
            name: "The Godfather",
            type: "Crime",
            ratings: 9.2,
            image: "the godfather.jpg",
            name_of_stars: ["Marlon Brando", "Al Pacino"],
            time: "100",
            release_date: "1972/03/24",
            director: "Francis Ford Coppola",
            producer: "Albert S. Ruddy",
            movieContent: "The Godfather is an iconic crime film that revolves around the powerful Italian-American crime family of Don Vito Corleone. When the patriarch seeks to transition control of his clandestine empire to his reluctant son, Michael, the film delves into themes of power, family, and the consequences of a life of crime.",
            price: "10.99",
            quantity: 0
        },
    ],
    increaseQuantity: jest.fn(),
    decreaseQuantity: jest.fn(),
    removeProductFromCart: jest.fn(),
    search: jest.fn(),
    searchedCart: [
        {
            movieId: 1,
            name: "Shawshank Redemption",
            type: "Drama",
            ratings: 6.5,
            name_of_stars: ["Tim Robbins", "Morgan Freeman"],
            image: "the shawshank.jpg",
            time: "105",
            release_date: "1994/09/23",
            director: "Frank Darabont",
            producer: "Niki Marvin",
            movieContent: "The Shawshank Redemption is a gripping drama that follows the story of Andy Dufresne, a banker sentenced to life in Shawshank State Penitentiary for a crime he didn't commit. As he navigates the harsh realities of prison life, Andy forms an unlikely friendship with fellow inmate Red. Together, they find solace and eventual redemption through acts of common decency, hope, and resilience.",
            price: "10.99",
            quantity: 0
        },
        {
            movieId: 2,
            name: "The Godfather",
            type: "Crime",
            ratings: 9.2,
            image: "the godfather.jpg",
            name_of_stars: ["Marlon Brando", "Al Pacino"],
            time: "100",
            release_date: "1972/03/24",
            director: "Francis Ford Coppola",
            producer: "Albert S. Ruddy",
            movieContent: "The Godfather is an iconic crime film that revolves around the powerful Italian-American crime family of Don Vito Corleone. When the patriarch seeks to transition control of his clandestine empire to his reluctant son, Michael, the film delves into themes of power, family, and the consequences of a life of crime.",
            price: "10.99",
            quantity: 0
        },
    ],
};

const TestComponent = () => {
    return (
        <CartContext.Provider value={mockedContextValue}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </CartContext.Provider>
    )
}

describe('Home test', () => {
    beforeEach(() => {
        render(<TestComponent />);
    })
    test('should have DarkVariantExample', () => {
        const darkVariantExample = screen.getByTestId('DarkVariantExample');
        expect(darkVariantExample).toBeInTheDocument();
    });

    test('should have tow cart in home', () => {
        const carts = screen.getAllByTestId('mocked-cart-component')
        expect(carts.length).toEqual(mockedContextValue.searchedCart.length);

    })
});
