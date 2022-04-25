import Counter from "./Counter";
import { CardItem } from "../styled-component/CardItem.style";

const CardProduct = ({ item }) => {
  return (
    <CardItem>
      <img src={item.image} alt={item.id} />
      <h3>{item.name}</h3>
      <p className="price">
        Precio: <span>${item.price}</span>
      </p>
      <Counter init={0} stock={item.stock} />
    </CardItem>
  );
};
export default CardProduct;
