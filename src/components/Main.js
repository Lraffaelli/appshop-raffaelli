import ItemDetaliContainer from "./ItemDetaliContainer";
import ItemListContainer from "./ItemListContainer";
import { Routes,Route } from "react-router-dom";

/*
/
/categorias/:nombreCategoria
/producto/:id

*/
const productosIniciales = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      stock: 9,
      image: "/productos/item_1.png",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 130,
      stock: 5,
      image: "/productos/item_2.png",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 90,
      stock: 10,
      image: "/productos/item_3.png",
    },
    {
      id: 4,
      name: "Producto 4",
      price: 125,
      stock: 7,
      image: "/productos/item_4.png",
    },
    {
      id: 5,
      name: "Producto 5",
      price: 133,
      stock: 4,
      image: "/productos/item_5.png",
    },
    {
      id: 6,
      name: "Producto 6",
      price: 176,
      stock: 8,
      image: "/productos/item_6.png",
    },
  ];

const Main = () => {
  return (

    <Routes productosIniciales={productosIniciales}>
        <Route path="/" element={<ItemListContainer/>}/>
        {/* <Route path="/producto/:nombreCategoria" element={}/> */}
        <Route path="/producto/:id" element={<ItemDetaliContainer/>}/>
        {/* <Route path="/carrito" element={}/> */}

    </Routes>
    
  );
};
export default Main;
