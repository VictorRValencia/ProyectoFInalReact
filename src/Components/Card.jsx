import * as React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { setFavInStorage, removeFavInStorage } from "./utils/localStorage";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [favorito, setFavorito] = useState(false);

  const addFav = () => {
    const fav = setFavInStorage({ name, username, id });
    esFavorito(fav);
  };
  const removeFav = () => {
    const fav = removeFavInStorage(id);
    esFavorito(fav);
  };

  const esFavorito = (favorite) => {
    setFavorito(favorite);
  };

  return (
    <div className="card"  >
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src="./images/doctor.jpg" alt="imageDoctor"  />
      <Link to={`/dentista/${id}`}>
      <h2>
        {name}
      </h2>
      </Link>
      <h5>
        {username}
      </h5>
      <button
            onClick={favorito ? removeFav : addFav}
            className="favButton"  
          >
            ⭐
          </button>
      
    </div>
  );
};

export default Card;
