import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import productosIniciales from "../productosIniciales.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    if (nombreCategoria ==undefined) {
      const getDatos = new Promise((res) => {
        setTimeout(() => {
          res(productosIniciales);
        }, 2000);
      });

      getDatos.then(() => {
        setProductos(productosIniciales);
      });
    } else {
      const resultCategoria = productosIniciales.filter((producto) => {
        return producto.category == nombreCategoria;
      });

      const getCategoria = new Promise((res) => {
        setTimeout(() => {
          res(resultCategoria);
        }, 2000);
      });

      getCategoria.then(() => {
        setProductos(resultCategoria);
      });
    }
  }, [nombreCategoria]);

  return <ListItems title="Listado de Productos" productos={productos} />;
};
export default ItemListContainer;
