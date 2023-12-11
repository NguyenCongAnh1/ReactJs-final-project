import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';

interface RatingComponentProps {
  rating: number;
}

const RatingComponent: React.FC<RatingComponentProps> = ({ rating }) => {
  const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const fullStars: number = Math.floor(rating);
    const hasHalfStar: boolean = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} key={i} />);
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} style={{ color: 'yellow' }} key="half" />);
    }

    return stars;
  };

  return (
    <div className="rating" data-testid='star'>
      {renderStars()}
    </div>
  );
};

export default RatingComponent;