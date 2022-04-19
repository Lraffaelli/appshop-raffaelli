import Logo from "./Logo";
import NavBar from "./NavBar";
import { HeaderNav } from "../styled-component/HeaderNav";
import CartWidget from "./CartWidget";


const Header = () => {
  return (
    <HeaderNav>
      <Logo/>
      <NavBar/>
      <CartWidget/>
    </HeaderNav>
  );
};
export default Header;
