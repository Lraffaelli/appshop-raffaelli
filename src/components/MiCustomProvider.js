import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const MiCustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    if (carrito.find((x) => x.id === producto.id)) {
      const newCarro = carrito.map((x) =>
        x.id === producto.id ? { ...x, cantidad: x.cantidad + 1 } : x
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
  
  const eliminarProducto = (producto) => {
    const newCarrito = carrito.filter((item) => item.id !== producto.id);
    setCarrito(newCarrito);
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
