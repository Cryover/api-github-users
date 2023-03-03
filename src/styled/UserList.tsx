import styled from "styled-components";

export const H1 = styled.h1`
  word-wrap: break-word;
  text-align: center;
  max-width: 100%;
  margin-bottom: 30px;
`;

export const H2 = styled.h2`
  word-wrap: break-word;
  text-align: center;
  max-width: 200px;
  &.h2UserList {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

export const H2UserList = styled.h2`
  word-wrap: break-word;
  text-align: center;
`;

export const Div = styled.div`
  &.userCard {
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 480px) {
      .userCardDiv {
        justify-content: center;
      }
    }
  }

  &.userCardList {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
`;

export const Usercard = styled.div`
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
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
