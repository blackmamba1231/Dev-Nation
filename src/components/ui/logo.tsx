// Description: The logo component.
import Image from "next/image";

interface LogoProps {
  className?: string;
}

const LogoRender: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-row items-center space-x-0 ${className}`}>
      <Image 
        src="/dn_png.png" 
        alt="Logo" 
        width={120} 
        height={120} 
        loading="eager"
        className="mr-0"
      />
      <div className="flex flex-row space-x-2 font-bold py-4 text-4xl ">
        <p className="text-white">Dev</p>
        <p className="text-green-800">Nation</p>
      </div>
    </div>
  );
};

export default LogoRender;
