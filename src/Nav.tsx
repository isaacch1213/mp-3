import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #8b94a3;
  height: 100%;
  width: 30%;
  padding: 2%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 5%;
    padding: 0;
    list-style-type: none;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f5e9dc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2%;
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink to={"/"}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to={"/education"}>Education</StyledLink>
        </li>
        <li>
          <StyledLink to={"/experience"}>Experience</StyledLink>
        </li>
        <li>
          <StyledLink to={"/skills"}>Skills</StyledLink>
        </li>
        <li>
          <StyledLink to={"/achievements"}>Achievements</StyledLink>
        </li>
        <li>
          <StyledLink to={"/projects"}>Projects</StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
}
