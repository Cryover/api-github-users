import styled from "styled-components";

export const H2 = styled.h2`
  word-wrap: break-word;
`;

export const Div = styled.div`
  &.userCardDetails {
    display: flex;
    flex-direction: column;
    background-color: blueviolet;
    border-radius: 10px;
    -webkit-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.75);
    padding: 20px;
  }
`;

export const Usercard = styled.div`
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &hover {
    transform: scale(1.1);
  }

  &div {
    width: 200px;
  }
`;

export const Img = styled.img`
  &.userCardImg {
    width: 200px;
    border-radius: 50%;
    align-self: center;
  }
`;

export const H3 = styled.h3``;

export const A = styled.a``;
