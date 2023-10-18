//import MiFieldset from "../MiFieldSet"
import DatosPersonales from "./DatosPersonales"
import DatosEscolares from "./DatosEscolares"
function Formulario(){
    return (
        <>
            <form action="">
              {/* <MiFieldset> titulo="Datos personales" texto1="Nombre" texto2="Password" />
              <MiFieldset titulo="Datos escolares" texto1="Carrera" texto2="Semestre" /> */}
              <DatosPersonales></DatosPersonales>
              <DatosEscolares></DatosEscolares>
              <input type="submit" value="Enviar datos"/>
            </form>  
        </>
    )
}
export default Formulario