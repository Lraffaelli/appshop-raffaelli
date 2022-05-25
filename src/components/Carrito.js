import ItemCarrito from "./ItemCarrito";
import { useContext } from "react";
import { contexto } from "./MiCustomProvider";

const Carrito = () => {
  const { carrito } = useContext(contexto);
  return (
    <div>
      <div>
        {carrito.map((producto) => {
          return <ItemCarrito key={producto.name} producto={producto} />;
        })}
      </div>
    </div>
  );
};
export default Carrito;
