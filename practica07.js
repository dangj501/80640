const app = document.getElementById("app");
  const Picture = (parametros) => {
        return `
        <fieldset>
          <legend>${parametros.leyenda}</legend>
          <label for="user">${parametros.texto1}</label>
          <input type="text" id="user" name="user">
          <label for="pas">${parametros.texto2}</label>
          <input type="text" id="pas" name="pas">
        </fieldset>
        `;
      };
      app.innerHTML = Picture({leyenda:"Informacion Personal", texto1:"Nombre de Usuario", texto2:"Correo Electronico"});
      app.innerHTML += Picture({leyenda:"Informacion de Dirección", texto1:"Dirección", texto2:"Ciudad"});


const formulario = document.getElementById("boton")
formulario.addEventListener("click", evento=>{
  evento.preventDefault()
  let u = document.getElementById("user").value
  let p = document.getElementById("pas").value
  alert(u +p)
  })