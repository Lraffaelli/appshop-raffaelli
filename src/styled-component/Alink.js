import styled from "styled-components";

export const Alink = styled.a`
  text-decoration: none;
  color: #000;
  margin: 0 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  transition: all 0.3s;

  &:hover {
    background-color: #4895ef;
    color: #fff;
    padding: 5px 10px ;
    border-radius: 20px;
    margin:10px;
  }
`;
