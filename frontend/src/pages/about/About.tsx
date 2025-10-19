import Navbar from "../../components/shared/Navbar"
import "../../app/styles/Global.css";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import './About.css';
import { UseTheme } from "../../app/providers/ThemeProvider";
import {motion} from 'framer-motion';

const About = () => {

  const {theme}=UseTheme();
  return (
    <div>
      <Navbar/>
      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.5,duration:0.6}}
       className={`w-full min-h-screen pt-24 ${theme ==="light" ? "bg-color" : "bg-gray-900 text-white"}`}>
        <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.5,duration:0.6}}
         className="pdg flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <motion.img
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.5,duration:0.6}}
           src="./myphoto.jpg" alt="my photo" className="w-full md:w-64 rounded-md" />
          <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.5,duration:0.6}}
           className="w-full">
            <motion.p
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.5,duration:0.6}}
             className="text-center">I am a backend developer with a strong interest in software engineering. 
              My main focus is developing backend applications using MERN stack and Java (Spring Boot) technologies.
               I have experience in database, authentication, API integrations and building real-time applications.
                I am also interested in learning about Docker, microservices and scalable architectures. 
                  Building efficient, secure and scalable systems based on software engineering principles is my main goal.</motion.p>
                  {/* cart */}
                  <motion.div
                  initial={{opacity:0,y:20}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:0.5,duration:0.6}}
                   className="pt-8 flex flex-wrap items-center gap-2 w-full">
                    <motion.div
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    transition={{delay:0.5,duration:0.6}}
                     className="">
                      <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl">
                          <CardHeader className="space-y-2">
                            <img src="./code-icon.png" alt="code icon" className="w-6" />
                            <CardTitle className="text-xl text-left">Language</CardTitle>
                          </CardHeader>
                          <CardContent>
                            Java Spring Boot React Js <br />
                            Node Js Express Js
                          </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    transition={{delay:0.5,duration:0.6}}
                     className="2">
                      <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl">
                          <CardHeader className="space-y-2">
                            <img src="./edu-icon.png" alt="code icon" className="w-6" />
                            <CardTitle className="text-xl text-left">Education</CardTitle>
                          </CardHeader>
                          <CardContent>
                              Tashkent University of Information <br /> Technologies TUIT
                          </CardContent>
                        </Card>
                    </motion.div>                  
                  <motion.div
                  initial={{opacity:0,y:20}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:0.5,duration:0.6}}
                   className="3">
                      <Card className="p-4 hover:shadow-lg transition-all duration-300 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl">
                          <CardHeader className="space-y-2">
                            <img src="./project-icon.png" alt="code icon" className="w-6" />
                            <CardTitle className="text-xl text-left">Projects</CardTitle>
                          </CardHeader>
                          <CardContent>
                            Built more than 5 projects. <br />
                            E-commerce Blog Platform etc.
                          </CardContent>
                        </Card>
                    </motion.div>           
                  </motion.div>
                  {/* cart */}
                  {/* tools i use */}
                  <motion.p
                  initial={{opacity:0,y:20}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:0.5,duration:0.6}}
                   className="p-3">Tools i use</motion.p>
                  <motion.div
                  initial={{opacity:0,y:20}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:0.5,duration:0.6}}
                   className="flex items-center gap-3">
                    <motion.img
                    initial={{opacity:0,y:20}}
                    animate={{opacity:1,y:0}}
                    transition={{delay:0.5,duration:0.6}}
                     src="./vscode.png" alt="vs code" className="w-10" />
                     <motion.img
                     initial={{opacity:0,y:20}}
                      animate={{opacity:1,y:0}}
                      transition={{delay:0.5,duration:0.6}}
                      src="./firebase.png" alt="firebase" className="w-10" />
                      <motion.img
                      initial={{opacity:0,y:20}}
                      animate={{opacity:1,y:0}}
                      transition={{delay:0.5,duration:0.6}}
                       src="./mongodb.png" alt="mongodb" className="w-10" />
                       <motion.img
                       initial={{opacity:0,y:20}}
                      animate={{opacity:1,y:0}}
                      transition={{delay:0.5,duration:0.6}}
                        src="./figma.png" alt="figma" className="w-10" />
                        <motion.img
                        initial={{opacity:0,y:20}}
                        animate={{opacity:1,y:0}}
                        transition={{delay:0.5,duration:0.6}}
                        src="./git.png" alt="git" className="w-10" />
                  </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About