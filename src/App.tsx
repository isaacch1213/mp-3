import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: #f5e9dc;
    background-color: #04082e;
    font-family: "Roboto", sans-serif;
  }

  p {
    font-size: calc(2px + 1.05vw);
  }

  @media screen and (max-width: 1000px) {
    p {
      font-size: calc(2px + 2vw);
    }
  }
`;

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
