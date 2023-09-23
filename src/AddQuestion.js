import React from 'react';
import './css/AddQ.css';

export default function AddQuestion() {
  return (
    <div className='Add-container'>
      <form>
        <div className="card-Add">
          <div className="input-container">
            <input
              className='Add-Text'
              type="text"
              placeholder="Ingresar la preguntas deseada "
            />
          </div>
          <div className="grid-container">
            <input type="text" className="grid-item" placeholder="Respuesta 1" 
                          style={{
                            backgroundImage: 'url("https://img.icons8.com/plasticine/100/book.png")', // Ruta de la imagen
                            backgroundSize: '38px 38px',
                            backgroundRepeat: 'no-repeat',
                            paddingLeft: '10px',
                            backgroundPosition: 'left 10px bottom 10px'
                          }}
                          />
            <input type="text" className="grid-item" placeholder="Respuesta 2"
             style={{
                backgroundImage: 'url("https://img.icons8.com/color/48/square-root.png")', // Ruta de la imagen
                backgroundSize: '38px 38px',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '10px',
                backgroundPosition: 'left 10px bottom 10px'
              }}/>
            <input type="text" className="grid-item" placeholder="Respuesta 3" 
            style={{
                backgroundImage: 'url("https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/7950F2/external-poker-chip-casino-kiranshastry-solid-kiranshastry-5.png")', 
                backgroundSize: '38px 38px',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '10px',
                backgroundPosition: 'left 10px bottom 10px'
              }}/>
            
            <input type="text" className="grid-item" placeholder="Respuesta 4"
            style={{
                backgroundImage: 'url("https://img.icons8.com/arcade/64/movie-projector.png")', 
                backgroundSize: '38px 38px',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '10px',
                backgroundPosition: 'left 10px bottom 10px'
              }} />
          </div>
        </div>
      </form>
      <div className="centered-button">
        <input className='button-Add' type="button" value="+ Agregar otra pregunta" />
      </div>
    </div>
  );
}
