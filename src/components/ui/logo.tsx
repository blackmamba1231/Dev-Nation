// Description: The logo component.
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const LogoRender: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <Image 
        src="/dn_png.png" 
        alt="Logo" 
        width={80} 
        height={80} 
        loading="eager"
      />
      <div className="flex flex-row space-x-1 font-bold py-4 text-4xl md:text-3xl">
        <p className="text-white">Dev</p>
        <p className="text-green-800">Nation</p>
      </div>
    </div>
  );
};

export default LogoRender;
