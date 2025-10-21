import { Routes, Route, useLocation } from "react-router";
import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
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

// Use a record to dynamically handle the title of each page based off the current route
const pageTitle: Record<string, string> = {
  "/": "Home",
  "/education": "Education",
  "/experience": "Experience",
  "/skills": "Skills",
  "/achievements": "Achievements",
  "/projects": "Projects",
};

export default function Root() {
  // Use React Router useLocation hook to get the curent path
  const location = useLocation();

  return (
    <PageWrapper>
      <Header />
      <ContentContainer>
        <Nav />
        <StyledMain>
          {/* Use the location objects property pathname to get the current path */}
          <h2>{pageTitle[location.pathname]}</h2>
          <VerticalWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </VerticalWrapper>
        </StyledMain>
      </ContentContainer>
      <Footer />
    </PageWrapper>
  );
}
