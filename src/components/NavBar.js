import { Nav } from "../styled-component/Nav"
import { Alink } from "../styled-component/Alink"


const NavBar = () => {
  return (
    <Nav>
        <Alink href="#">Home</Alink>
        <Alink href="#">Productos</Alink>
        <Alink href="#">New Arrived</Alink>
        <Alink href="#">Contacto</Alink>
    </Nav>
  )
}
export default NavBar