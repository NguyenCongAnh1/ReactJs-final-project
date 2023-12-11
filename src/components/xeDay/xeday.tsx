import { useContext, useEffect, useState } from 'react';
import CheckOut from './checkout';
import { Item } from './item';
import './xeday.scss'
import { CartContext } from '../../store/contextApi/cartContext';

const XeDay = () => {
    const [total, setTotal] = useState(0);
    const cartContextInXeDay = useContext(CartContext);

    const calculateTotal = () => {
        if (cartContextInXeDay?.cart) {
            setTotal(cartContextInXeDay?.cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0));
        }
    };

    useEffect(() => { calculateTotal() }, [cartContextInXeDay?.cart])

    return (
        <div className='xe-day'>
            <div className='item-block'>
                <span className='cart-title'>Cart</span>
                <div className='border-div'></div>
                <div className='span-block'>
                    <h3 className='span-title'>Shopping cart</h3>
                    <span className='span-text'>You have {cartContextInXeDay?.cart.length} item in your cart</span>
                </div>
                <div className='items-block'>
                    {cartContextInXeDay?.cart.map((movie, i) => (
                        <div key={i} data-testid="item-block">
                            <Item {...{ movie }} />
                        </div>
                    )
                    )}
                </div>
            </div>

            <div data-testid="CheckOut">
                <CheckOut total={total} />
            </div>


        </div>
    )
};

export default XeDay;
