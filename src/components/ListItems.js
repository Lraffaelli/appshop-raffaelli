import { ListProductStyled } from "../styled-component/ListProductStyled.js";
import Items from "./Items.js";


const ListItems = ({ title, productos }) => {
  
  return (
    <ListProductStyled>
      <h2>{title}</h2>
      <div className="container">
      {productos.map((item) => {
        
          return<Items key={item.id} item={item}/>
       })}
      </div>
    </ListProductStyled>
  );
};
export default ListItems;
