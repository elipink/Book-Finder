import Card from "components/Card/Card";
import {
  BookDisplayCatagoryName,
  BookDisplayContener,
  BookDisplayWrapper,
} from "./BookDisplay.styles";
import useGetGoogleBooksByCategory from "hooks/useGetGoogleBooksByCategory";

const BookDisplay = ({ catagoryName }) => {
  const { books, loading, error } = useGetGoogleBooksByCategory(catagoryName, 5);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BookDisplayContener>
      <BookDisplayCatagoryName>{catagoryName}</BookDisplayCatagoryName>
      <BookDisplayWrapper>
        {books &&
          books.map((book, index) => (
            <Card
              key={index}
              id={book.id}
              title={book.volumeInfo.title}
              description={book.volumeInfo.description}
              imageUrl={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "https://via.placeholder.com/150"
              }
            />
          ))}
      </BookDisplayWrapper>
    </BookDisplayContener>
  );
};

export default BookDisplay;
