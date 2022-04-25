import styled from "styled-components";

export const CardItem = styled.div`
  width: 20%;
  margin: 5px 10px 20px 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  transition: 300ms all ease-in-out;
  h3 {
    font-size: 1rem;
    color: #444;
    margin: 0;
  }
  .price {
    font-size: 0.8rem;
    margin-top: 0;
    span {
      font-weight: bold;
    }
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.4);
  }
`;
