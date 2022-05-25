import styled from "styled-components";

export const ItemDetail=styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 30px auto;
padding: 20px 10px;
width: 50%;
height: fit-content;
border-radius: 10px;
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
background-color: #fff;
img{
    margin: 0 10px;
    width: 300px;
}
.detail-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin:10px 20px;
    padding: 20px 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 25px;
    min-width: 200px;
    max-width: 35%;
    .title{
        margin: 5px;
    }
    .price{
        font-size: 36px;
        font-weight: lighter;
        margin: 5px;
    }
    .cuotas{
        font-size: 18px;
        margin: 0;
    }
    .btn-comprar{
        text-decoration: none;
        width: 75%;
        font-size: 15px;
        background-color:#3483FA ;
        color: #fff;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
        transition: all 300ms;
        &:hover{
            background-color: #2968C8;

        }
        
    }


    p{
        width: 80%;
        font-size: 13px;
    }
}


`;