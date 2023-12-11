import './home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from './darkVariant';
import Cart from './card/card';
import { useContext } from 'react';
import { CartContext } from '../store/contextApi/cartContext';

const Home = () => {
    const contextInHome = useContext(CartContext);
    return (
        <>
            <div className='home-body'>
                <DarkVariantExample />
                <div className='cart-block'>
                    {contextInHome?.searchedCart.map((movie, i) => (
                        <div key={i} data-testid="mocked-cart-component">
                            <Cart movie={movie} />
                        </div>
                    ))}
                    {contextInHome?.searchedCart.length === 0 && (
                        <p style={{ color: 'red' }}>No movies found</p>
                    )}
                </div>
            </div>
        </>
    );
}
export default Home;

