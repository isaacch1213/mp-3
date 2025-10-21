import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #8b94a3;
  height: 100%;
  width: 30%;
  padding: 2%;

  a {
    text-decoration: none;
    color: #f5e9dc;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 5%;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    font-size: calc(2px + 2vw);
    background-color: #414361;
    height: 5vh;
    width: 15vw;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
    padding: 1%;

    ul {
      flex-direction: row;
      gap: 1%;
    }

    li {
      font-size: calc(2px + 1.5vw);
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/education"}>Education</Link>
        </li>
        <li>
          <Link to={"/experience"}>Experience</Link>
        </li>
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link to={"/achievements"}>Achievements</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
      </ul>
    </StyledNav>
  );
}
