import Navbar from "../../components/shared/Navbar"
import "../../app/styles/Global.css";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import './About.css';
import { UseTheme } from "../../app/providers/ThemeProvider";
const About = () => {
  const {theme}=UseTheme();
  return (
    <div>
      <Navbar/>
      <div className={`w-full min-h-screen pt-24 ${theme ==="light" ? "bg_color" : "bg-gray-900 text-white"}`}>
        <div className="pdg flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <img src="./myphoto.jpg" alt="my photo" className="w-64 rounded-md" />
          <div className="w-full">
            <p>I am a backend developer with a strong interest in software engineering. 
              My main focus is developing backend applications using MERN stack and Java (Spring Boot) technologies.
               I have experience in database, authentication, API integrations and building real-time applications.
                I am also interested in learning about Docker, microservices and scalable architectures. 
                  Building efficient, secure and scalable systems based on software engineering principles is my main goal.</p>
                  {/* cart */}
                  <div className="pt-8 flex flex-wrap items-center gap-2 w-full">
                    <div className="1">
                      <Card className="p-2">
                          <CardHeader className="space-y-2">
                            <img src="./code-icon.png" alt="code icon" className="w-6" />
                            <CardTitle className="text-xl text-left">Language</CardTitle>
                          </CardHeader>
                          <CardContent>
                            Java Spring Boot React Js <br />
                            Node Js Express Js
                          </CardContent>
                        </Card>
                    </div>
                    <div className="2">
                      <Card className="p-2">
                          <CardHeader className="space-y-2">
                            <img src="./edu-icon.png" alt="code icon" className="w-6" />
                            <CardTitle className="text-xl text-left">Education</CardTitle>
                          </CardHeader>
                          <CardContent>
                              Tashkent University of Information <br /> Technologies TUIT
                          </CardContent>
                        </Card>
                    </div>                  
                  <div className="3">
                      <Card className="p-2">
                          <CardHeader className="space-y-2">
                            <img src="./project-icon.png" alt="code icon" className="w-6" />
                            <CardTitle className="text-xl text-left">Projects</CardTitle>
                          </CardHeader>
                          <CardContent>
                            Built more than 5 projects. <br />
                            E-commerce Blog Platform etc.
                          </CardContent>
                        </Card>
                    </div>           
                  </div>
                  {/* cart */}
                  {/* tools i use */}
                  <p className="p-3">Tools i use</p>
                  <div className="flex items-center gap-3">
                    <img src="./vscode.png" alt="vs code" className="w-10" />
                     <img src="./firebase.png" alt="firebase" className="w-10" />
                      <img src="./mongodb.png" alt="mongodb" className="w-10" />
                       <img src="./figma.png" alt="figma" className="w-10" />
                        <img src="./git.png" alt="git" className="w-10" />
                  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About