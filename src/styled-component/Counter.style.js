import styled from "styled-components";

export const CounterStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f3f4;

  .stock{
    font-size: 0.7rem;
    color: #6b0101;
}
  
  .counter {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      width: 120px;
      border: 1px solid #d3d3d3;
      margin: 5px 10px;
      border-radius: 5px;
      background-color: #fff;

    p {
      width: 50px;
      height: 25px;
      text-align: center;
    }
    button {
      height:30px;
      width:30px;
      background-color: #fff;
      border: none;
      color: #000;
      background-color: #d3d3d3;
      cursor: pointer;
      font-size: 15px;
      
      
      &:hover{
          color: #1976d2;
          font-weight: bold;
      }
    }
    
  }
  .btn-add{
      background-color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      color: #1976d2;
      border: 1px solid #1976d2;
      transition: all 300ms;
      
      &:hover{
          transform: scale(0.95);
          background-color: #1976d2;
          color: #fff;
          cursor: pointer;
    }
  }
  
`;
