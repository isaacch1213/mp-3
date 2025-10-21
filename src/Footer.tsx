import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2a2d43;
  height: 10vh;
  padding: 2%;

  a {
    color: #f5e9dc;
  }
`;

export default function Footer() {
    return(
        <StyledFooter>
            <p>All Rights Reserved by Isaac Chan <a href="https://www.merriam-webster.com/dictionary/credit" target="_blank">Credits</a> &#169;</p>
        </StyledFooter>
    )
}