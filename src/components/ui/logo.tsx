// Description: The logo component.
import Image from "next/image";
import FadeContent from "./fade-content";
export default function LogoRender() {
    return (
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <Image src="https://res.cloudinary.com/dkjgrv8cy/image/upload/v1739305591/dn_png_copy_rvwr0v.png" alt="Logo" width={60} height={80} />
    </FadeContent>
  
      );
  }
