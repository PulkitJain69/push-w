import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <Heading>Coming Soon...</Heading>
      <Button>CONTACT US</Button>
      <FooterText>
        <Text>www.pushindia.in</Text>
        <Text>@starkindustry</Text>
      </FooterText>
    </Foot>
  );
}

const Foot = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #039674;
  background-image: url("footer.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const FooterText = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 4rem;
  color: #fff;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.3rem;
  font-family: "DM Sans";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 700;
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  color: #004c3f;
  cursor: pointer;
  padding: 1.4rem 2rem;
  font-size: 1.3rem;
  font-family: "DM Sans";
  font-style: normal;
  letter-spacing: 0.1rem;
  font-weight: 700;
`;

export default Footer;
