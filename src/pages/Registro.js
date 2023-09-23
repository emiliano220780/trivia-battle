import React from 'react'
import '../css/registro.css';
export default function Registro() {
  return (
       <div className='container-Regis'>
    <form action="">
<div className='card-Regis'>
<input type='Email' className='' placeholder='Ingresar email..' required/>
<input type='text' className='' placeholder='Ingresar usuario..' required/>
<input type='password' className='' placeholder='Ingresar Contraseña..'required/>
<input type="button" value="REGISTRARSE" className='button-purple'/>
</div> 


</form>

</div>
  )
}
