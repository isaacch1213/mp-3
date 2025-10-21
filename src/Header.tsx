import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2d43;
  height: 10vh;
  padding: 2%;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Isaac Chan</h1>
      <p>My Online Resume</p>
    </StyledHeader>
  );
}
