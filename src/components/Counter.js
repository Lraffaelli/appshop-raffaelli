import { CounterStyle } from "../styled-component/Counter.style";
import { useState } from "react";
const Counter = ({ init, stock }) => {
  const [count, setCount] = useState(init);
  const handleIncrement = () => {
    count < stock ? setCount(count + 1): setCount(stock)};
  const handleDecrement = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

  return (
    <CounterStyle>
        <span>Contador</span>  
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className="btn-add">Agregar al Carro</button>
    </CounterStyle>
  );
};
export default Counter;
