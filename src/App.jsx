import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useEffect, useContext } from "react";
import Home from "./Routes/Home";
import ContactoPage from "./Routes/Contact";
import FavsPage from "./Routes/Favs";
import DetailPage from "./Routes/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/Layout";

// import { ContextGlobal } from './Components/utils/global.context';

function App() {
  // const location = useLocation();
  // const navigate = useNavigate();
  // // const { theme } = useContext(ContextGlobal)

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     navigate("/home");
  //   }
  // });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route index path="/Home" element={<Home />} />
            <Route path="/Contacto" element={<ContactoPage />} />
            <Route path="/dentista/:id" element={<DetailPage />} />
            <Route path="/Favs" element={<FavsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
