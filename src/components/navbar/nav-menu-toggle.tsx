"use client";

import React from "react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const NavMenuToggle = ({ isOpen, onClick }: Props) => {
  return (
    <button
      aria-label="Toggle mobile menu"
      onClick={onClick}
      className="relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1"
    >
      <span
        className={`bg-foreground block h-0.5 w-[24px] rounded-full transition-transform duration-300 ${
          isOpen ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`bg-foreground block h-0.5 w-[24px] rounded-full transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`bg-foreground block h-0.5 w-[24px] rounded-full transition-transform duration-300 ${
          isOpen ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default NavMenuToggle;
