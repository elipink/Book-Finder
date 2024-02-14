import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const AboutContent = styled.div`
  width: 35vw;
  margin-left: 30px;
`;

const AboutImageContainer = styled.div`
  position: relative;
  flex: 1;
  height: auto;
  border-radius: 5px;
`;

const AboutImageFirst = styled.img`
  width: 40%;
  position: absolute;
  top: 10%;
  left: 20%;
  border-radius: 10px;
`;

const AboutImageSecond = styled.img`
  width: 30%;
  aspect-ratio: 1/1;
  position: absolute;
  bottom: 20%;
  left: 5%;
  border-radius: 10px;
`;

function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <h2>About Us: Wisdom Book Finder</h2>
        <p>
          Welcome to Wisdom Book Finder, your premier destination for
          discovering timeless wisdom and knowledge through books. At Wisdom
          Book Finder, we believe that books have the power to inspire, educate,
          and transform lives.
        </p>
        <p>
          Our mission is to connect readers with the most insightful and
          enlightening books across various genres, including philosophy,
          spirituality, self-help, psychology, and more. Whether you're seeking
          guidance on personal growth, spiritual enlightenment, or simply
          looking to expand your knowledge, we're here to help you find the
          perfect book for your journey.
        </p>
        <p>
          What sets Wisdom Book Finder apart is our commitment to curating a
          diverse selection of books that offer profound insights and
          perspectives from cultures and traditions around the world. We strive
          to foster a community of lifelong learners who are passionate about
          exploring new ideas and expanding their understanding of the world.
        </p>
        <p>
          Our team of avid readers and book enthusiasts carefully selects each
          title featured on our platform, ensuring that every recommendation
          meets our high standards of quality and relevance. We're dedicated to
          providing an exceptional shopping experience, with user-friendly
          navigation, detailed book descriptions, and personalized
          recommendations tailored to your interests.
        </p>
        <p>
          Thank you for choosing Wisdom Book Finder as your trusted source for
          literary inspiration and enlightenment. Happy reading!
        </p>
      </AboutContent>
      <AboutImageContainer>
        <AboutImageFirst
          src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
          alt=""
        />
        <AboutImageSecond
          src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg"
          alt=""
        />
      </AboutImageContainer>
    </AboutContainer>
  );
}
export default About;
