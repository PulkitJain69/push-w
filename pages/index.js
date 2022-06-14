import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import BP from "../src/components/BP";
import Footer from "../src/components/Footer";
import GreenSection from "../src/components/Green";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import WhoAreWe from "../src/components/Who";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <WhoAreWe />
      <GreenSection />
      <BP />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
