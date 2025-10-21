import styled from "styled-components";
import headshot from "../assets/isaac-chan-headshot.jpg";

const StyledImg = styled.img`
  max-width: 40%;
  height: auto;

  @media screen and (max-width: 1000px) {
    max-width: 250px;
    margin-bottom: 2%;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  gap: 2%;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  font-size: calc(2px + 1vw);

  @media screen and (max-width: 1000px) {
    gap: 2vh;

    p {
      font-size: calc(2px + 1vw);
    }
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: calc(2px + 2vw);
    }
  }
`;

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <HomeContainer>
        <StyledImg src={headshot} alt="Isaac Chan Headshot" />
        <PContainer>
          <p>Hello!</p>
          <p>
            My name is Isaac and I'm a sophomore at Boston University majoring
            in Computer Science with a minor in Data Science. I am a aspiring
            full-stack software engineer who hopes to one day work at a company
            where I can make an actual positive change in our world.
          </p>
          <p>
            This is a website where you can learn more about my educational and
            career background, as well as other relevant information that you
            may find interesting.
          </p>
        </PContainer>
      </HomeContainer>
    </>
  );
}
