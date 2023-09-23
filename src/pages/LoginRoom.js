import React from 'react';
import '../css/login.css';
export default function LoginRoom() {
  return (
    <div className='container-login'>
    <form action="">
      <div className='card-login'>
        <input type='text' className='' placeholder='Ingresar usuario..' required/>
        <input type='password' className='' placeholder='Ingresar Contraseña..' required/>
        <input type="button" value="Iniciar sesion" className='button-purple' required/>
      </div> 
    </form>

</div>
  )
}

