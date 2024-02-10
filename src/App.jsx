import './App.css'
import escudo from './images/escudo.jpg'
function App() {
  
  return (
  <>
    <div class='header'>
      <img src={escudo} class='esc'/>
      <h1>LISTA DE TAREAS DE LA PLANEACION</h1>
    </div>
    <div class='centrar'>
      <input class='input' placeholder='escribe tu nueva tarea'/>
      <button class='butti'>Nueva Tarea</button>
    </div>
    <div class='centrar'>
    <ul class='tareas'>
        <li>
          tarea 1
        </li>
        <li>
          tarea 2
        </li>
        <li>
          tarea 3
        </li>
      </ul>
    </div>

  </>  
  )
}

export default App
