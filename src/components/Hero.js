import Image from "next/image";
import styled from "styled-components";

function Hero() {
  return (
    <HeroSection>
      <TextSection>
        <Heading>thrift in a new way</Heading>
        <Text>
          At Push, we strive to provide a unique fashion experience to our
          customers where they can sell, buy, and explore pre-loved and vintage
          fashion.
        </Text>
        {/* <ButtonSection>
          <Button1>ADMIN DEMO</Button1>
          <Button2>SHOP DEMO</Button2>
        </ButtonSection> */}
      </TextSection>
      <ImageSection>
        <Image src="/hero-image.png" width="600px" height="520px" />
      </ImageSection>
    </HeroSection>
  );
}

const HeroSection = styled.div`
  position: relative;
  height: 90vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10vh;
`;

const TextSection = styled.div`
  width: 28rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.5rem;
  color: #154f34;
  letter-spacing: 0.02rem;
`;

const Text = styled.p`
  margin-top: 1rem;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #57605e;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;
`;

// const ButtonSection = styled.div`
//   margin-top: 4rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Button2 = styled.button`
//   background-color: #fff;
//   border: 1px solid #004c3f;
//   color: #004c3f;
//   cursor: pointer;
//   padding: 1.4rem 2rem;
//   font-size: 1.3rem;
//   font-family: "DM Sans";
//   font-style: normal;
//   letter-spacing: 0.1rem;
//   font-weight: 700;
//   margin-left: 30px;
// `;

// const Button1 = styled.button`
//   background-color: #004c3f;
//   border: 1px solid #004c3f;

//   color: #fff;
//   cursor: pointer;
//   padding: 1.4rem 2rem;
//   font-size: 1.3rem;
//   font-family: "DM Sans";
//   font-style: normal;
//   letter-spacing: 0.1rem;
//   font-weight: 700;
// `;

export default Hero;
