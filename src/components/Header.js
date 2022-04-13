import Logo from "./Logo";
import NavBar from "./NavBar";
import { HeaderNav } from "../styled-component/HeaderNav";


const Header = () => {
  return (
    <HeaderNav>
      <Logo/>
      <NavBar/>
    </HeaderNav>
  );
};
export default Header;
