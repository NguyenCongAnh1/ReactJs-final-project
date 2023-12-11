import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import RatingComponent from '../startRendering/start';
import ReactPlayer from 'react-player';
import { Button } from 'react-bootstrap';
import './movieDetail.scss'
import DetailItem from './detailitem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion } from '../../store/actions';

const MovieDetail: React.FC = () => {
    // Lấy thông tin chi tiết của bộ phim dựa trên id
    const { id } = useParams(); // Lấy id từ URL
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.question);
    useEffect(() => {
        dispatch(fetchQuestion());
        setIsVideoPlaying(false);
    }, []);
    if (!data) { return }

    // const contextApiInMovieDetsetIsVideoPlayingail = useContext(CartContext);
    const movie = data.find((m : any) => m.movieId == Number(id));

    const handlePlayPause = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsVideoPlaying(!isVideoPlaying);
    };
    return (
        <>
            <div style={{ position: 'relative', height: '60vh', overflow: 'hidden' }} className="detail-block">
                <ReactPlayer
                    url={`../../../crud-json/uploads/Trailer/${movie.trailer}`}
                    width="100%"
                    height="100%"
                    playing={isVideoPlaying}
                    controls
                    style={{ display: isVideoPlaying ? 'block' : 'none' }}
                    
                />
                {!isVideoPlaying && (
                    <div className="overlay">
                        <Button className="play-btn" onClick={handlePlayPause}>
                            <FontAwesomeIcon icon={faPlayCircle} size="3x" color="white" />
                        </Button>
                    </div>
                )}

                <Image
                    src={`../../../crud-json/uploads/Detail/${movie.image}`}
                    alt={movie.name}
                    fluid
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div style={{ position: 'absolute', top: '72%', left: '36%', transform: 'translate(-50%, -50%)', color: 'white' }} data-testid="rating-block">
                    <h1>{movie.name}</h1>
                    <p>Other details about the movie</p>
                    <div style={{ display: 'flex' }}>
                        <RatingComponent rating={movie.ratings} />
                        <p style={{ marginLeft: '10px', color: 'yellow' }}>{movie.ratings}</p>
                    </div>
                </div>
            </div>
            <div data-testid="DetailItem">
                <DetailItem movie={movie}/> 
            </div>

        </>

    );
};
export default MovieDetail;