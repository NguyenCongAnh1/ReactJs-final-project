// Cart.tsx
import React from 'react';
import { Card } from 'react-bootstrap';
import './card.scss'
import { Link } from 'react-router-dom';

export interface Movie {
    movieId: number;
    name: string;
    type: string;
    image: string;
    ratings: number;
    name_of_stars: string[];
    release_date: string;
    price:string;
    quantity: number;
    director: string;
    producer: string;
    time:string;
    movieContent:string;
}

export interface CartProps {
    movie: Movie;
}

const Cart: React.FC<CartProps> = ({ movie }) => {
    return (
        <Card className="card-block">
            <div className="position-relative">
                <Link to={`/movie/${movie.movieId}`}>
                    <Card.Img className="card-img" variant="top" src={`../../../crud-json/uploads/${movie.image}`} alt={movie.name} />
                </Link>
            </div>
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                    Type: {movie.type}
                    <br />
                    Ratings: {movie.ratings}
                    <br />
                    Stars: {movie.name_of_stars.join(', ')}
                    <br />
                    Release Date: {movie.release_date}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Cart;
