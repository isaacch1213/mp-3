import styled from "styled-components";

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  padding-left: 2vw;
`;

const SchoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  height: 100%;
`;

const SchoolContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;
  width: 100%;
`;

const SchoolContent = styled.div`
  border-left: solid 5px #f5e9dc;
  padding-left: 1vw;

  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 3vw);
    }
  }
`;

const RelevantCoursesContainer = styled.div`
  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 3vw);
    }
  }
`;

export default function Education() {
  return (
    <EducationContainer>
      <SchoolWrapper>
        <SchoolContainer>
          <SchoolContent>
            <p>
              <strong>Boston University</strong>
            </p>
            <p>Bachelor of Arts in Computer Science, Minor in Data Science</p>
            <p>
              <em>Expected May, 2027</em>
            </p>
            <p>GPA: 3.74/4.00</p>
          </SchoolContent>
        </SchoolContainer>
        <SchoolContainer>
          <SchoolContent>
            <p>
              <strong>Newton South High School</strong>
            </p>
            <p>
              <em>May, 2023</em>
            </p>
            <p>GPA: 3.97/4.00</p>
          </SchoolContent>
        </SchoolContainer>
        <RelevantCoursesContainer>
          <p>
            <strong>Relevant Coursework:</strong> Data Structure and Algorithms,
            Linear Algebra, Discrete Math, Computer Systems, Intro to Databases
          </p>
        </RelevantCoursesContainer>
      </SchoolWrapper>
    </EducationContainer>
  );
}
