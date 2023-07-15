import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'https://raw.githubusercontent.com/eleazarcaqui/offline/master/services.json'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)
  }
 
   const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
   console.log(results)
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
    return (
        <section id='services' className='h-180'>
            <div className='flex flex-col items-center justify-center w-3/4 mx-auto mt-20 mb-10 gap-4'>
                <h2 className="text-2xl mb-4 text-cente text-[40px] font-black">
                    ¡Encuentra el servicio digital perfecto!
                </h2>
                <p className="text-center mb-4 text-xl text-gray-500">
                    Ingresa el nombre o término relacionado al servicio que estás buscando:
                </p>
                <input value={search} onChange={searcher} type="text" placeholder='Search' className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <div className="max-h-80 overflow-y-auto">
                    <table className='table-auto border border-gray-300'>
                    <thead className='sticky top-0 bg-006691 z-10'>
                            <tr className='bg-curso text-white gap-4'>
                                <th className="pr-8 border border-gray-300">SERVICIO</th>
                                <th className="pr-8 border border-gray-300">DESCRIPCIÓN</th>
                                <th className="pr-8 border border-gray-300">PRECIO</th>
                                <th className="pr-8 border border-gray-300">MONEDA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((user) => (
                                <tr key={user.id}>
                                    <td className="pl-4 pr-4 py-2 border-b border-gray-300">{user.nombre}</td>
                                    <td className="pr-4 py-2 border-b border-gray-300">{user.descripcion}</td>
                                    <td className="pr-4 py-2 border-b border-gray-300">{user.precio}</td>
                                    <td className="py-2 border-b border-gray-300">{user.moneda}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default SearchComponent