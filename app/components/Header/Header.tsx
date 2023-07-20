"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ data }) => {
  const { name, pages } = data;
  return (
    <header>
      <div>
        <nav>
          <ul>
            {pages.map(({ id, label, link }) => (
              <li key={id}>
                <Link aria-label={label} href={link} className="">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1>{name}</h1>
      </div>
      <Image
        priority
        height={200}
        width={2000}
        className=""
        src="/images/Computer.jpeg"
        alt="drawing laptop"
        aria-label="picture"
      />
    </header>
  );
};

export default Header;
