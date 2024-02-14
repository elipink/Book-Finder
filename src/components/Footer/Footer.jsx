import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const FooterContainer = styled.div`
  background-color: #333;
  padding-bottom: 20px;
  margin: 20px;
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  color: #fff;
  flex-wrap: wrap; 
`;
const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const StyledUl = styled.ul`
  color: #fff;
  list-style: none;
`;
const StyledLi = styled.li`
  text-decoration: none;
  color: white;
  margin-top: 15px;
`
const StyledAdress = styled.address`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  color: #fff;
`;
const StyledLogo = styled.div`
  flex: 1 1 300px; 
  max-width: 300px;
`;
const StyledCopyRight = styled.div`
  flex-basis: 100%;
  padding: 0 35%; 
  margin-top: 30px; 
  color:  white;
`;

const StyledMedia = styled.div`
  color: #fff;
`;
const StyledMediaList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px; 
`;
const StyledMediaListItem = styled.li`
  margin: 25px 0px 10px 0px;
`;
const StyledA = styled.a`
  text-decoration: none;
  list-style: none;
  color: white;
`;


function Footer() {
  return (
    <FooterContainer>
      <StyledFooter>
        <StyledLogo>
          <h2>Wisdom Book Finder</h2>
          <p>
          At Wisdom Book Finder, we believe in the transformative power of
          reading and the profound impact it can have on individuals and society
          as a whole. Whether you're embarking on a journey of self-discovery,
          seeking answers to life's deepest questions, or simply looking for
          your next great read, we invite you to explore our collection and
          discover the wisdom that awaits within the pages of a book.
        </p>
        </StyledLogo>
        <StyledAdress>
          <h3>Address</h3>
          <p>
            <GrLocationPin /> 2345 W Market Street
          </p>
          <p>Los Angeles, CA 90023</p>
          <p>
            <MdAlternateEmail /> Email: info@wisdombookfinder.com
          </p>
          <p>
            <FaPhoneAlt /> Phone: +1 (310) 452-1967
          </p>
        </StyledAdress>

        <StyledLinks>
          <h3>Quick Links</h3>
          <StyledUl>
            <Link to="/">
              <StyledLi>Home</StyledLi>
            </Link>

            <Link to="/about">
              <StyledLi>About Us</StyledLi>
            </Link>

            <Link to="/faq">
              <StyledLi>FAQ</StyledLi>
            </Link>

            <Link to="/privacy">
              <StyledLi>Privacy</StyledLi>
            </Link>

            <Link to="/term-and-condition">
              <StyledLi>Terms and Conditions</StyledLi>
            </Link>
          </StyledUl>
        </StyledLinks>

        <StyledMedia>
          <h3>Follow Us</h3>
          <StyledMediaList>
            <StyledMediaListItem>
              <FaFacebook />{" "}
              <StyledA
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </StyledA>
            </StyledMediaListItem>
            <StyledMediaListItem>
              <FaLinkedin />{" "}
              <StyledA
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </StyledA>
            </StyledMediaListItem>
            <StyledMediaListItem>
              <FaTwitter />{" "}
              <StyledA
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </StyledA>
            </StyledMediaListItem>
            <StyledMediaListItem>
              <FaInstagram />{" "}
              <StyledA
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </StyledA>
            </StyledMediaListItem>
          </StyledMediaList>
        </StyledMedia>
      </StyledFooter>
      <StyledCopyRight>
        <p>&copy; 2024 Wisdom Book Finder. All rights reserved.</p>
      </StyledCopyRight>
    </FooterContainer>
  );
}
export default Footer;
