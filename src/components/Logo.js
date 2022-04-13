import Logotipo from "../img/logo.png";
import { DivLogo } from "../styled-component/DivLogo";
import { ImgLogo } from "../styled-component/ImgLogo";

const Logo = () => {
  return (
    <DivLogo>
      <ImgLogo src={Logotipo} alt="Logotipo" />
      <h1>AppShop</h1>
    </DivLogo>
  );
};
export default Logo;
