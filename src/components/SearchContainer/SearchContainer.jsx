import React from 'react';
import Card from 'components/Card/Card'

import { GridWrapper } from './SearchContainer.styles'

const SearchContainer = ({ books }) => {
   
  return (
    <GridWrapper>
      {books.map((book, index) => (
        <Card  key={index}
        title={book.volumeInfo.title}
        description={book.volumeInfo.description}
        imageUrl={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/150"} />
      ))}
    </GridWrapper>
  );
};

export default SearchContainer;


