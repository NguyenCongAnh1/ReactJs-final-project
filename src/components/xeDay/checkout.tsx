import './checkout.scss'
import Image from 'react-bootstrap/Image';
import avata from './checkoutImg/avata.jpg'
import marterCart from './checkoutImg/Rectangle 9.png'
import visa from './checkoutImg/Rectangle 10.png'
import rupay from './checkoutImg/Rectangle 11.png'
import MyForm from './myForm/myForm';

const CheckOut = ({ total }: { total: number }) => {

    return <>
        <div className="checkout-block">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className='title'>Card Details</span>
                <Image src={avata} alt="Avatar" className='img-avatar' />
            </div>
            <p className='label'>Card type</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <Image src={marterCart} alt="Avatar" />
                <Image src={visa} alt="Avatar" />
                <Image src={rupay} alt="Avatar" />
                <div className='see-all'>
                    <div className='text'>See all</div>
                </div>
            </div>
            <div data-testid="my-form-block" >
                <MyForm total={total} />
            </div>
        </div>
    </>



};

export default CheckOut;