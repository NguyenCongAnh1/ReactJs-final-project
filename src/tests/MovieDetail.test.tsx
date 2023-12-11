// import { Provider } from "react-redux";
// import store from "../store/store";
// import { BrowserRouter} from "react-router-dom";
// import MovieDetail from "../components/detail/movieDetail";
// import '@testing-library/jest-dom'
// import { render, screen } from '@testing-library/react';

// jest.mock('react-player', () => ({ url }: { url: string }) => <div>{url}</div>);


// // const mockMovie =
// // {
// //     movieId: 1,
// //     name: "Shawshank Redemption",
// //     type: "Drama",
// //     ratings: 6.5,
// //     name_of_stars: ["Tim Robbins", "Morgan Freeman"],
// //     image: "the shawshank.jpg",
// //     time: "105",
// //     release_date: "1994/09/23",
// //     director: "Frank Darabont",
// //     producer: "Niki Marvin",
// //     movieContent: "The Shawshank Redemption is a gripping drama that follows the story of Andy Dufresne, a banker sentenced to life in Shawshank State Penitentiary for a crime he didn't commit. As he navigates the harsh realities of prison life, Andy forms an unlikely friendship with fellow inmate Red. Together, they find solace and eventual redemption through acts of common decency, hope, and resilience.",
// //     price: "10.99",
// //     quantity: 0
// // }



// describe('Tess MovieDetail', () => {
//     test("should have the correct content", () => {
//         render(
//             <Provider store={store}>
//                 <BrowserRouter>
//                     <MovieDetail />
//                 </BrowserRouter>
//             </Provider>
//         );

//         const DetailItem = screen.queryByTestId('DetailItem');
//         // const movieType = screen.getByText(/Action/i);
//         // const ratings = screen.getByText(/8.5/i);
//         // const stars = screen.getByText(/Actor 1, Actor 2/i);
//         // const releaseDate = screen.getByText(/2022-01-01/i);
//         // const image = screen.getByAltText(/Test Movie/i);
//         console.log(screen.debug(null as any, Infinity));

//         expect(DetailItem).toBeInTheDocument();

//         // expect(image).toBeInTheDocument();
//         // expect(image).toHaveAttribute('src', '../../../crud-json/uploads/test-movie.jpg');
//         // expect(movieType).toBeInTheDocument();
//         // expect(ratings).toBeInTheDocument();
//         // expect(stars).toBeInTheDocument();
//         // expect(releaseDate).toBeInTheDocument();
//     })




// });


import {render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import MovieDetail from '../components/detail/movieDetail';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';


const mockStore = configureStore([]);


jest.mock('react-router', () => ({
    useParams: jest.fn().mockReturnValue({ id: '1' }),
}));
jest.mock('../components/detail/comment');
jest.mock('../components/detail/detailitem');


describe('MovieDetail', () => {
    beforeEach(() => {
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

        render(
            <Provider store={store}>
                <MovieDetail />
            </Provider>
        );

    })

    test('renders movie details correctly', () => {

        // Assert that the movie name is rendered correctly
        const imgElement = screen.getByAltText('Shawshank Redemption');
        // Assert that the img element is in the document
        expect(imgElement).toBeInTheDocument();

        const detailItemElement = screen.getByTestId('DetailItem');
        expect(detailItemElement).toBeInTheDocument()

        const ratingElement = screen.getByTestId('rating-block');
        expect(ratingElement).toBeInTheDocument()
    });

    test('should render reactPlayer and overlay button correctly', async () => {
        const buttonPlay = await screen.findByRole('button');
        await userEvent.click(buttonPlay);
        try {
            await screen.findByRole('button');
        } catch (error: any) {
            expect(error.message).toContain(`Unable to find role="button"`);
        }
        
    })
});