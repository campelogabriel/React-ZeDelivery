import styled from "styled-components";
import Location from "./Location";

function Main() {
  const MainDiv = styled.main`
    height: 80vh;
    width: 100%;
  `;
  return (
    <MainDiv>
      <Location />
    </MainDiv>
  );
}

export default Main;
