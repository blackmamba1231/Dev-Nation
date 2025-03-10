// Description: The logo component.
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const LogoRender: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-row items-center justify-center md:justify-start ${className}`}>
      <div className="flex-shrink-0">
        <Image 
          src="/dn_png.png" 
          alt="Logo" 
          width={100} 
          height={100} 
          loading="eager"
          className="mx-0"
        />
      </div>
      <div className="flex flex-row space-x-2 font-bold text-4xl">
        <p className="text-white">Dev</p>
        <p className="text-green-800">Nation</p>
      </div>
    </div>
  );
};

export default LogoRender;
