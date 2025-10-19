import { ArrowRight } from "lucide-react";
import Navbar from "../../components/shared/Navbar";
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { UseTheme } from "../../app/providers/ThemeProvider";

const ServiceCard = ({ title, description, iconSrc, iconAlt }:{title:string,description:string,iconSrc:string,iconAlt:string}) => {
  return (
    <Card className="p-4 w-full max-w-[250px] bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-3">
        <img src={iconSrc} alt={iconAlt} className="w-8 h-8 object-contain" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <p className="flex items-center text-pink-500 hover:text-pink-600 cursor-pointer text-sm">
          Read More <ArrowRight size={18} className="ml-2" />
        </p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const { theme } = UseTheme();

  const services = [
    {
      title: "Web Design",
      description: "Crafting visually appealing and user-friendly web interfaces tailored to your needs.",
      iconSrc: "./web-icon.png",
      iconAlt: "Web design icon",
    },
    {
      title: "Web Development",
      description: "Building robust and scalable web applications with modern technologies.",
      iconSrc: "./web-icon.png",
      iconAlt: "Web development icon",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences for web and mobile applications.",
      iconSrc: "./web-icon.png",
      iconAlt: "UI/UX icon",
    },
    {
      title: "Backend Development",
      description: "Developing secure and efficient server-side solutions to power your applications.",
      iconSrc: "./web-icon.png",
      iconAlt: "Backend icon",
    },
  ];

  return (
    <div className={`w-full min-h-screen ${theme === "light" ? "bg_color" : "bg-gray-900 text-white"} pt-24`}>
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <img
          src="./svc.jpg"
          alt="Services overview"
          className="w-full md:w-1/2 h-[30rem] object-cover rounded-lg shadow-md"
        />
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-lg md:text-xl text-pink-500">What I Offer</p>
          <h1 className="text-3xl md:text-5xl font-bold">My Services</h1>
          <p className="text-gray-600 dark:text-gray-300">
            I am a Full Stack developer from Urgench, Uzbekistan, with 2 years of experience in multiple domains.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconSrc={service.iconSrc}
                iconAlt={service.iconAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;