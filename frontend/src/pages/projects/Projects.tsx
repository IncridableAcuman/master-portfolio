import { UseTheme } from "../../app/providers/ThemeProvider";
import Navbar from "../../components/shared/Navbar"
import "./Projects.css";
import "../../app/styles/Global.css";
import { Button } from "../../components/ui/button";
const Projects = () => {
  const {theme} = UseTheme();
  return (
    <div className={`w-full min-h-screen ${theme === "light" ? "bg-color" : "bg-gray-900 text-white"} pt-24`}>
      <Navbar/>
      <div className="pdg flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <img src="./pexels-cottonbro-5474027.jpg" 
        alt="pexels-cottonbro-5474027.jpg" className="w-full md:w-1/2 h-[30rem] object-cover rounded-lg shadow-md" />
        <div className="space-y-3">
          <p className="text-lg text-center">My Portfolio</p>
          <h1 className="text-center text-3xl md:text-5xl font-semibold">My latest work</h1>
          <p className="text-center">Welcome to my web development portfolio! Explore a collection of projects showcasing
          my expertise in front-end development.</p>
          {/* start projects */}
          <div className="flex items-center justify-between gap-3">
            <div className="">
              <img src="./work-1.png" alt="work 1" className="w-40" />
            </div>
            <div className="">
              <img src="./work-2.png" alt="work 1" className="w-40" />
            </div>
            <div className="">
              <img src="./work-3.png" alt="work 1" className="w-40" />
            </div>
            <div className="">
              <img src="./work-4.png" alt="work 1" className="w-40" />
            </div>
          </div>
          <Button variant={"outline"} className="flex items-center justify-center mx-auto ">Load more</Button>
          {/* end project */}
        </div>
      </div>
    </div>
  )
}

export default Projects