import { ListProductStyled } from "../styled-component/ListProductStyled.js";
import CardProduct from "./CardProduct.js";

const ListProduct = ({title}) => {
 
  return (
    <ListProductStyled>
      <h2>{title}</h2>
      <CardProduct />
    </ListProductStyled>
  );
};
export default ListProduct;
