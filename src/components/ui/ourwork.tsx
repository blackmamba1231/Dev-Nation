"use client";
import { memo, useMemo } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import FadeContent from "./fade-content";
import { Code, Palette, Globe, Database, Smartphone, AppWindow, Bot, LineChart } from 'lucide-react';

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ServiceCard = memo(({ service }: { service: Service }) => (
  <CardContainer className="bg-stone-800/40 hover:bg-stone-700/40 transition-colors duration-300 rounded-xl p-6 w-full">
    <CardBody>
      <CardItem translateZ="50">
        {service.icon}
      </CardItem>
      <CardItem translateZ="60" className="mt-4">
        <h3 className="text-xl font-semibold text-neutral-200">{service.title}</h3>
      </CardItem>
      <CardItem translateZ="40" className="mt-2">
        <p className="text-sm text-neutral-400">{service.description}</p>
      </CardItem>
    </CardBody>
  </CardContainer>
));

ServiceCard.displayName = "ServiceCard";

function OurWork() {
  const services = useMemo<Service[]>(() => [
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
    
  ], []);

  const ServiceRow = memo(({ rowIndex }: { rowIndex: number }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {services.slice(rowIndex, rowIndex + 2).map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  ));

  ServiceRow.displayName = "ServiceRow";

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
            <ServiceRow key={rowIndex} rowIndex={rowIndex} />
          ))}
        </div>
      </div>
    </FadeContent>
  );
}

export default memo(OurWork);