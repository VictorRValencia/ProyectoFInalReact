import * as React from "react";
import { useContext, useState } from "react";
import CardMUI from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import { setFavInStorage, removeFavInStorage } from "./utils/localStorage";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [favorite, setFavorite] = useState(false);

  const addFav = () => {
    const fav = setFavInStorage({ name, username, id });
    isFav(fav);
    // Aqui iria la logica para agregar la Card en el localStorage
  };
  const removeFav = () => {
    const fav = removeFavInStorage(id);
    isFav(fav);
  };

  const isFav = (fav) => {
    setFavorite(fav);
  };

  return (
    <div className="card" >
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src="./images/doctor.jpg" alt="imgDoctor"  />
      <Link to={`/dentista/${id}`}>
      <h2>
        {name}
      </h2>
      </Link>
      <h5>
        {username}
      </h5>
      <button
            onClick={favorite ? removeFav : addFav}
            className="favButton"  
          >
            <GradeIcon />
          </button>
      
    </div>
  );
};

export default Card;
