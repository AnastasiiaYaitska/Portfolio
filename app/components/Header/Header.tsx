"use client";
import React from "react";
import Link from "next/link";

type HeaderProps = {
  name: string;
  pages: {
    id: string;
    label: string;
    link: string;
  }[];
};

const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header
      className="sticky top-0 z-10 flex flex-col relative
     bg-linear-fc5c7d shadow-footer
     w-full h-32 py-6  bg-header"
    >
      <div className="flex flex-col justify-around h-full px-6  z-10">
        <nav className="h-full">
          <ul className="text-right flex flex-row gap-6 justify-end h-full">
            {pages.map(({ id, label, link }) => (
              <li key={id} className=" ">
                <Link
                  aria-label={label}
                  href={link}
                  className="px-6 py-2 glow-on-hover"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="text-white uppercase  text-4xl">{name}</h1>
      </div>
    </header>
  );
};

export default Header;
