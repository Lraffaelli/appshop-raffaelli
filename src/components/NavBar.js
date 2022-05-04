import { Nav } from "../styled-component/Nav"
import { Alink } from "../styled-component/Alink"
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <Nav>
        <Alink ><NavLink to="/">Home</NavLink></Alink>
        <Alink ><NavLink to="/productos">Productos</NavLink></Alink>
        <Alink ><NavLink to="/productos/electronicos">Electronicos</NavLink></Alink>
        <Alink ><NavLink to="/productos/alimentos">Alimentos </NavLink></Alink>
        <Alink ><NavLink to="/productos/ropa">Ropa </NavLink></Alink>
    </Nav>
  )
}
export default NavBar