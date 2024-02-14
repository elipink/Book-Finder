import { useState, useEffect } from "react";
import axios from "axios";
import { useAllBooks } from "context/useAllBooks";

const useGetGoogleBooksByCategory = (categoryName, maxResults) => {
  const { allCategory, setAllCategory } = useAllBooks();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();
      try {
        const params = {
          q: categoryName,
          maxResults: maxResults,
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
        };
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params,
            signal: abortController.signal,
          }
        );
        setBooks(response.data.items);
        // update the context state
        setAllCategory( [allCategory ,...books] );

        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error);
          setLoading(false);
        }
      }
      return () => {
        abortController.abort();
      };
    };

    fetchData();
  }, [categoryName, maxResults]);

  return { books, loading, error };
};

export default useGetGoogleBooksByCategory;
