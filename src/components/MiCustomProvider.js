import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;


const MiCustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    if (carrito.find((x) => x.name === producto.name)) {
      const newCarro = carrito.map((x) =>
        x.name === producto.name ? { ...x, cantidad: x.cantidad + 1 } : x
      );
      return setCarrito(newCarro);
    } else {
      return setCarrito(
        carrito.concat({
          ...producto,
          cantidad: 1,
        })
      );
    }
  };
  console.log(carrito);
  const eliminarProducto = (name) => {
    const newCart = [...carrito].map(element => element.name !== name);
    setCarrito(newCart);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const valorDelContexto = {
    carrito,
    agregarProducto,
    eliminarProducto,
    vaciarCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};
export default MiCustomProvider;
