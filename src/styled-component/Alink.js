import styled from "styled-components";

export const Alink = styled.li`
  display: flex;
  font-family: "Segoe UI";
  font-weight: 600;
  font-size: 14px;
  
  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #005f73;
      
      /* border-bottom: 2px solid #005f73; */
    }
  }
`;
