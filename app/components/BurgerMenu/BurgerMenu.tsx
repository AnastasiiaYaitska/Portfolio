"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

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
            ? "shadow-footer menu menu-open p-0"
            : "shadow-footer  menu menu-close p-0"
        }
      >
        <button onClick={toggleMenu}>
          {" "}
          <CgCloseO size="1.5rem" />
        </button>
        <ul className="text-right flex flex-col gap-6 justify-center h-full">
          {pages.map(({ id, label, link }) => (
            <li key={id} className="hover:shadow-footer ">
              <Link
                aria-label={label}
                href={link}
                className="px-6 py-2 text-lg font-medium"
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
