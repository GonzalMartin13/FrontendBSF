import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./views/About/About";

import Footer from "./components/Footer/Footer";
import CardContainer from "./components/CardContainer/CardContainer";
import Profile from "./views/Profile/Profile";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Comprobante from "./components/Compra/Comprobante";
import Mapa from "./components/Mapa/Mapa";
import Pdf from "./components/Pdf/Pdf";
import Email from "./components/Contact/Contact";
import MisEnvios from "./components/misEnvios/misEnvios";

import "./App.css";
/* import Compra from "./components/Compra/Compra";
import ComprobantePDF from "./components/Compra/ComprobantePDF"; */
import FormEnvio from "./components/FormEnvio/FormEnvio";

function App() {

  return (
    <>
      {location.pathname !== "/register" && <NavBar />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cotizacion" element={<QuoteForm />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacto" element={<Email />} />
        <Route exact path="/payment" element={<About />} />
        <Route exact path="/servicios" element={<CardContainer />} />
        <Route exact path="/sucursales" element={<Mapa />} />
        <Route exact path="/envios" element={<MisEnvios />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/guia" element={<Pdf />} />
        <Route exact path="/confirmacion" element={<FormEnvio />} />
        <Route exact path="/factura" element={<Comprobante />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
