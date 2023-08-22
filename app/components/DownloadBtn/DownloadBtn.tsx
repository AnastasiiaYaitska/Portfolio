"use client";
import Link from "next/link";
import React, { useState } from "react";

const DownloadBtn = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="flex aline-center justify-center sm:justify-start">
      <Link href={"/cv/AnastasiiaCV.pdf"} passHref>
        <a
          href="./../../../public/cv/Anastasia.CV.pdf"
          download="AnastassiaYaitskaCV.pdf"
          onClick={handleClick}
          className={isClicked ? " clickButton clicked" : "clickButton"}
        >
          <span className="text-lg font-medium"> Download CV</span>
        </a>
      </Link>
    </div>
  );
};

export default DownloadBtn;
