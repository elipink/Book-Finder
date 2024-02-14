import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  gap: 90px;
  background-color: #8CB9aD;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`
const ContactContent = styled.div`
  width: 35vw;
  margin-left: 30px;
`
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
  bottom: 40%;
  left: 5%;
  border-radius: 10px;
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactContent>
        <h2>Contact Us</h2>
        <p>
          Thank you for your interest in Wisdom Book Finder. We value your
          feedback, inquiries, and suggestions. Please feel free to reach out to
          us using the contact information provided below. Our dedicated team is
          here to assist you in any way we can.
        </p>
        <h3>Customer Support:</h3>
        <p>
          If you have any questions about our products, services, or your order,
          our customer support team is available to assist you. You can reach us
          via email or phone during our business hours.
        </p>
        <p>
          Email: support@wisdombookfinder.com <br />
          Phone: +1 (800) 555-1234 <br />
          Hours: Monday - Friday, 9:00 AM - 5:00 PM (EST)
        </p>
        <h3>General Inquiries:</h3>
        <p>
          For general inquiries, partnership opportunities, or media inquiries,
          please contact us using the email address below. We welcome
          collaboration and are open to exploring ways to work together.
        </p>
        <p>Email: info@wisdombookfinder.com</p>
        <p>
          <h2>Address: </h2>
          Wisdom Book Finder <br />
          123 Main Street <br />
          WestHills, CA, 91356 <br />
          USA
        </p>
        <h3>Social Media:</h3>
        <p>
          Connect with us on social media to stay updated on the latest news, book
          recommendations, and promotions.
        </p>
        <p>
          Facebook: @WisdomBookFinder <br />
          Twitter: @WisdomBooks <br />
          Instagram: @WisdomBookFinder
        </p>
        <p>
          We look forward to hearing from you and assisting you on your journey of
          exploration and discovery through the world of books.
        </p>
        <p>
          <b>Warm regards,</b> <br />
          <b>The Wisdom Book Finder Team</b>
        </p>
      </ContactContent>
      <AboutImageContainer>
        <AboutImageFirst
          src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
          alt=""
        />
        <AboutImageSecond
          src="https://cdn.pixabay.com/photo/2017/08/07/03/22/books-2599241_640.jpg"
          alt=""
        />
      </AboutImageContainer>
    </ContactContainer>
  );
}
export default Contact;
