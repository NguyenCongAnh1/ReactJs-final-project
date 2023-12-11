import "./myForm.scss";
import right from "../checkoutImg/Right.png";
import { SubmitHandler, useForm } from "react-hook-form";
interface FormValues {
    name: string;
    cardNumber: string;
    exDay: string;
    cvv: string;
}

const MyForm = ({ total }: { total: number }) => {
    const { register, handleSubmit, formState } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (dataForm) => {
        console.log(dataForm);
        window.alert("Checkout success!");

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="label-form">
                Card on name
            </label>
            <div>
                <input
                    {...register('name', { required: 'Card on name is required' })}
                    placeholder="Name"
                    className="custom-input with-placeholder-style"
                    style={{ width: "100%"}}
                    id="name"
                />
                {formState.errors.name && (
                    <p className="error-message">{formState.errors.name.message}</p>
                )}
            </div>

            <label htmlFor="cardNumber" className="label-form">
                Card Number
            </label>
            <div>
                <input
                    {...register('cardNumber', {
                        required: 'Card number is required',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Please enter only numbers for Card Number',
                        },
                    })}
                    placeholder="1111 2222 3333 4444"
                    className="custom-input with-placeholder-style"
                    style={{ width: "100%" }}
                    id="cardNumber"
                />
                {formState.errors.cardNumber && (
                    <p className="error-message">{formState.errors.cardNumber.message}</p>
                )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <label htmlFor="exDay" className="label-form">
                        Expiration date
                    </label>
                    <div>
                        <input
                            {...register('exDay', { required: 'Expiration date is required' })}
                            placeholder="mm/yy"
                            className="custom-input with-placeholder-style"
                            style={{ width: "170px" }}
                            id="exDay"
                        />
                        {formState.errors.exDay && (
                            <p className="error-message">{formState.errors.exDay.message}</p>
                        )}
                    </div>

                </div>

                <div style={{ marginLeft: "10px" }}>
                    <label htmlFor="cvv" className="label-form">
                        CVV
                    </label>
                    <div>
                        <input
                            {...register('cvv', { required: 'CVV date is required' })}
                            placeholder="123"
                            className="custom-input with-placeholder-style"
                            style={{ width: "170px" }}
                            id="cvv"
                        />
                        {formState.errors.cvv && (
                            <p className="error-message">{formState.errors.cvv.message}</p>
                        )}
                    </div>

                </div>
            </div>
            <div className="border-form"></div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="subtext-form">Subtotal</span>
                <span className="subtext-form">${total.toFixed(2)}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="subtext-form">Shipping</span>
                <span className="subtext-form">${(total * 0.1).toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="subtext-form">Total (Tax incl.)</span>
                <span className="subtext-form">
                    ${(total + Number((total * 0.1).toFixed(2))).toFixed(2)}
                </span>
            </div>
            <button
                className="button-form"
                type="submit"
                // disabled={!formState.isValid}
                // style={{ cursor: !formState.isValid ? 'not-allowed' : 'pointer' }}
            >
                <span className="total-price">
                    ${(total + Number((total * 0.1).toFixed(2))).toFixed(2)}
                </span>
                <div style={{ alignItems: "center" }}>
                    <span total-price>Check out </span>
                    <img src={right} />
                </div>
            </button>
        </form>
    );
};

export default MyForm;
