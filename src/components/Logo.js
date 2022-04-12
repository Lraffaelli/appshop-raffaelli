import Logotipo from "../img/logo.png";
const styles={
    logo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        
    },
    img:{
        width: '60px',
        height: '60px',
        marginRight: '10px',     
    }

}
const Logo = () => {
  return (
    <div style={styles.logo}>
      <img src={Logotipo} alt="Logotipo" style={styles.img}/>
      <h1>AppShop</h1>
    </div>
  );
};
export default Logo;
