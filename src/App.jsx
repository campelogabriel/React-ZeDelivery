import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import GithubCard from "./components/GithubCard";

function App() {
  const Container = styled.div`
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75vh;
    width: 100%;
  `;

  return (
    <Container>
      <Header />
      <Main />
      <GithubCard />
    </Container>
  );
}

export default App;
