import { UseTheme } from "../../app/providers/ThemeProvider";
import Navbar from "../../components/shared/Navbar"
import "./Contact.css";
const Contact = () => {
    const {theme} = UseTheme();
  
  return (
    <div className={`w-full min-h-screen ${theme === "light" ? "bg_color" : "bg-gray-900 text-white"}`}>
      <Navbar/>
      
    </div>
  )
}

export default Contact