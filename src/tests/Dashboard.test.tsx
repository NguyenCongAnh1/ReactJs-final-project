import { CartContext } from "../store/contextApi/cartContext"
import { mockedContextValue } from "./Home.test"
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard from "../components/dashboard";


jest.mock('../components/footer')

const TestComponent = () => {
    render(
        <CartContext.Provider value={mockedContextValue}>
                <Dashboard />
        </CartContext.Provider>
    )
}

describe('Test Dashboard', () => {
    beforeEach(() => {
        TestComponent();
    })


    test('should render dashboard component correctly', () => {
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    })


})