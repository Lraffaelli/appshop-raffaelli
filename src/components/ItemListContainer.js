import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import productosIniciales from '../productosIniciales.json'


const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])

useEffect(() => {
  const getDatos = new Promise((res,)=>{
      setTimeout(()=>{
        res(productosIniciales)
      },2000)
    })
  
  getDatos
    .then(()=>{
     setProductos(productosIniciales)
     console.log(productosIniciales)
    })
 
}, []);


    return( <ListItems title="Listado de Productos" productos={productos} />)
};
export default ItemListContainer;
