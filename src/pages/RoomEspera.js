import React from 'react'
import '../css/RoomEsp.css';
import foco from '../foco1.png';
import foco2 from '../foco2.png';
import '../css/bootstrap.css';
export default function RoomEspera() {
    return (
        <div className='container-Espera'>
            <img width="200" height="230" src={foco2} className='foco-image'/>
            {/* <img width="512" height="512" src="https://img.icons8.com/arcade/100/light.png" alt="light"/> */}
            <h1>!La proxima pregunta esta en camino¡</h1>
            <br/>
    <div class="grid-container">
        <div class="card">
            <h2 class="small-title">
            <img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-rabbit-animal-faces-icongeek26-flat-icongeek26.png" alt="external-rabbit-animal-faces-icongeek26-flat-icongeek26"/>Chino  100 pts</h2>
        </div>
        <div class="card">
            <h2 class="small-title"><img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-wolf-animal-faces-icongeek26-flat-icongeek26.png" alt="external-wolf-animal-faces-icongeek26-flat-icongeek26"/>Fernando  100 pts</h2>
            
        </div>
        <div class="card">
            <h2 class="small-title"><img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-dog-animal-faces-icongeek26-flat-icongeek26.png" alt="external-dog-animal-faces-icongeek26-flat-icongeek26"/>SAI  100 pts</h2>
            
        </div>
        <div class="card">
            <h2 class="small-title"> <img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-panda-animal-faces-icongeek26-flat-icongeek26.png" alt="external-panda-animal-faces-icongeek26-flat-icongeek26"/>Johann  100 pts</h2>
            
        </div>
        <div class="card">
            <h2 class="small-title"><img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-gorilla-animal-faces-icongeek26-flat-icongeek26.png" alt="external-gorilla-animal-faces-icongeek26-flat-icongeek26"/>Paula  100 pts</h2>
            
        </div>
        <div class="card">
            <h2 class="small-title"><img width="32" height="32" src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/external-cheetah-animal-faces-icongeek26-flat-icongeek26.png" alt="external-cheetah-animal-faces-icongeek26-flat-icongeek26"/>Faby  100 pts</h2>
            
        </div>
    </div>
        </div>
    );
}