//Theming
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
//Routing
import { Routes, Route } from "react-router-dom";
//Pages
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";
import BookDetail from "pages/BookDetail/BookDetail";
//componets
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
//Context Provider
import { AllBooksProvider } from "context/useAllBooks";

function App() {
  return (
    <AllBooksProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </AllBooksProvider>
  );
}

export default App;
