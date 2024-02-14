import HeroSection from "components/Hero/Hero";
import SearchContainer from "components/SearchContainer/SearchContainer";
import BookDisplay from "components/BookDisplay/BookDisplay";
import { useAllBooks } from "context/useAllBooks";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import styled from "styled-components";


const HeroBtn = styled.button`
  padding: 1rem 2rem;
  margin: 20px;
  background-color: #8CB9aD;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #8CB9BD;
  }
`
function Home() {
  const { searchedBooks } = useAllBooks();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBook = (newBook) => {
    console.log("Adding new book:", newBook);
  };

  let content;
  if (searchedBooks.length === 0) {
    content = (
      <>
        <BookDisplay catagoryName={"Fiction"} />
        {/* <BookDisplay catagoryName={"Biography"} />
        <BookDisplay catagoryName={"Religion"} />
        <BookDisplay catagoryName={"History"} /> */}
      </>
    );
  } else if (searchedBooks.length > 0) {
    content = <SearchContainer books={searchedBooks} />;
  }

  return (
    <>
      <HeroSection />
      <HeroBtn onClick={openModal}>Add New Book</HeroBtn>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddBook}
      />
      {content}
    </>
  );
}

export default Home;
