import { Nav } from "../styled-component/Nav"
import { Alink } from "../styled-component/Alink"


const NavBar = () => {
  return (
    <Nav>
        <Alink ><a href="#">Home</a></Alink>
        <Alink ><a href="#">Productos</a></Alink>
        <Alink ><a href="#">New Arrived</a></Alink>
        <Alink ><a href="#">Contacto </a></Alink>
    </Nav>
  )
}
export default NavBar