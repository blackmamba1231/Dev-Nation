"use client";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import FadeContent from "./fade-content";
import { Code, Palette, Globe, Database, Search, Smartphone, AppWindow, Bot, LineChart } from 'lucide-react';

export default function OurWork() {
    const services = [
       
        {
            icon: <Code className="w-6 h-6 text-purple-400" />,
            title: "Frontend Development",
            description: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop."
        },
        {
            icon: <Database className="w-6 h-6 text-purple-400" />,
            title: "Backend Development",
            description: "The security of your business/product is taken seriously right from the start of the project. We will make sure your website/app is secure from attacks."
        },
        {
            icon: <Bot className="w-6 h-6 text-purple-400" />,
            title: "Generative AI",
            description: "Empower your business with the limitless creativity of generative AI, crafting unique content and solutions tailored to your needs, exclusively from our innovative services."
        },
        {
            icon: <LineChart className="w-6 h-6 text-purple-400" />,
            title: "Power Apps",
            description: "Unlock the potential of your business with our tailor-made Power Apps solutions, empowering seamless productivity and efficiency at every step."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-purple-400" />,
            title: "Mobile App Development",
            description: "Unlike other developers in the market, we build an app that runs on both iOS and Android devices without any extra cost to you."
        },
        {
            icon: <AppWindow className="w-6 h-6 text-purple-400" />,
            title: "Desktop App Development",
            description: "Our team provides cross-platform desktop apps that assure high performance and efficiency with network independence, allowing users the convenience of working offline."
        },
        {
            icon: <LineChart className="w-6 h-6 text-purple-400" />,
            title: "Data Engineering",
            description: "Crafting seamless data pipelines, we sculpt the architecture of information flow, empowering businesses with precision and agility."
        },
        {
            icon: <Globe className="w-6 h-6 text-purple-400" />,
            title: "Website Development",
            description: "We offer static, dynamic, and customised websites, including eCommerce websites, for various sizes of businesses using the latest tech stack for future customization."
        },
        
        {
            icon: <Palette className="w-6 h-6 text-purple-400" />,
            title: "Graphic Designing",
            description: "We offer motion posters, creative ads, brochures, and other graphics work. Make your content visually appealing to communicate your messages. All your graphic solutions at a reasonable cost!"
        },
        {
            icon: <Search className="w-6 h-6 text-purple-400" />,
            title: "Digital Marketing",
            description: "We connect you with an audience to promote your brand via social media and improve your website's position in search results. We ensure to list your brand higher so more people can see it."
        }
    ];

    return (
        <FadeContent>
            <div className="w-full h-auto bg-transparent py-16">
                <div className="text-center max-w-7xl mx-auto mb-16 px-4">
                    <div className="inline-block">
                        <h2 className="text-neutral-200 text-3xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text mb-4">
                            Our Expertise
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-base md:text-lg max-w-2xl mx-auto mt-8 text-neutral-400 leading-relaxed">
                        Transforming ideas into exceptional digital solutions. We combine innovation 
                        with expertise to deliver cutting-edge products that exceed expectations.
                    </p>
                </div>

                <div className="flex flex-col space-y-6 justify-center items-center max-w-7xl mx-auto px-4">
                    {[0, 2, 4, 6, 8].map((rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {services.slice(rowIndex, rowIndex + 2).map((service, index) => (
                                <CardContainer 
                                    key={index} 
                                    className="bg-stone-800/40 hover:bg-stone-700/40 transition-colors duration-300 rounded-xl w-full group"
                                >
                                    <CardBody className="min-h-[200px]">
                                        <CardItem>
                                            <div className="text-neutral-300 group-hover:text-white p-6 h-full transition-colors duration-300">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="p-2 bg-stone-900/50 group-hover:bg-stone-800/50 rounded-lg transition-colors duration-300">
                                                        {service.icon}
                                                    </div>
                                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                                </div>
                                                <p className="text-neutral-400 group-hover:text-neutral-300 text-sm leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </FadeContent>
    );
}