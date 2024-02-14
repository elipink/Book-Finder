import { useRef, useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  SearchBar,
  HeroBtn,
} from "./Hero.styles";
import useSearchGoogleBooks from "hooks/useSearchGoogleBooks";
// import { useAllBooks } from "context/useAllBooks";

const HeroSection = () => {
  const inputRef = useRef("")
  const [query, setQuery] = useState("");
  
  const {books} = useSearchGoogleBooks(query);
  

  const handleSearchQuery = (e) => {
        setQuery(e.target.value);
        
  }

  
  

  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Find the book you are looking for!</HeroH1>
        <HeroP>Get access to over 1,000,000 books in any format.</HeroP>
        <SearchBar
        ref={inputRef}
          onChange={(e) => {handleSearchQuery(e)}}
          type="text"
          placeholder="Search by Title, Author, ISBN or Keyword . . ."
        />
        <HeroBtn>Search Book</HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
