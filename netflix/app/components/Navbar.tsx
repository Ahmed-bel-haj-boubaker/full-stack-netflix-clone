"use client";

import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden ">
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={link.href} className="text-white ">
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
