import '@testing-library/jest-dom';
import {render, screen } from '@testing-library/react';
import CheckOut from '../components/xeDay/checkout';


jest.mock('../components/xeDay/myForm/myForm');



describe('Test Checkout Component', () => {
    beforeAll(() => {
        render(<CheckOut total={100} />);
    })

    test('should render checkout component correctly' , () => {
        expect(screen.getByText(/See all/i)).toBeInTheDocument();
        expect(screen.getAllByAltText('Avatar').length).toEqual(4);
        expect(screen.getByTestId('my-form-block')).toBeInTheDocument();

    });
})


