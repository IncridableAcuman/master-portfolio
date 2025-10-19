import { UseTheme } from "../../app/providers/ThemeProvider";
import Navbar from "../../components/shared/Navbar"
import "./Contact.css";
import "../../app/styles/Global.css";
import { Textarea } from "../../components/ui/textarea";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
const Contact = () => {
    const {theme} = UseTheme();
  
  return (
    <div className={`w-full min-h-screen ${theme === "light" ? "bg_color" : "bg-gray-900 text-white"} pt-24`}>
      <Navbar/>
      <div className="pdg flex flex-col md:flex-row items-center justify-between gap-3">
        <img src="./contact.jpg" alt="contact" className="w-full md:w-1/2 h-[30rem] object-cover rounded-lg shadow-md" />
        <div className="text-center space-y-4">
          <p className=" text-sm md:text-lg">Connect with me</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Get in touch</h1>
          <p className="text-sm">I'd love to hear from you! If you have any questions, comments or <br />
          feedback, please use the form below.</p>
          <form className="space-y-4 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <Input type="text" placeholder="Enter your name" className={`${theme === "light" ? "border border-gray-400":""}`} />
              <Input type="email" placeholder="Enter your email" className={`${theme === "light" ? "border border-gray-400":""}`} />
            </div>
            <Textarea placeholder="enter your message" className={`${theme === "light" ? "border border-gray-400":""}`} />
            <Button className="flex items-center justify-start">Submit now <ArrowRight size={18} /></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact