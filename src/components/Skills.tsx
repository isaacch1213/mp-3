import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3vh;
    padding-left: 2vw;
  }

  li {
    width: 100%;
    height: auto;
    font-size: calc(2px + 1.5vw);
  }

  p {
    font-size: calc(2px + 1.5vw);
  }

  @media screen and (max-width: 1000px) {
    li {
      font-size: calc(2px + 2.25vw);
    }

    p {
      font-size: calc(2px + 2.25vw);
    }
  }

  @media screen and (max-width: 750px) {
    width: 95%;

    li {
      font-size: calc(3px + 3vw);
    }

    p {
      font-size: calc(3px + 3vw);
    }
  }
`;
export default function Skills() {
  return (
    <SkillsContainer>
      <ul>
        <li>
          <p>
            <strong>Programming Languages: </strong>Python, Java, C, Swift,
            Assembly
          </p>
        </li>
        <li>
          <p>
            <strong>Web Technologies: </strong>HTML, CSS, JavaScript,
            TypeScript, Tailwind, REST, GraphQL, Vercel, Storybook
          </p>
        </li>
        <li>
          <p>
            <strong>Databases and Data Formats: </strong>Neo4j, Supabase,
            Firebase, SQLite, MySQL, JSON, YAML
          </p>
        </li>
        <li>
          <p>
            <strong>Frameworks & Libraries: </strong>React.js, Next.js, Svelte,
            React Native, Flask, Langchain, OpenAI, Groq, Pandas, NumPy
          </p>
        </li>
        <li>
          <p>
            <strong>Developer Tools: </strong>VS Code, GitHub, GitLab, npm,
            yarn, Node.js, Axios, Spyder, PyCharm, Anaconda, Figma
          </p>
        </li>
      </ul>
    </SkillsContainer>
  );
}
