
const NavBar = () => {
  return (
    <>
    <div className="flex justify-around space-x-10 items-center mx-auto">
          <img className="w-32" src="200.png" alt="icon-image" />
          <div>
              <ul className="flex justify-center space-x-8">
              <li>Inicio</li>
              <li>Sobre nosotros</li>
              <li>Paginas</li>
              <li>Contacto</li>     
              </ul>
          </div>
          <div className="">
            <button>F</button>
            <button>I</button>
          </div>
          <div>
            <button className="bg-blue-500 text-white p-2 rounded-lg">Get Started</button>
          </div>
    </div>

    
    </>

  )
}

export default NavBar
