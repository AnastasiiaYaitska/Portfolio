"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

type HeaderProps = {
  pages: {
    id: string;
    label: string;
    link: string;
  }[];
};

const BurgerMenu = ({ pages }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="">
      <button onClick={toggleMenu}>
        <HiMenu size="2rem" />
      </button>
      <div
        className={
          isOpen
            ? "shadow-footer menu menu-open"
            : "shadow-footer  menu menu-close"
        }
      >
        <ul className="text-right flex flex-col gap-6 justify-end h-full">
          {pages.map(({ id, label, link }) => (
            <li key={id} className=" ">
              <Link
                aria-label={label}
                href={link}
                className="px-6 py-2"
                onClick={toggleMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
