"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { TfiGithub } from "react-icons/tfi";
import { FiLinkedin } from "react-icons/fi";

type FooterProps = {
  contactMeLinks: string[];
};

const Footer = ({ contactMeLinks }: FooterProps) => {
  return (
    <footer className="w-full bg-wight shadow-footer mt-12 py-4 ">
      <ul className="flex item-center justify-center gap-3">
        <li>
          <Link href={contactMeLinks[0]} aria-label="Email" target="_blank">
            <HiOutlineMail size="2.2rem" />
          </Link>
        </li>
        <li>
          <Link href={contactMeLinks[1]} aria-label="GitHub" target="_blank">
            <TfiGithub size="2rem" />
          </Link>
        </li>
        <li>
          <Link href={contactMeLinks[2]} aria-label="Linkedin" target="_blank">
            <FiLinkedin size="2rem" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
