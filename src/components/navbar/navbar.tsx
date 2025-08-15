import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../ui/logo";
import ClientMenuWrapper from "./client-menu-wrapper";

const Navbar = () => {
  const navMenu = [
    { text: "Features", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "About us", href: "#" },
    { text: "Support", href: "#" },
  ];

  return (
    <nav
      id="navbar"
      className="flex h-[72px] items-center-safe justify-center-safe pr-3 pl-5 sm:px-12 lg:px-14 xl:px-16"
      aria-label="Main navigation"
    >
      <div className="flex w-full items-center justify-between">
        <div className="z-60">
          <Link href="/" aria-label="WorkNest - Back to homepage">
            <Logo />
          </Link>
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8" role="list">
          {navMenu.map((item, index) => (
            <div key={index} role="listitem">
              <Link
                href={item.href}
                className="transition-all duration-900 hover:underline hover:underline-offset-4"
                aria-label={`Go to ${item.text} section`}
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link href={"#"} aria-label="">
            <Button>Start Trial</Button>
          </Link>
        </div>

        {/* mobile menu */}
        <ClientMenuWrapper />
      </div>
    </nav>
  );
};

export default Navbar;
