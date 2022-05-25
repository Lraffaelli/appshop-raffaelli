import { useContext } from "react";
import { Container } from "../styled-component/itemcarrito.style";
import { contexto } from "./MiCustomProvider";
const ItemCarrito = ({ producto }) => {
  const { eliminarProducto } = useContext(contexto);
  return (
    <Container>
      <div className="item">
        <img src={producto.image} alt="" />
        <h3>{producto.name}</h3>
        <p>{producto.cantidad}</p>
        <p>{producto.price}</p>
        <button onClick={eliminarProducto}>eliminar</button>
      </div>
    </Container>
  );
};
export default ItemCarrito;
