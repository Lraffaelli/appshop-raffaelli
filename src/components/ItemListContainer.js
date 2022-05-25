import { useEffect, useState } from "react";
import ListItems from "./ListItems";
//import productosIniciales from "../productosIniciales.json";
import { useParams } from "react-router-dom";

import { db } from "./Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    /* if (nombreCategoria ==undefined) {
      const getDatos = new Promise((res) => {
        setTimeout(() => {
          res(productosIniciales);
        }, 2000);
      });

      getDatos.then(() => {
        setProductos(productosIniciales);
        setCargando(false)
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
        setCargando(false)
      });
    } */

    const productosCollection = collection(db, "productos");
    if (nombreCategoria == undefined) {
      const consulta = getDocs(productosCollection);
      consulta
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => {
            const productoConId = doc.data();

            productoConId.id = doc.id;
            return productoConId;
          });

          setProductos(productos);
          setCargando(false);
        })
        .catch((error) => {})
        .finally(() => {});
    } else {
      const queryCategory = query(
        productosCollection,
        where("category", "==", nombreCategoria)
      );
      const consultaCategory = getDocs(queryCategory);
      consultaCategory
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => {
            const productoConId = doc.data();
            productoConId.id = doc.id;
            return productoConId;
          });

          setProductos(productos);
          setCargando(false);
        })
        .catch((error) => {})
        .finally(() => {});
    }
  }, [nombreCategoria]);

  if (cargando) {
    return <h3>Cargando...</h3>;
  } else {
    return <ListItems title="Listado de Productos" productos={productos} />;
  }
};
export default ItemListContainer;
