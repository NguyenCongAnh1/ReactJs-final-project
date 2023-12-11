import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import MyForm from '../components/xeDay/myForm/myForm';
import userEvent from '@testing-library/user-event';

describe('Test my form', () => {

    beforeEach(() => {
        render(<MyForm total={100} />)
    });

    test('should render my form correctly', () => {
        expect(screen.getByText(/Card on name/i)).toBeInTheDocument();
        expect(screen.getByText(/Card Number/i)).toBeInTheDocument();
        expect(screen.getByText(/Expiration date/i)).toBeInTheDocument();
        expect(screen.getByText(/CVV/i)).toBeInTheDocument();
        expect(screen.getByText(/Subtotal/i)).toBeInTheDocument();
        expect(screen.getByText(/Shipping/i)).toBeInTheDocument();
        expect(screen.getByText(/Check out/i)).toBeInTheDocument();
        expect(screen.getByText(/100.00/i)).toBeInTheDocument();
        expect(screen.getByText("$10.00")).toBeInTheDocument();
        expect(screen.getAllByText("$110.00")).toHaveLength(2);


        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("1111 2222 3333 4444")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("mm/yy")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("123")).toBeInTheDocument();

    })


    test("should checkout successfully when inputs are valid", () => {
        userEvent.type(screen.getByPlaceholderText("Name"), 'John Doe');
        userEvent.type(screen.getByLabelText(/card number/i), '1234567890123456');
        userEvent.type(screen.getByLabelText(/expiration date/i), '12/23');
        userEvent.type(screen.getByLabelText(/cvv/i), '123');

        // Submit the form
        userEvent.click(screen.getByText(/check out/i));

        // Wait for the alert to appear
    
    });

})
