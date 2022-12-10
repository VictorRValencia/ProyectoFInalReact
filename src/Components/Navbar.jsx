import React, {useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { NavBar, divNav, uls} from "./styled_component/nav";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  return (
    
    <nav style={{ width:"100%" , padding : "0" , margin : "0"}} >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

    <AppBar sx = {{ background : state.navbgColor, color : state.ftColor}} position="static">
          <Toolbar >
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <span style={{color : "red"}}>D</span>H ODONTO
            </Typography >
            <div style={{ display : "flex" }}>
              <Link to="/Home" style={{color : state.ftColor, margin : "0px 30px"}} ><strong>Home</strong></Link>
              <Link to="/Contacto" style={{color : state.ftColor,margin : "0px 30px"}} ><strong>Contacto</strong></Link>
              <Link to="/Favs" style={{color : state.ftColor,margin : "0px 30px"}}><strong>Favs</strong></Link>
            </div>
            <button style={{borderRadius:"10px"}} onClick={() => dispatch({ type: state.bgFlag })}>{state.bgFlag == "dark" ? <DarkModeIcon /> : <LightModeIcon />} </button>
          </Toolbar>
        </AppBar>
    </nav>
  );
};

export default Navbar;
