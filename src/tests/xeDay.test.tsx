import {render, screen} from '@testing-library/react';

import XeDay from "../components/xeDay/xeday"
import { CartContext } from "../store/contextApi/cartContext"
import { mockedContextValue } from "./Home.test"

jest.mock('../components/xeDay/item')
jest.mock('../components/xeDay/checkout')

const TestComponent = () => {
    render(
        <CartContext.Provider value={mockedContextValue}>
            <XeDay />
        </CartContext.Provider>
    )
}

describe('Tesst XeDay', () => {

    beforeEach(() => {
        TestComponent();
    })

    test('should render xeDay content correctly', () => {
        expect(screen.getByTestId("CheckOut")).toBeInTheDocument();
        expect(screen.getAllByTestId("item-block").length).toEqual(mockedContextValue.cart.length);
    })

})