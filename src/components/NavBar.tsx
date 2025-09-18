import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


const NavBar = () => {
  return (
    <>
    <div className="flex justify-between px-12 max-w-[1400px] items-center mx-auto">
          <img className="w-20 cursor-pointer" src="200.png" alt="icon-image" />
          <div className="flex space-x-[8rem]">
              <ul className="flex justify-center space-x-[5rem] cursor-pointer">
              <li>Inicio</li>
              <li>Sobre nosotros</li>
              <li>Paginas</li>
              <li>Contacto</li>     
              </ul>

                       <div className="">
                       <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl cursor-pointer" />
                       <FontAwesomeIcon icon={faInstagram} className="text-purple-600 text-xl cursor-pointer mx-4" />
          </div>
          <div>
            <button className="bg-transparent-500 text-black border-2 p-2 rounded-[20px]">Contactanos</button>
          </div>
          </div>
 
    </div>

    
    </>

  )
}

export default NavBar
