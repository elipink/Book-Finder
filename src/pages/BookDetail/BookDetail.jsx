import { useParams } from "react-router-dom";
import { BookDetailContainer, BookDetailWrapper } from "./BookDetail.styles";
import { useState, useEffect } from 'react';
import axios from 'axios';

function BookDetail() {
  const { bookId } = useParams();
 

 const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();
      try {
        const params = {
          id: bookId ,
          maxResults: 1,
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
        };
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
          params,
          signal: abortController.signal
        });
        setBooks(response.data.items);
        setLoading(false);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          // setError(error);
          setLoading(false);
        }
      }
      return () => {
        abortController.abort();
      };
    };

    fetchData();

  
  }, [books, bookId]);


 

  return (
    
      !loading !== 0 ? 
      <BookDetailContainer>
      <BookDetailWrapper>
        <div>image</div>
        <div>{books.volumeInfo.title}</div>
      </BookDetailWrapper>
    </BookDetailContainer> : <div>Loading...</div>
    
  );
}

export default BookDetail;

