import { useContext,useState } from "react";
import "./item.scss";
import Image from 'react-bootstrap/Image';
import { Movie } from "../card/card";
import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../../store/contextApi/cartContext";


export const Item = ({movie}: {movie: Movie}) => {

  const [cart] = useState<Movie>(movie);
  const cartContextInItem = useContext(CartContext)

  return (
    <table className="box table-no-border">
      <colgroup>
        <col style={{ width: '15%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '5%' }} />
      </colgroup>
      <tbody>
        <tr className="rectangle">
          <td >
            <Image src={`../../../crud-json/uploads/${cart.image}`} className="image" />
          </td>
          <td >
            <div className="text-block">
              <span style={{ fontSize: '18px', fontWeight: '500', height: '27px' }}>{cart.name}</span>
              <p className="sub-text mb-0 mtop-3">Price: {cart.price}</p>
            </div>
          </td>
          <td >
            <span className="movie-quantity">{cart.quantity}</span>
          </td>
          <td >
            <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto 6px' }}>
              <button onClick={() => cartContextInItem?.increaseQuantity(cart.movieId)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} data-testid= "up-button">
                <BsCaretUpFill size={20} />
              </button>
              <button onClick={() => cartContextInItem?.decreaseQuantity(cart.movieId)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} data-testid= "down-button">
                <BsCaretDownFill size={20} />
              </button>
            </div>
          </td>
          <td >
            <span className="all-price">${(Number(cart.price) * cart.quantity).toFixed(2)}</span>
          </td>
          <td>
            <button data-testid= "remove-button" onClick={() => cartContextInItem?.removeProductFromCart(cart.movieId)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', marginLeft: '-32px' }}>
              <FaRegTrashAlt size={20} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
