import styled from "styled-components";

export const CardItem = styled.div`
display: flex;
flex-direction: column;
  width: 20%;
  margin: 5px 10px 20px 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  transition: 300ms ease-in-out;
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
  .btnDetalle{
    background-color: #43aa8b;
    font-weight: 700;
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 5px;
    width: 50%;
    align-self: center;
    cursor: pointer;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  /* &:hover {
    transform: scale(1.02);
   
  } */
`;
