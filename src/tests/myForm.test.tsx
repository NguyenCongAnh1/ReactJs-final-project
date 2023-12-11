import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MyForm from '../components/xeDay/myForm/myForm';

beforeAll(() => {
    render(<MyForm total={100} />)
});

describe('Test my form', () => {
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
})