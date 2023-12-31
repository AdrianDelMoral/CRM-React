import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import { ObtenerClientes } from "../data/Clientes";

export function loader() {
  /**
   * Se encarga de obtener los clientes, y los loaders 
   * se encargan de tener sincronizado lo que tenemos en 
   * pantalla con nuestra api, no hace falta ir al state 
   * y que lo haga directamente
   **/
  const clientes = ObtenerClientes() 
  return clientes
}

function Index() {

  // Loader / useLoaderData-> cuando quieras obtener el resultado de un loader
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          
          <tbody>
            {clientes.map(cliente => (
            <Cliente 
              cliente={cliente} 
              key={cliente.id}
            />
              
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay clientes</p>
      )}
    </>
  )
}

export default Index