import styled from "styled-components";
import Logo from "./Logo";

function Header() {
  const HeaderDiv = styled.header`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.2rem;
    width: 100%;
    height: 15vh;
    background-color: #000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  `;
  return (
    <HeaderDiv>
      <Logo />
    </HeaderDiv>
  );
}

export default Header;
