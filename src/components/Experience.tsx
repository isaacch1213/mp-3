import styled from "styled-components";
import craLogo from "../assets/cra-logo.png";
import sparkLogo from "../assets/spark-logo.jpeg";
import pupilLogo from "../assets/pupil-logo.png";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;

  p {
    font-size: calc(2px + 0.75vw);
  }

  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 1vw);
    }
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: calc(2px + 1.5vw);
    }
  }
`;

const ExperienceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    gap: 2vw;
  }
`;

const LogoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75vh;
  width: 25%;

  img {
    max-width: 100px;
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    width: 15%;

    img {
      max-width: 90px;
    }
  }

  @media screen and (max-width: 750px) {
    width: 70%;
  }
`;

const ExperienceDescription = styled.div`
  max-width: 60%;

  a {
    color: #f5e9dc;
  }

  @media screen and (max-width: 1000px) {
    max-width: 60%;
  }

  @media screen and (max-width: 750px) {
    margin-right: 2%;
  }
`;

export default function Experience() {
  return (
    <>
      <h2>Experience</h2>
      <ExperienceContainer>
        <ExperienceContent>
          <LogoItems>
            <img src={craLogo} alt="Charles River Analytics Logo" />
            <div className="experience-info">
              <p>
                <strong>Software Engineer Fellow</strong>
              </p>
              <p>Spark!</p>
              <p>
                <em>Boston, MA</em>
              </p>
            </div>
          </LogoItems>
          <ExperienceDescription>
            <p>
              Developed a full-stack NIH tool discovery app with Cytoscape, AG
              Grid, and JavaScript, integrating network graphs, tables, and
              contribution workflows. Automated ingestion of 200+ biomedical
              metadata nodes into Neo4j via Python and APIs, built a scoring
              algorithm for 45+ tools with CI/CD, and structured metadata in
              Neomodel exposed through GraphQL. Improved usability with a
              multi-modal Stepper editor for the DOD using React Complex Tree,
              MUI, and Storybook.
            </p>
          </ExperienceDescription>
        </ExperienceContent>
        <ExperienceContent>
          <LogoItems>
            <img src={sparkLogo} alt="Spark! Logo" />
            <div className="experience-info">
              <p>
                <strong>Software Engineer Fellow</strong>
              </p>
              <p>Spark!</p>
              <p>
                <em>Boston, MA</em>
              </p>
            </div>
          </LogoItems>
          <ExperienceDescription>
            <p>
              Developed a social media platform for outfit sharing as part of a
              semester-long technology innovation program at Boston University,
              featuring optimized outfit discoverability for over 100 clothing
              items through a search suggestion feature powered by OpenAI
              Vision. Led the technical development of content-sharing
              capabilities by implementing user authentication and CRUD
              operations for posts, friends, collections, and feeds using
              Supabase.
            </p>
          </ExperienceDescription>
        </ExperienceContent>
        <ExperienceContent>
          <LogoItems>
            <img src={pupilLogo} alt="Pupil Logo" />
            <div className="experience-info">
              <p>
                <strong>Software Engineer Intern</strong>
              </p>
              <p>Pupil</p>
              <p>
                <em>Boston, MA</em>
              </p>
            </div>
          </LogoItems>
          <ExperienceDescription>
            <p>
              Revamped{" "}
              <a href="https://getpupil.com" target="_blank">
                getpupil.com
              </a>{" "}
              using Svelte, securing two partnerships, attracting over 50 beta
              testers, and increasing investor interest. Streamlined
              collaboration with the CEO, CTO, and design team by introducing
              Scrum practices, boosting project efficiency by 30%.
            </p>
          </ExperienceDescription>
        </ExperienceContent>
      </ExperienceContainer>
    </>
  );
}
