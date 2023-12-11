import { CartProvider } from "../../store/contextApi/cartContext";
import { screen, render } from '@testing-library/react';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'

const mockStore = configureStore([]);
const movie = {
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
    quantity: 0,
    trailer: "The Shawshank Redemption _ Trailer.mp4",
};
const initialState = {
    question: [movie],
};
const store = mockStore(initialState);


describe('Test CartContextAPI', () => {
    test('increaseQuantity', () => {
        render(
            <Provider store={store}>
                <CartProvider>
                    <div data-testid="child">
                        <>
                            {({ increaseQuantity }) => {
                                // Use increaseQuantity function
                                act(() => increaseQuantity(1));
                            }}
                        </>
                    </div>
                </CartProvider>
            </Provider>
        );

        const child = screen.getByTestId('child');
        expect(child).toBeInTheDocument();

        const cartProvider = screen.getByTestId('cart-provider');
        console.log(cartProvider);

    })

});


