import styled from "styled-components";

export const Container= styled.div`
display: flex;
flex-direction: row;
border-radius: 25px;
width: 70%;
margin:10px auto;
border: 1px solid #ccc;
background-color: #fff;
.item{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 10px;
}

img{
    width: 100px;

}

`;