import { useState } from 'react';

function App() {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handleEmailChanges = ({target : {value}}) => {
    setemail(value)
  }

  const handlePasswordChanges = ({target : {value}}) => {
    setpassword(value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    window.alert(`El usuario ingresado es ${email}, con contraseña ${password}`)
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2> Iniciar Sesion </h2>
        <label>
          Correo
          <input type="email" value={email} onChange = {handleEmailChanges}></input>
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange = {handlePasswordChanges}></input>
        </label>
        <button type= "submit">
          Enviar
        </button>
      </form>

    </div>
  );
}

export default App;
