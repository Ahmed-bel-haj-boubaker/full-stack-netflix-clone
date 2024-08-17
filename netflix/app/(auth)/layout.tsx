import Image from "next/image";
import { ReactNode } from "react";
import bgImg from "../../public/images/hero.jpg";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex w-screen h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={bgImg}
        alt="backgound image"
        className="hidden sm:flex sm:object-cover -z-10"
        priority
        fill
      />
      {children}
    </div>
  );
};

export default AuthLayout;
