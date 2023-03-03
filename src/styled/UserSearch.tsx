import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 50px;
`;

export const Input = styled.nav`
  &.searchInput {
    text-align: center;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: white;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  margin-left: 20px;

  &:hover {
    border-color: #646cff;
  }

  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
