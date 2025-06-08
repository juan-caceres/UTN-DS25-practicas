import fondo from '../assets/imagenLibros.jpg';
import logo from '../assets/LogoLibreria.jpg';
export default function Cabecera(){
    return(
        
        <div style={{
            backgroundImage:`url(${fondo})`,
            backgroundsize:'cover',
            backgroundPosition:'center',
            position:"relative",
            justifyItems:"center",
        }}
        >
            <img style={{
                fontFamily:"serif",
                borderRadius:"50px",
                margin:"10px",
                opacity:"80%",
                width:"80px",
            }} src={logo} alt="logoLibreria" />
            <h1 style={{fontFamily:"serif"}}>Ágora</h1>
        </div>


    );
}