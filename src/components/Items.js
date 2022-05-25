import Counter from "./Counter";
import { CardItem } from "../styled-component/CardItem.style";
import { Link } from "react-router-dom"


const Items = ({ item,handleDetail }) => {
  return (
    <CardItem>
      <img src={item.image} alt={item.id} />
      <h3>{item.name}</h3>
      <p className="price">
        Precio: <span>${item.price}</span>
      </p>
        <Link to={`/producto/${item.id}`} className="btnDetalle" onClick={handleDetail}>Ver detalle</Link>
      {/* <Counter init={0} stock={item.stock} /> */}
    </CardItem>
  );
};
export default Items;
