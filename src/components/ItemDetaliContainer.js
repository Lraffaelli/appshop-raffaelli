import ItemDetails from "./ItemDetails";
import { useState, useEffect } from "react";
//import productosIniciales from "../productosIniciales.json";
import { useParams } from "react-router-dom";
import { db } from "./Firebase";
import {
  collection,
  getDoc,
  doc,  
} from "firebase/firestore";

const ItemDetaliContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const docResult = doc(productosCollection, id);
    const consulta = getDoc(docResult);

    consulta
      .then((resultado) => {
        const producto = resultado.data();
        //console.log(producto);

        setProducto(producto);
        setCargando(false);
      })
      .catch((error) => {console.log(error)})
      .finally(() => {});

    /* const result = productosIniciales.filter((producto) => {
      return producto.id == id;
    })[0];

    const getDetail = new Promise((res) => {
      setTimeout(() => {
        res(result);
      }, 2000);
    });
    getDetail.then(() => {
      setProducto(result);
      setCargando(false);
    }); */
  }, []);

  if (cargando) {
    return <h3>Cargando...</h3>;
  } else {
    return <ItemDetails producto={producto} />;
  }
};
export default ItemDetaliContainer;
