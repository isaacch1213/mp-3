import { useState } from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;
`;

const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const ProjectsTitle = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #f5e9dc;
  }

  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 1.75vw);
    }
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: calc(2px + 2vw);
    }
  }
`;

const ProjectsDescription = styled.div`
  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 1.75vw);
    }
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: calc(2px + 2vw);
    }
  }
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;

  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 1.75vw);
    }
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: calc(2px + 2vw);
    }
  }
`;

const CalculatorContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3vw;

  @media screen and (max-width: 1000px) {
    gap: 5vw;

    p {
      font-size: calc(2px + 1.75vw);
    }
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;

    p {
      font-size: calc(2px + 2vw);
    }
  }
`;

const CalculatorInputs = styled.div`
  display: flex;
  gap: 1vw;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  padding: 2.5%;

  @media screen and (max-width: 750px) {
    padding: 1.75%;
    width: 50%;
  }
`;

const CalculatorButtons = styled.div`
  width: 50%;
  display: flex;
  gap: 2%;

  button {
    padding: 2.5%;
    background-color: #414361;
    border: solid #f5e9dc;
    color: #f5e9dc;
    cursor: pointer;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const OutputContainer = styled.div`
  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 1.75vw);
    }
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: calc(2px + 2vw);
    }
  }
`;

const Output = styled.p<{ $isNegative: boolean }>`
  color: ${(props) => (props.$isNegative ? "red" : "#f5e9dc")};
  font-weight: bold;
`;

export default function Projects() {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [output, setOutput] = useState<number>(0);
  const [isNegative, setIsNegative] = useState<boolean>(false);

  function doAdd() {
    const result = Number(input1) + Number(input2);
    setOutput(result);
    if (result < 0) {
      setIsNegative(true);
    } else {
      setIsNegative(false);
    }
  }

  function doSubtract() {
    const result = Number(input1) - Number(input2);
    setOutput(result);
    if (result < 0) {
      setIsNegative(true);
    } else {
      setIsNegative(false);
    }
  }

  function doMultiply() {
    const result = Number(input1) * Number(input2);
    setOutput(result);
    if (result < 0) {
      setIsNegative(true);
    } else {
      setIsNegative(false);
    }
  }

  function doDivide() {
    const result = Number(input1) / Number(input2);
    setOutput(result);
    if (result < 0) {
      setIsNegative(true);
    } else {
      setIsNegative(false);
    }
  }

  function doPower() {
    let result = 1;
    for (let i = 0; i < Number(input2); i++) {
      result *= Number(input1);
    }
    setOutput(result);
    if (result < 0) {
      setIsNegative(true);
    } else {
      setIsNegative(false);
    }
  }

  function doClear() {
    setInput1("");
    setInput2("");
    setOutput(0);
    setIsNegative(false);
  }

  function handleInput1Change(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Only allows values that are empty strings, start with negative sign, or is a number
    if (value === "" || value === "-" || !isNaN(Number(value))) {
      setInput1(value);
    }
  }

  function handleInput2Change(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Only allows values that are empty strings, start with negative sign, or is a number
    if (value === "" || value === "-" || !isNaN(Number(value))) {
      setInput2(value);
    }
  }

  return (
    <ProjectsContainer>
      <ProjectsContent>
        <ProjectsTitle>
          <a href="https://github.com/owenm-26/Easy-PT" target="_blank">
            <p>
              <strong>EZ-PT</strong>
            </p>
          </a>
          <p>
            <em>October, 2024</em>
          </p>
        </ProjectsTitle>
        <ProjectsDescription>
          <p>
            Full-stack web application developed at HackHarvard that applied
            machine learning and Mediapipe’s computer vision to deliver
            self-guided physical therapy with ~75% reliability. User-friendly
            admin and client interfaces were implemented with Next.js and
            Tailwind to display 25 fields of data from SQLite, while secure
            authentication was configured by connecting Bcrypt-encrypted JWT
            tokens to the frontend with TypeScript.
          </p>
        </ProjectsDescription>
      </ProjectsContent>
      <ProjectsContent>
        <ProjectsTitle>
          <a href="https://mindfulmeals.vercel.app/" target="_blank">
            <p>
              <strong>Mindful Meals</strong>
            </p>
          </a>
          <p>
            <em>August, 2024</em>
          </p>
        </ProjectsTitle>
        <ProjectsDescription>
          <p>
            Full-stack website deployed with React.js/Next.js and Vercel to
            monitor and estimate daily protein and caloric intake with 80%
            accuracy based on meals consumed. User authentication and data
            storage of meals, nutritional values, and targets were managed with
            Firebase, while AI-driven suggestions were integrated through
            RESTful Flask API endpoints connected to Langchain and Groq API. The
            interface featured a modern, responsive design using Tailwind and
            the Autocomplete MUI API.
          </p>
        </ProjectsDescription>
      </ProjectsContent>
      <CalculatorContainer>
        <p>
          <strong>Calculator:</strong>
        </p>
        <CalculatorContent>
          <CalculatorInputs>
            {/* combination of type="text" + type checking in function allow for stricter input values of only numbers */}
            <StyledInput
              type="text"
              inputMode="numeric"
              value={input1}
              onChange={handleInput1Change}
              placeholder="Enter first number"
            />
            <StyledInput
              type="text"
              inputMode="numeric"
              value={input2}
              onChange={handleInput2Change}
              placeholder="Enter second number"
            />
          </CalculatorInputs>
          <CalculatorButtons>
            <button onClick={doAdd}>+</button>
            <button onClick={doSubtract}>-</button>
            <button onClick={doMultiply}>*</button>
            <button onClick={doDivide}>/</button>
            <button onClick={doPower}>**</button>
            <button onClick={doClear}>Clear</button>
          </CalculatorButtons>
        </CalculatorContent>
        <OutputContainer>
          <p>
            <strong>Output: </strong>
          </p>
          <Output $isNegative={isNegative}>{output}</Output>
        </OutputContainer>
      </CalculatorContainer>
    </ProjectsContainer>
  );
}
