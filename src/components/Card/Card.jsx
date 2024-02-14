import React from 'react';
import {CardWrapper, CardImage, CardContent,CardTitle,CardDescription,CardButton} from './Card.styles';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, description, id }) => {

    return (
    <CardWrapper>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Link to={`/book/${id}`}>
          <CardButton >View Details</CardButton>
        </Link>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
