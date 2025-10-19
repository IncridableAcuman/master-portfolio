import { ArrowRight, Download } from "lucide-react";
import { UseTheme } from "../../app/providers/ThemeProvider";
import Navbar from "../../components/shared/Navbar"
import { Button } from "../../components/ui/button";
import './Home.css';
import {motion} from 'framer-motion';

const Home = () => {
  const {theme}=UseTheme();
  return (
    <div className={`${theme === "light" ? "bg-color" : "bg-gray-900 text-white"} w-full min-h-screen`}>
    <Navbar/>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:1}}
     className="flex flex-col items-center justify-center min-h-screen">
      <img src="./Rasmiy portret qora suitda.png" alt="Rasmiy portret qora suitda.png"
       className="w-32 h-32 rounded-full object-cover" />
       <h3 className="py-4 text-lg flex items-center gap-2">Hi! I'm Izzatbek Abdusharipov
        <img src="./hand-icon.png" alt="hand icon" className="w-8 animate-bounce" />
       </h3>
      <div className="space-y-5 text-center">
         <h1 className="text-3xl md:text-5xl font-extrabold">full stack developer</h1>
        <h2 className="text-3xl md:text-5xl font-extrabold">based in Uzbekistan</h2>
        <p>I am a Full Stack developer from Urgench, Uzbekistan, with 2 years of experience in many fields.</p>
        <div className="flex items-center justify-center gap-3 ">
          <Button className="text-xs" variant={"outline"} >connect with me
            <ArrowRight size={18} />
          </Button>
          <Button className="text-xs">my resume
            <Download size={18} className="animate-bounce" />
          </Button>
        </div>
      </div>

    </motion.div>
    {/* footer */}
    </div>
  )
}

export default Home