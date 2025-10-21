import { Routes, Route } from "react-router";
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./components/Home";
import Education from "./components/Education";
import Footer from "./Footer";

const PageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 3vh;
  padding-bottom: 4vh;
`;

const StyledMain = styled.main`
  background-color: #414361;
  width: 70%;
  padding: 2%;

  h2 {
    text-align: center;
    font-size: calc(2px + 2vw);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;

    h2 {
      font-size: calc(2px + 2.5vw);
    }
  }

  @media screen and (max-width: 750px) {
    h2 {
      padding-top: 2vh;
      font-size: calc(2px + 5vw);
    }
  }
`;

export default function Root() {
  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        <Nav />
        <StyledMain>
          <VerticalWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </VerticalWrapper>
        </StyledMain>
      </ContentContainer>
      <Footer />
    </PageWrapper>
  );
}
