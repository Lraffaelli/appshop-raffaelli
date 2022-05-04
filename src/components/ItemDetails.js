import { ItemDetail } from "../styled-component/ItemDetail.style";

const ItemDetails = ({producto}) => {
  return (
    <ItemDetail>
      <h3>{producto.name}</h3>
      <img src={producto.image} alt={producto.id} />
      <p className="price">
        Precio: <span>${producto.price}</span>
      </p>
      <p>{producto.detail}</p>
    </ItemDetail>
  )
}
export default ItemDetails