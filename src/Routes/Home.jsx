import React, { useState, useContext } from "react";
import Card from "../Components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { ContextGlobal } from "../Components/utils/global.context"
// import { ContextProvider } from "./Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}

        {state.data ? (
          state.data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              username={item.username}
              id={item.id}
            />
          ))
        ) : (
          <CircularProgress color="secondary" />
        )}
      </div>
    </main>
  );
};

export default Home;
