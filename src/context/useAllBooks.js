import React, { createContext, useContext, useState } from 'react';


const AllBooks = createContext();

export const AllBooksProvider = ({ children }) => {
 const [ searchedBooks, setSearchedBooks ] = useState([]);
 const [ allCategory, setAllCategory ] = useState([]);
  return (
    <AllBooks.Provider value={{searchedBooks, setSearchedBooks ,allCategory, setAllCategory}}>
      {children}
    </AllBooks.Provider>
  );
};

export const useAllBooks = () => {
  return useContext(AllBooks);
};
