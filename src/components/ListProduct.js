import { ListProductStyled } from "../styled-component/ListProductStyled.js";
import CardProduct from "./CardProduct.js";

const ListProduct = ({ title, items }) => {
  return (
    <ListProductStyled>
      <h2>{title}</h2>
      <div className="container">
      {items.map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
    </ListProductStyled>
  );
};
export default ListProduct;
