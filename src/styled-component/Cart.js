import styled from "styled-components";

export const Cart = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
padding:10px;
margin-right: 20px;
border: none;
background-color:#fff;

font-size:1.5rem;
border-radius: 50px;
cursor: pointer;

.btn-comprar{
    color: #333;
    &:hover{
    color: #fff;}
}
&:hover{
    background-color: #57bd9e;
    color: #fff;
}
`;