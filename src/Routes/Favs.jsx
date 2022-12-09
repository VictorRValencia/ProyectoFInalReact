import React , {useState, useEffect}from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorage";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState(null);
  //const localFavs = getFavFromStorage();

  useEffect(() => {
    setFavs(getFavFromStorage());
  }, [])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs
          ? favs.map((dentistFav) => (
              <Card {...dentistFav} key={dentistFav.id} />
            ))
          : null}
      </div>
    </>
  );
};

export default Favs;
