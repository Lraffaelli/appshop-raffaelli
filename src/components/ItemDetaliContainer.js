import ItemDetails from "./ItemDetails";
import { useState, useEffect } from "react";
import productosIniciales from "../productosIniciales.json";
import { useParams } from "react-router-dom";
const ItemDetaliContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const result = productosIniciales.filter((producto) => {
      return producto.id == id;
    })[0];

    const getDetail = new Promise((res) => {
      setTimeout(() => {
        res(result);
      }, 2000);
    });
    getDetail.then(() => {
      setProducto(result);
      setCargando(false)
    });
  }, []);

  if (cargando) {
    return <h3>Cargando...</h3>;
  } else {
    return <ItemDetails producto={producto} />;
  }
};
export default ItemDetaliContainer;
