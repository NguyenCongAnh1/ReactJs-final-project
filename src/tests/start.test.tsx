
import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';
import RatingComponent from '../components/startRendering/start';


// const cases =[8, 8.5]

describe('Test Start', () => {
    test('should render the correct number of stars according to rating (8)', () => {
        render(<RatingComponent rating={8}/>)
        const starElements = screen.getAllByTestId('star');
        const stars = starElements[0].querySelectorAll('.fa-star');
        expect(stars).toHaveLength(8); // Giả sử rating có 5 sao
    })


    test('should render the correct number of stars according to rating (8.5)', () => {
        render(<RatingComponent rating={8.5}/>)
        const starElements = screen.getAllByTestId('star');
        const stars = starElements[0].querySelectorAll('.fa-star');
        expect(stars).toHaveLength(8); // Giả sử rating có 5 sao

        const halfStars = starElements[0].querySelectorAll('[data-icon="star-half-stroke"]');
        expect(halfStars).toHaveLength(1); 
    })
    
})
