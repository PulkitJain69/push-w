import Image from "next/image";
import styled from "styled-components";

function WhoAreWe() {
  return (
    <Container>
      <Section>
        <Section1>
          <Heading>Who are we?</Heading>
          <Text>
            push started as a passionate idea of two college students sitting
            locked in their house due to COVID who wanted to integrate the
            online thrifting business for user convenience.
          </Text>
        </Section1>
        <Section2>
          <ImageSection>
            <Image src="/who_image.png" width="500px" height="550px" />
          </ImageSection>
          <TextSection>
            <Option>
              <Icon>
                <Image src="/discount.png" width="60px" height="60px" />
              </Icon>
              <SideSection>
                <SideHeading>What do we do?</SideHeading>
                <SideText>
                  Thrifting refers to the buying and selling of pre-loved or
                  vintage items at a discounted price. Push provides a dedicated
                  platform for thrifting.
                </SideText>
              </SideSection>
            </Option>
            <Option>
              <Icon>
                <Image src="/delivery.png" width="60px" height="60px" />
              </Icon>
              <SideSection>
                <SideHeading>How do we do it?</SideHeading>
                <SideText>
                  Thrifting refers to the buying and selling of pre-loved or
                  vintage items at a discounted price. Push provides a dedicated
                  platform for thrifting.
                </SideText>
              </SideSection>
            </Option>
            <Option>
              <Icon>
                <Image src="/chart.png" width="60px" height="60px" />
              </Icon>
              <SideSection>
                <SideHeading>Why do we do it?</SideHeading>
                <SideText>
                  Thrifting refers to the buying and selling of pre-loved or
                  vintage items at a discounted price. Push provides a dedicated
                  platform for thrifting.
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
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  font-weight: 500;
  font-size: 3rem;
  color: #154f34;
  letter-spacing: 0.02rem;
`;

const Text = styled.p`
  width: 30rem;
  text-align: center;
  margin-top: 1rem;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #82918e;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Section1 = styled.div`
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
`;

const Icon = styled.div``;
const SideSection = styled.div`
  width: 18rem;
  margin-left: 2rem;
`;

const SideHeading = styled.div`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #154f34;
  font-weight: 700;
  font-size: 1rem;
`;

const SideText = styled.div`
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  color: #82918f;
  font-weight: 400;
  font-size: 1rem;
  line-height: 26px;
`;

const Option = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export default WhoAreWe;
