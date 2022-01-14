import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../App.css";
import Select from "react-select";
export default function SignInPage() {
  const options = [
    { value: "medico", label: "Medico" },
    { value: "paciente", label: "Paciente" },
    { value: "secretaria", label: "Secretaria" },
  ];
  const option = [
    { value: "femenino", label: "Femenino" },
    { value: "masculino", label: "Masculino" },
  ];
  const [datos, setDatos] = useState({
    nameUser: "",

    password: "",
  });
  const handleInputChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  async function entrar(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "nameUser": datos.nameUser,
      "password": datos.password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://y802ko2n3c.execute-api.us-east-2.amazonaws.com/dev/users/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <div className="text-center m-5-auto">
      <h2>Ingreso</h2>
      <form action="/home" onSubmit={entrar}>
        <p>
          <label>Usuario</label>
          <br />
          <input
            type="text"
            onChange={handleInputChange}
            name="nameUser"
            required
          />
        </p>
        <p>
          <label>Contraseña</label>
          <Link to="/register">
            <label className="right-label">Recordar contraseña?</label>
          </Link>
          <br />
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            required
          />
        </p>
        <p>
     
        </p>
        <p>
          <button
            id="sub_btn"
            onClick={() => console.log("estos")}
            type="submit"
          >
            Ingresar
          </button>
        </p>
      </form>
      <footer>
        <p>
        Primera vez? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Pagina de inicio</Link>.
        </p>
      </footer>
    </div>
  );
}
