import styled, { css } from "styled-components";

const Button = styled.a`
  color: #111;
  font-weight: 700;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: none;

  ${(props) =>
    props.type === "orange"
      ? css`
          background-color: #ffcc00;
        `
      : css`
          background-color: #eee;
        `}
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
