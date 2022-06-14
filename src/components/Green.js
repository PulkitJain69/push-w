import Image from "next/image";
import styled from "styled-components";

function GreenSection() {
  return (
    <Container>
      <Section>
        <Section1>
          <Heading>
            Tired of items getting sold out? Or no COD? We are here to help!
          </Heading>
          <Text>
            Our customers enjoy complete freedom of doing business online by
            managing every aspect of their online store from their mobile and
            web devices.
          </Text>
        </Section1>
        <Section2>
          <ImageSection>
            <Image src="/green-image.png" width="600px" height="500px" />
          </ImageSection>
          <TextSection>
            <Option>
              <Icon>
                <Image src="/card.png" width="60px" height="60px" />
              </Icon>
              <SideSection>
                <SideHeading>Who commented first?</SideHeading>
                <SideText>
                  Book directly without commenting or DMing and our algo makes
                  sure the first one to book gets to pay first.
                </SideText>
              </SideSection>
            </Option>
            <Option>
              <Icon>
                <Image src="/chat.png" width="60px" height="60px" />
              </Icon>
              <SideSection>
                <SideHeading>Sorry, COD nahi ho payega :(</SideHeading>
                <SideText>
                  We know you&apos;ve heard this a lot, but at push you don&apos;t have
                  to. We provide COD on thrifted items to reduce fraudulent
                  selling.
                </SideText>
              </SideSection>
            </Option>
            <Option>
              <Icon>
                <Image src="/basket.png" width="60px" height="60px" />
              </Icon>
              <SideSection>
                <SideHeading>Tired of buyers changing their mind?</SideHeading>
                <SideText>
                  At push, you don&apos;t have to individually handle each customer.
                  We want you to focus on your business, and we will take care
                  of the rest!
                </SideText>
              </SideSection>
            </Option>
          </TextSection>
        </Section2>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 120vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #004c3f;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const TextSection = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  color: #fff;
  letter-spacing: 0.02rem;
  text-align: center;
`;

const Text = styled.p`
  width: 40rem;
  text-align: center;
  margin-top: 1rem;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Section1 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin-top: 2rem;
`;

const Icon = styled.div``;
const SideSection = styled.div`
  width: 18rem;
  margin-left: 2rem;
`;

const SideHeading = styled.div`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
`;

const SideText = styled.div`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  line-height: 26px;
  margin-top: 0.5rem;
`;

const Option = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export default GreenSection;
