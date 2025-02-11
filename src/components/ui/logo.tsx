// Description: The logo component.
import Image from "next/image";
import FadeContent from "./fade-content";
export default function LogoRender() {
    return (
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <Image src="/dn_png.png" alt="Logo" width={60} height={80} />
    </FadeContent>
  
      );
  }