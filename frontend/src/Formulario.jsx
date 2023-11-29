import React, { useState } from 'react';
import axios from 'axios';
import Imagen from './Imagen.webp';
import './frontend.css';
import './normalizes.css';

function Formulario() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    apellidoM: '',
    apellidoP: '',
  });

 
  const hacerPeticion = async (e) =>{
    try {
        if(e==1){
            const response = await axios.get('http://localhost:4567/insertar',{params:datosFormulario})
            return response.data
        }
        if(e==2){
            const response = await axios.get('http://localhost:4567/consultar',{params:datosFormulario})
            return response.data
        }
        if(e==3){
            const response = await axios.delete('http://localhost:4567/borrar',{params:datosFormulario})
            return response.data
        }
        if(e==4){
            const response = await axios.get('http://localhost:4567/editar',{params:datosFormulario})
            return response.data
        }
    } catch (error) {
        throw error
    }
}

  const procesarFormulario = async (evento) => {
    evento.preventDefault();
    console.log(
      'Datos recuperados del formulario: ',
      datosFormulario.nombre + ' ' + datosFormulario.apellidoP + ' ' + datosFormulario.apellidoM
    );
    try {
      const response = await hacerPeticion(1);
      console.log(response);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const insertar = async (evento) => {
    evento.preventDefault();
    try {
      const response = await hacerPeticion(1);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const consultar = async (evento)=>{
    evento.preventDefault()
    try {
        const response = await hacerPeticion(2)
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

  const borrar = async (evento) => {
    evento.preventDefault();
    try {
      const response = await hacerPeticion(3);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editar = async (evento) => {
    evento.preventDefault();
    try {
      const response = await hacerPeticion(4);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const cambiosFomulario = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  return (
    <div className="flex-container-form">
      <form className="form" onSubmit={procesarFormulario}>
        <div className="form__section">
          <input
            type="text"
            name="nombre"
            variant="outlined"
            onChange={cambiosFomulario}
            className="form__input"
            placeholder="Nombre"
            value={datosFormulario.nombre}
          />
        </div>
        <div className="form__section">
          <input
            type="text"
            name="apellidoP"
            variant="outlined"
            onChange={cambiosFomulario}
            className="form__input"
            placeholder="Apellido paterno"
            value={datosFormulario.apellidoP}
          />
        </div>
        <div className="form__section">
          <input
            type="text"
            name="apellidoM"
            variant="outlined"
            onChange={cambiosFomulario}
            className="form__input"
            placeholder="Apellido materno"
            value={datosFormulario.apellidoM}
          />
        </div>
        <div className="form__section">
          <button type="button" className="form__input" onClick={insertar}>
            Insertar
          </button>
        </div>
        <div className="form__section">
          <button type="button" className="form__input" onClick={consultar}>
            Consultar
          </button>
        </div>
        <div className="form__section">
          <button type="button" className="form__input" onClick={borrar}>
            Borrar
          </button>
        </div>
        <div className="form__section">
          <button type="button" className="form__input" onClick={editar}>
            Editar
          </button>
        </div>
      </form>
      <div>
        <div className="img-container">
          <div className="form-img">
            <img src={Imagen} alt="Imagen" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
