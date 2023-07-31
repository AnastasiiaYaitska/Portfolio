"use client";
import React from "react";
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
          <a href={contactMeLinks[0]} aria-label="Email">
            <HiOutlineMail size="2.2rem" />
          </a>
        </li>
        <li>
          <a href={contactMeLinks[1]} aria-label="GitHub">
            <TfiGithub size="2rem" />
          </a>
        </li>
        <li>
          <a href={contactMeLinks[2]} aria-label="Linkedin">
            <FiLinkedin size="2rem" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
