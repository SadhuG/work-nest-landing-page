"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const navMenu = [
  { text: "Features", href: "#" },
  { text: "Pricing", href: "#" },
  { text: "About us", href: "#" },
  { text: "Support", href: "#" },
];

const NavMenu = ({ isOpen, onClose }: Props) => {
  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-label="Navigation Menu"
      aria-modal="true"
      className={`fixed inset-0 z-40 h-screen transform ${
        isOpen ? "w-screen -translate-x-0" : "translate-x-full"
      } bg-[#ccd1eb] transition-transform duration-500 ease-out`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4 px-5 py-16">
        <nav
          className="flex h-full w-full items-center justify-end"
          aria-label="Main navigation"
        >
          <ul
            className="flex flex-col items-end gap-4"
            role="menubar"
            aria-label="Navigation links"
          >
            {navMenu.map((item, index) => (
              <li key={index} role="none" className="text-4xl font-medium">
                <Link
                  href={item.href}
                  onClick={onClose}
                  role="menuitem"
                  className="block w-full"
                  aria-label={`Go to ${item.text} section`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="flex w-full flex-col items-end"
          aria-label="Contact information"
        >
          <div className="mt-8 flex flex-wrap-reverse justify-end gap-4">
            <Button>Start Automating</Button>
            <Button variant={"secondary"}>Book a Demo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
