import React from 'react'
import '../css/bootstrap.css';
import '../css/WorldScore.css';
import imagendegay from '../bronce.png';
import plata from '../plata.png';
export default function WorldScore() {
    return (
    <div className='WorldScore'>
        <i><h1 className='Tittle-WS'>
        <img width="64" height="64" src="https://img.icons8.com/arcade/64/medal.png" alt="medal"/>
        LEADER BOARD<img width="64" height="64" src="https://img.icons8.com/arcade/64/medal.png" alt="medal"/>
        </h1></i>
        <div className='card-principal'>
            
            <div className='card-secondary'>
                
            <table class="table table-hover table-striped">
  <thead>
    <tr   className='table-warning'>
      <th scope="col">Posicion</th>
      <th scope="col">icon</th>
      <th scope="col">Name</th>
      <th scope="col">puntaje</th>
    </tr>
  </thead>
  <tbody>
    <tr className='celda-pink'>
      <th scope="row"><img width="32" height="32" src="https://img.icons8.com/arcade/64/medal.png" alt="medal"/>
      </th>
      <td>
        <img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-wolf-animal-faces-icongeek26-flat-icongeek26.png" alt="external-wolf-animal-faces-icongeek26-flat-icongeek26"/>

      </td>
      <td>Fernando</td>
      <td>1000 pts.</td>
    </tr>
    <tr className='table-warning'>
      <th scope="row">
        <img width="40" height="40" src={plata}/>
        </th>
      <td><img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-rabbit-animal-faces-icongeek26-flat-icongeek26.png" alt="external-rabbit-animal-faces-icongeek26-flat-icongeek26"/></td>
      <td>Chino</td>
      <td>1000 pts.</td>
    </tr>
    <tr>
      <th  className='celda-pink' scope="row">      <img src={imagendegay} width="26" height="34" /></th>
      <td><img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-dog-animal-faces-icongeek26-flat-icongeek26.png" alt="external-dog-animal-faces-icongeek26-flat-icongeek26"/>
      </td>
      <td>SAI</td>
      <td>800 pts.</td>
    </tr>
    <tr className='table-warning'>
      <th scope="row">4</th>
      <td>
      <img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-panda-animal-faces-icongeek26-flat-icongeek26.png" alt="external-panda-animal-faces-icongeek26-flat-icongeek26"/>
      </td>
      <td>Johann</td>
      <td>630 pts.</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>

        <img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-gorilla-animal-faces-icongeek26-flat-icongeek26.png" alt="external-gorilla-animal-faces-icongeek26-flat-icongeek26"/>
        </td>
      <td>Paula</td>
      <td>500 pts.</td>
    </tr>
    <tr className='table-warning'>
      <th scope="row">6</th>
      <td>        
        <img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/external-cheetah-animal-faces-icongeek26-flat-icongeek26.png" alt="external-cheetah-animal-faces-icongeek26-flat-icongeek26"/>
      </td>
      <td>Faby</td>
      <td>400 pts.</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
        {/*  */}
    </div>
    );
}
