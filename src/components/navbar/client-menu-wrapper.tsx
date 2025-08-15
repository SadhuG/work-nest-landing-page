"use client";

import { useState } from "react";
import NavMenu from "./nav-menu";
import NavMenuToggle from "./nav-menu-toggle";

const ClientMenuWrapper = () => {
  const [open, setOpen] = useState(false);

  // Handle menu toggle
  const handleMenuToggle = () => {
    const newOpenState = !open;
    if (newOpenState) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setOpen(newOpenState);
  };

  // Handle menu close
  const handleMenuClose = () => {
    document.body.classList.remove("overflow-hidden");
    setOpen(false);
  };

  return (
    <>
      <div className="z-50 block h-full lg:hidden">
        <NavMenuToggle isOpen={open} onClick={handleMenuToggle} />
      </div>
      <NavMenu isOpen={open} onClose={handleMenuClose} />
    </>
  );
};

export default ClientMenuWrapper;
