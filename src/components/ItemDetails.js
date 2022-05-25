import { ItemDetail } from "../styled-component/ItemDetail.style";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./MiCustomProvider";
import Counter from "./Counter";

/* const agregarProducto = () => {
  if(carrito.length==0){
    setCarrito([...carrito,producto])
  }
  console.log(carrito)
  return carrito
 };  */
const ItemDetails = ({producto}) => {

  const { agregarProducto } = useContext(contexto)

  const cuotas = ()=>{   
    const result =(producto.price/12).toFixed(2)
    return result    
  }
  return (
    <ItemDetail>
      <img src={producto.image} alt={producto.id} />
      <div className="detail-container">
        <h3 className="title">{producto.name}</h3>
        <p className="price">
        ${producto.price}
        </p>
        <p className="cuotas">{`en 12x $${cuotas()}`}</p>
        <p className="detail">{producto.detail}</p>
        <Link to={`/carrito`} className="btn-comprar"> Comprar ahora </Link>
        <Counter init={1} stock={producto.stock}/>
        <button className="btn-add" onClick={()=> agregarProducto(producto)}>Agregar al Carro</button>
      </div>
    </ItemDetail>
  );
};
export default ItemDetails;
