import DetailItem from "../components/detail/detailitem"
import { CartContext} from "../store/contextApi/cartContext"
import { fireEvent, render, screen } from '@testing-library/react';
import { mockedContextValue } from "./Home.test";

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
    quantity: 0
}


jest.mock('../components/detail/comment')
jest.mock('../components/detail/buttonContent')

const TestComponent = () => {
    render(
        <CartContext.Provider value={mockedContextValue}>
            <DetailItem movie={movie} />
        </CartContext.Provider>
    )
}


describe('Test DetailItem', () => {
    beforeEach(() => {
        TestComponent();
    })

    test('should render DetailItem correctly', async () => {
        const image = screen.getByAltText(/Shawshank Redemption/i)
        expect(screen.getByText(movie.name)).toBeInTheDocument();
        expect(screen.getByText(`Country: Mỹ`)).toBeInTheDocument();
        expect(screen.getByText(`Producer: ${movie.producer}`)).toBeInTheDocument();
        expect(screen.getByText(`Director: ${movie.director}`)).toBeInTheDocument();
        expect(screen.getByTestId('type-of-movie')).toBeInTheDocument();
        expect(screen.getByTestId('type-of-actors')).toBeInTheDocument();

        expect(image).toHaveClass("img");
    })
    test('should call increaseQuantity when click add to cart button', () => {
        const addCartButton = screen.getByTestId('add-to-card');
        expect(addCartButton).toBeInTheDocument();
        fireEvent.click(addCartButton);
        expect(mockedContextValue.increaseQuantity).toHaveBeenCalledWith(movie.movieId);
    });

})