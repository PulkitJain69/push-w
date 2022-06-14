import Image from "next/image";
import styled from "styled-components";

function BP() {
  return (
    <Container>
      <BookingContainer>
        <ImageContainer>
          <Image src="/booking.png" width="650px" height="1050px" />
        </ImageContainer>
        <TextContainer>
          <Head>BOOK, WAIT, BUY </Head>
          <Heading>Booking/ Waitlisting</Heading>
          <Text>
            Book directly without commenting or DMing and our algo makes sure
            the first one to book gets to pay first.
          </Text>
        </TextContainer>
      </BookingContainer>
      <PaymentContainer>
        <TextContainer>
          <Head>HASSLE FREE PAYMENT</Head>
          <Heading>Payment Integration</Heading>
          <Text>
            Payments are hassle-free and fraud-less through our integrated
            payment gateways.
          </Text>
        </TextContainer>
        <Image src="/payment.png" width="650px" height="1050px" />
        <ImageContainer></ImageContainer>
      </PaymentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const BookingContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 25rem;
  justify-content: flex-start;
`;

const Head = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #004c3f;
  margin-bottom: 0.5rem;
`;

const Heading = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  letter-spacing: 0.02rem;
  margin-bottom: 0.5rem;
  color: #004c3f;
`;

const Text = styled.p`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #57605e;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const PaymentContainer = styled.div`
  margin-top: 30rem;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ImageContainer = styled.div``;

const TextContainer = styled.div`
  margin: 5rem 8rem 5rem 8rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default BP;
