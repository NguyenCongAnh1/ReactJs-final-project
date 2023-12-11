import React, { useState } from 'react';
import CustomInput from '../../customInput/customInput';
import './myForm.scss'
import right from '../checkoutImg/Right.png';

interface FormValues {
    name: string;
    cardNumber: string;
    exDay: string;
    cvv: string;

    // Thêm các trường khác nếu cần
}

const MyForm  = ({total}: {total:number}) => {
    const initialValues: FormValues = {
        name: '',
        cardNumber: '',
        exDay: '',
        cvv: ''
    };

    const [formValues, setFormValues] = useState<FormValues>(initialValues);
    const [hasError, setHasError] = useState(true);

    const handleInputChange = (name: string) => (value: string) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    console.log(hasError);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted with values:', formValues);
    };
    const handleCheckoutClick = () => {
        alert('Checkout clicked sucessfully');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={formValues.name} className='label-form'>Card on name</label>
            <CustomInput
                value={formValues.name}
                onChange={handleInputChange('name')}
                outInput={() =>  {setHasError(false)}}
                placeholder="Name"
                required={true}
                width={'350px'}
                data-testid="custom-input"

            />
            <label htmlFor={formValues.cardNumber} className='label-form'>Card Number</label>
            <CustomInput
                value={formValues.cardNumber}
                onChange={handleInputChange('cardNumber')}
                outInput={() =>  {setHasError(false)}}
                placeholder="1111 2222 3333 4444"
                required={true}
                width={'350px'}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <label htmlFor="name" className='label-form'>Expiration date</label>
                    <CustomInput
                        value={formValues.exDay}
                        outInput={() =>  {setHasError(false)}}
                        onChange={handleInputChange('exDay')}
                        placeholder="mm/yy"
                        required={true}
                        width={'170px'}
                    />
                </div>

                <div>
                    <label htmlFor="name" className='label-form'>CVV</label>
                    <CustomInput
                        value={formValues.cvv}
                        outInput={() =>  {setHasError(false)}}
                        onChange={handleInputChange('cvv')}
                        placeholder="123"
                        width={'170px'}
                    />
                </div>
            </div>
            <div className='border-form'></div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className='subtext-form'>Subtotal</span>
                <span className='subtext-form'>${total.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className='subtext-form'>Shipping</span>
                <span className='subtext-form'>${(total*0.1).toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className='subtext-form'>Total (Tax incl.)</span>
                <span className='subtext-form'>${(total+ Number((total*0.1).toFixed(2))).toFixed(2)}</span>
            </div>
            <button className='button-form' onClick={handleCheckoutClick} disabled={hasError}>
                <span className='total-price'>${(total+ Number((total*0.1).toFixed(2))).toFixed(2)}</span>
                <div style={{alignItems: 'center'}}>
                    <span total-price>Check out </span>
                    <img src={right}/>
                </div>
            </button>
        </form>
    );
};

export default MyForm;