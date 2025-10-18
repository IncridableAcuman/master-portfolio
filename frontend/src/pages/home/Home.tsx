import { ArrowRight, Download } from "lucide-react";
import { UseTheme } from "../../app/providers/ThemeProvider";
import Navbar from "../../components/shared/Navbar"
import { Button } from "../../components/ui/button";
import './Home.css';

const Home = () => {
  const {theme}=UseTheme();
  return (
    <div className={`${theme === "light" ? "bg_color" : "bg-gray-900 text-white"} w-full min-h-screen`}>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="./Rasmiy portret qora suitda.png" alt="Rasmiy portret qora suitda.png"
       className="w-32 h-32 rounded-full object-cover" />
       <h3 className="py-4 text-lg flex items-center gap-2">Hi! I'm Izzatbek Abdusharipov
        <img src="./hand-icon.png" alt="hand icon" className="w-8" />
       </h3>
      <div className="space-y-5 text-center">
         <h1 className="text-3xl md:text-5xl font-extrabold">full stack developer</h1>
        <h2 className="text-3xl md:text-5xl font-extrabold">based in Uzbekistan</h2>
        <p>I am a frontend developer from Urgench, Uzbekistan, with 2 years of experience in many fields.</p>
        <div className="flex items-center justify-center gap-3 ">
          <Button className="text-xs" variant={"outline"} >connect with me
            <ArrowRight size={18} />
          </Button>
          <Button className="text-xs">my resume
            <Download size={18} />
          </Button>
        </div>
      </div>

    </div>
    {/* footer */}
    </div>
  )
}

export default Home