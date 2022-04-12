import Logo from "./Logo";
import NavBar from "./NavBar";


const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    height: 100,
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    padding:'0 20px',
  },
};
const Header = () => {
  return (
    <header style={styles.header}>
      <Logo/>
      <NavBar/>
    </header>
  );
};
export default Header;
