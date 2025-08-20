import React from "react";
import Logo from "./ui/logo";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

const footerLinks1 = [
  { label: "Support Center", href: "#" },
  { label: "Blog Posts", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "About Us", href: "#" },
];
const footerLinks2 = [
  { label: "Careers Page", href: "#" },
  { label: "User Guide", href: "#" },
  { label: "API Documentation", href: "#" },
  { label: "Feedback Form", href: "#" },
  { label: "Community Forum", href: "#" },
];

const Footer = () => {
  return (
    <section className="mx-auto w-full max-w-[1536px] px-4 py-12 text-sm md:px-16 md:py-20">
      <div className="mx-auto flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
        {/* Left: Brand, Address, Contact, Socials */}
        <div className="flex flex-col gap-8 md:w-1/2 lg:w-1/3">
          <div>
            <div className="mb-6 md:mb-8">
              <Logo />
            </div>
            <div className="mb-6">
              <p className="font-semibold">Address:</p>
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
            </div>
            <div className="">
              <p className="font-semibold">Contact:</p>
              <a href="#" className="hover:text-primary block underline">
                1800 123 4567
              </a>
              <a href="#" className="hover:text-primary block underline">
                hello@worknest.com
              </a>
            </div>
            <div className="mt-6 flex gap-5 text-2xl md:mt-8">
              <a href="#" aria-label="Facebook" className="hover:text-primary">
                {/* <FaFacebookF /> */}
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary">
                {/* <FaInstagram /> */}
              </a>
              <a href="#" aria-label="X" className="hover:text-primary">
                {/* <FaXTwitter /> */}
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary">
                {/* <FaLinkedinIn /> */}
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-primary">
                {/* <FaYoutube /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Center & Right: Navigation Links */}
        <div className="flex flex-1 flex-col gap-10 md:flex-row md:justify-end md:gap-24">
          <ul className="space-y-4 font-medium">
            {footerLinks1.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="py-2 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-4 font-medium">
            {footerLinks2.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: Copyright & Policies */}
      <div className="border-border mx-auto mt-16 flex max-w-[1536px] flex-col gap-6 border-t pt-8 md:flex-row md:items-center md:justify-between">
        <div>© 2025 WorkNest. All rights reserved.</div>
        <div className="flex flex-wrap gap-8">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of Service
          </a>
          <a href="#" className="underline">
            Cookies Settings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
