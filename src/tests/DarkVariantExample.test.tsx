
import {render, screen} from '@testing-library/react';
import DarkVariantExample from '../components/darkVariant';
import '@testing-library/jest-dom' 

describe('DarkVariantExample component', () => {

  test('renders carousel items', () => {
    // Arrange & Act
    render(<DarkVariantExample />);
    // Assert
    const firstSlide = screen.getByAltText('First slide');
    const secondSlide = screen.getByAltText('Second slide');
    const thirdSlide = screen.getByAltText('Third slide');
    expect(firstSlide).toBeInTheDocument();
    expect(secondSlide).toBeInTheDocument();
    expect(thirdSlide).toBeInTheDocument();
  });

  test('renders carousel captions', () => {
    render(<DarkVariantExample />);
    // Assert
    const firstCaption = screen.getByText('First slide label');
    const secondCaption = screen.getByText('Second slide label');
    const thirdCaption = screen.getByText('Third slide label');

    expect(firstCaption).toBeInTheDocument();
    expect(secondCaption).toBeInTheDocument();
    expect(thirdCaption).toBeInTheDocument();
  });

});
