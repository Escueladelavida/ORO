import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
export default function SignUpPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [datos, setDatos] = useState({
    nameUser: "",
    firstName: "",
    lastname: "",
    password: "",
    email: "",
    identificacion: "",
    phoneNumber : "",
    addres: "",
    country: "",
    dateBirth : "",
    sex :"",
    


  });
  const options = [
    { value: "medico", label: "Medico", name: "adasd" },
    { value: "paciente", label: "Paciente" },
    { value: "secretaria", label: "Secretaria" },
  ];
  const option = [
    { value: "femenino", label: "Femenino" },
    { value: "masculino", label: "Masculino" },
  ];
  const handleInputChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  async function other(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "phoneNumber": datos.phoneNumber,
      "nameUser": datos.nameUser,
      "lastName":"datos.lastname",
      "password": datos.password,
      "email": datos.email,
      "identificacion": datos.identificacion,
      "addres": "datos.addres",
      "country": datos.country,
      "dateBirth": datos.dateBirth,
      "sex": "adasd",
      "firstName":datos.firstName
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://y802ko2n3c.execute-api.us-east-2.amazonaws.com/dev/users/authcode", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
    <div className="text-center m-5-auto">
      <h2>Registrarse</h2>
      <h5>Cree su cuenta personal</h5>
      <form action="/home" onSubmit={other}>
        <p>
          <label>Nombre De Usuario</label>
          <br />
          <input
            onChange={handleInputChange}
            type="text"
            
            name="nameUser"
            required
          />
        </p>
        <p>
          <label>Ciudad</label>
          <br />
          <input
            onChange={handleInputChange}
            type="text"
            name="country"
            required
          />
        </p>
        <p>
          <label>nombre</label>
          <br />
          <input
            onChange={handleInputChange}
            type="text"
            name="firstName"
            required
          />
        </p>

        <p>
          <label>Correo</label>
          <br />
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            required
          />
        </p>
        <p>
          <label>Cedula</label>
          <br />
          <input
            type="text"
            onChange={handleInputChange}
            name="identificacion"
            required
          />
        </p>
        <p>
          <label>Telefono</label>
          <br />
          <input
            type="text"
            onChange={handleInputChange}
            name="phoneNumber"
            required
          />
        </p>
        <p>
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            requiredc
          />
        </p>
        <p>
          <label>Fecha De Nacimiento</label>
          <br />
          <input
            type="date"
            onChange={handleInputChange}
            name="dateBirth"
            requiredc
          />
        </p>

        <p style={{ margin: 0 }}>
          <label style={{ marginLeft: -10 }}>Genero </label>
       
          <br />
          <label style={{ marginLeft: -10 }}>Tipo de usuario </label>
          <br />
          <Select options={option} />
          <br />
        </p>

        <p>
          <input
            type="checkbox"
            onChange={handleInputChange}
            name="checkbox"
            id="checkbox"
            required
          />{" "}
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Registro
          </button>
        </p>
      </form>

      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
