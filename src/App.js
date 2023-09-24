import logo from './logo.svg';
import './css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BodyLayout from './BodyLayout.js';
/* Paginas webs */
import Login from './pages/LoginRoom.js';
import UnirseSala from './pages/UnirseSala.js';
import WorldScore from './pages/WorldScore';
import RoomEspera from './pages/RoomEspera';
import Registro from './pages/Registro';
import AddQuestion from './AddQuestion';

function App() {
  return (
    <div class="container-principal">
    <nav class="navbar navbar-expand-lg bg-body-tertiary my-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" >Trivia battle</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">WorldScore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Agregar pregunta</a>
        </li>
        <li class="nav-item move-right">
          <a class="nav-link nav-right" aria-disabled="true">Crear sala</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    {/* <Route
					path="/UnirseSala.js"
					element={
						<BodyLayout backgroundColor="#d86aff">
							<UnirseSala />
						</BodyLayout>
					}
					exact
				/> */}

         {/* <BodyLayout backgroundColor="#450264c2">
							<UnirseSala />
						</BodyLayout>  */}
             <BodyLayout backgroundColor="#cb3cfff5">
							<WorldScore />
          </BodyLayout>
             {/* <BodyLayout backgroundColor="#D86AFF">
							<Login/>
						</BodyLayout> */}
            {/* <BodyLayout backgroundColor="#450264c2">
							<RoomEspera />
						</BodyLayout>  */}
             {/* <BodyLayout backgroundColor="#D86AFF">
							<Registro />
						</BodyLayout>  */}
             {/* <BodyLayout backgroundColor="#6c40af">
							<AddQuestion />
						</BodyLayout>  */}
</div>

  );
}

export default App;
