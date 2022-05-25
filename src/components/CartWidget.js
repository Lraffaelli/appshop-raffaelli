import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cart } from "../styled-component/Cart";
const CartWidget = () => {
  return (
      <Cart>
        <Link to={`/carrito`} className="btn-comprar"> <FaCartArrowDown/> </Link>
          
      </Cart>
  )
}
export default CartWidget