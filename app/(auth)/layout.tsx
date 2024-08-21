/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { ReactNode } from "react";
import bgImg from "../../public/images/hero.jpg";
import Logo from "../../public/images/logo.png";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex w-screen h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={bgImg}
        alt="backgound image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image
        alt="logo"
        src={Logo}
        width={120}
        height={120}
        className="absolute left-4  top-4 object-contain md:left-10 md:top-6 "
        priority
      />
      {children}
    </div>
  );
};

export default AuthLayout;
