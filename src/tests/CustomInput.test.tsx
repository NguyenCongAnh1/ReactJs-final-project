import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomInput from '../components/customInput/customInput';


const defaultProps = {
    value: '',
    onChange: jest.fn(),
    placeholder: 'Enter text',
    minLength: 3,
    maxLength: 10,
    pattern: /^[a-zA-Z0-9]+$/,
    required: true,
    errPattern: 'Invalid input',
    width: '200px',
    outInput: jest.fn(),
};

describe('Test custom input', () => {

    beforeEach(() => {
        render(<CustomInput {...defaultProps} />);
    })

    test('renders CustomInput correctly', () => {
        const inputElement = screen.getByPlaceholderText('Enter text');
        expect(inputElement).toHaveStyle('width: 200px');
        expect(inputElement).toBeInTheDocument();
    });

    test('should have error message when input has 2 characters', async () => {
        const inputElement = screen.getByPlaceholderText('Enter text');
        fireEvent.change(inputElement, { target: { value: 'ab' } });
        expect(defaultProps.onChange).toHaveBeenCalledWith('ab');
        expect(defaultProps.outInput).toHaveBeenCalledWith(null);
        expect(await screen.findByText('Input must be at least 3 characters.')).toBeInTheDocument();
    })

    test('should have error message when input has 11 characters', async () => {
        const inputElement = screen.getByPlaceholderText('Enter text');
        fireEvent.change(inputElement, { target: { value: 'qwertyuiopa' } });
        expect(defaultProps.onChange).toHaveBeenCalledWith('qwertyuiopa');
        expect(defaultProps.outInput).toHaveBeenCalledWith(null);
        expect(await screen.findByText(`Input must be at most ${defaultProps.maxLength} characters.`)).toBeInTheDocument();
    })
    test('should have error message when input is blank', async () => {
        const inputElement = screen.getByPlaceholderText('Enter text');
        fireEvent.change(inputElement, { target: { value: '  ' } });
        expect(await screen.findByText(`This field is required.`)).toBeInTheDocument();
    })

    test('handles input change with invalid pattern', async () => {
        const inputElement = screen.getByPlaceholderText('Enter text');
        fireEvent.change(inputElement, { target: { value: '@invalid@' } });
        expect(defaultProps.onChange).toHaveBeenCalledWith('@invalid@');
        expect(await screen.findByText('Invalid input')).toBeInTheDocument();
    });
})
