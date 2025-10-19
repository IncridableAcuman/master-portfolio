import { UseTheme } from "../../app/providers/ThemeProvider";
import Navbar from "../../components/shared/Navbar"
import './Service.css';

const Services = () => {
  const {theme} = UseTheme();
  return (
    <div className={`w-full min-h-screen ${theme === "light" ? "bg_color" : "bg-gray-900 text-white"}`}>
      <Navbar/>
      <div className="">

      </div>
    </div>
  )
}

export default Services