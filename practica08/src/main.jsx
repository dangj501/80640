import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";

//import MiFieldSet from "./MiFieldSet.jsx";
import Formulario from "./Formulario.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <form action=""}>
    <MiFieldSet titulo="Datos Personales" texto1="Nombre" texto2="Password" />
    <MiFieldSet titulo="Datos Escolares" texto1="Carrera" texto2="Semestre"/>
    <input>type="submit" value="Enviar datos"</input>
    </form> */}
    <Formulario></Formulario>
    </React.StrictMode>
)