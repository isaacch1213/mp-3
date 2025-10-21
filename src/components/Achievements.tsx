import styled from "styled-components";
import sparkDemoDay from "../assets/spark-demo-day.jpg";

const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;

  img {
    max-width: 60%;
    height: auto;
  }

  @media screen and (max-width: 750px) {
    img {
      max-width: 80%;
    }
  }
`;

const Description = styled.div`
  a {
    color: #f5e9dc;
  }

  @media screen and (max-width: 750px) {
    max-width: 100%;

    p {
      text-align: center;
      font-size: calc(2px + 3vw);
    }
  }
`;

export default function Achievements() {
  return (
    <AchievementsContainer>
      <img
        src={sparkDemoDay}
        alt="Isaac selected as Judge's Choice in Spark Demo Day"
      />
      <Description>
        <p>
          Selected as{" "}
          <a
            href="https://www.bu.edu/articles/2025/spark-demo-day/"
            target="_blank"
          >
            Judges’ Choice
          </a>{" "}
          at BU Spark! Demo Day for developing a social media platform for
          outfit sharing using TypeScript and React Native. The app encouraged
          authentic style expression with OpenAI-powered search suggestions and
          time-limited posts for close friends. Contributions focused on
          building the technical foundation, implementing key features, and
          collaborating to deliver a cohesive product.
        </p>
      </Description>
    </AchievementsContainer>
  );
}
