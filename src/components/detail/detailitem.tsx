import { Movie } from "../card/card";
import Image from 'react-bootstrap/Image';
import './detailItem.scss'
import { IoMdTime } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";
import ButtonContent from "./buttonContent";
import CommentPanel from "./comment";
import { useContext } from "react";
import { CartContext } from "../../store/contextApi/cartContext";

const DetailItem = ({ movie }: { movie: Movie }) => {
    const cartContextInDetail = useContext(CartContext);
    const handelClick = (movieId: number)=>{
        alert("Item is added in cart")
        cartContextInDetail?.increaseQuantity(movieId);
    }   
    return (
        <>
            <div className="detail-item">
                <Image className="img" src={`../../../crud-json/uploads/${movie.image}`} alt={movie.name} />
                <div className="text">
                    <h2 style={{ fontWeight: '700', fontSize: '24px' }}>{movie.name}</h2>
                    <div className="icon-text">
                        <IoMdTime style={{ color: 'orange', fontSize: '20px' }} />
                        <span className="p-text">{movie.time}  minute</span>
                        <MdCalendarToday style={{ color: 'orange', marginLeft: '10px', fontSize: '20px' }} />
                        <span className="p-text">{movie.release_date}</span>

                    </div>
                    <p className="mt-6 mb-6 fz-14">Country: Mỹ</p>
                    <p className="mt-6 mb-6 fz-14">Producer: {movie.producer}</p>
                    <p className="mt-6 mb-6 fz-14">Director: {movie.director}</p>
                    <div className="mt-6 mb-6 fz-14" data-testid="type-of-movie">Type: {<ButtonContent content={movie.type}/>}</div>
                    <div className="mt-6 mb-6 fz-14" style={{ display: 'flex', alignItems: 'center' }} data-testid="type-of-actors">Actors:
                        <div style={{ display: 'flex' }}>
                            {movie.name_of_stars.map((item, i) => (
                                <div key={i} style={{ marginLeft: '4px' }}>
                                    {<ButtonContent content={item} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Image className="img" src={`../../../src/assets/ticket.png`} data-testid="add-to-card" onClick={() => handelClick(movie.movieId)}/>
                </div>
            </div>
            <div className="movie-content">
                <h6 className="title">Movie Content</h6>
                <p>{movie.movieContent}</p>
                <h3 style={{ fontSize: '20px', fontWeight: '700' }}>Comment</h3>
                <CommentPanel />

            </div>

        </>

    )

}

export default DetailItem;