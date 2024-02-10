import './App.css'
import escudo from './images/escudo.jpg'
function App() {
 const tareas =['tarea1', 'tarea2', 'tarea3']
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
        {tareas.map((value, index)=>(
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>

  </>  
  )
}

export default App
