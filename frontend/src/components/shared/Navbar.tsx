import { Link, useNavigate } from 'react-router-dom';
import {} from 'lucide-react';
import { Button } from '../ui/button';
import '../../app/styles/Global.css';
import { UseTheme } from '../../app/providers/ThemeProvider';
const Navbar = () => {
  const {theme,toggleTheme}=UseTheme();
  const navigate=useNavigate();
  return (
    <div className={`fixed top-0 left-0 w-full flex items-center justify-between pdg bg-gradient-to-b from-[#e0e0e0]`}>
      <h1 className='text-lg md:text-3xl font-semibold cursor-pointer text-blue-500' onClick={()=>navigate("/")}>Izzatbek.</h1>
      <div className="flex items-center gap-3">
        <Link to={"/"} className='hover:text-blue-500 transition duration-300'>Home</Link>
        <Link to={"/about"} className='hover:text-blue-500 transition duration-300'>About</Link>
        <Link to={"/service"} className='hover:text-blue-500 transition duration-300'>Service</Link>
        <Link to={"/projects"} className='hover:text-blue-500 transition duration-300'>Projects</Link>
        <Link to={"/contact"} className='hover:text-blue-500 transition duration-300'>Contact</Link>
      </div>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <button onClick={toggleTheme}>
          {
          theme === "light" 
          ? (
              <img src="./moon_icon.png" alt="moon" className='w-6 cursor-pointer' />
          ) : (
            <img src="./sun_icon.png" alt="moon" className='w-6 cursor-pointer' />
          )
        }
        </button>
        <Button className='text-sm group relative px-6 py-3 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500
         text-white shadow-md cursor-pointer  hover:text-white hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600 transition-all duration-300
          hover:-translate-y-0.5 active:translate-y-0' variant={'outline'} >
          <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
          Connect
          <img src="./arrow-icon-dark.png" alt="arrow" className='w-3 transition-transform duration-300 group-hover:translate-x-1' />
        </Button>
      </div>
    </div>
  )
}

export default Navbar