// Permite navegar de forma programada, para que cuando se pulse un botón o después de pasar una validación poder navegar a otra página
import { useNavigate } from "react-router-dom"

function NuevoCliente() {
  
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Rellena todos los campos para registrar un nuevo Cliente</p>
      <div className="flex justify-end">
        <button 
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded"
          onClick={() => navigate('/')}  
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <p>Formulario Aquí</p>
      </div>
    </>
  )
}

export default NuevoCliente