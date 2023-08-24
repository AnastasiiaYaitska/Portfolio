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
      <Link
        href="./cv/Anastasia.CV.pdf"
        download
        onClick={handleClick}
        className={isClicked ? " clickButton clicked" : "clickButton"}
      >
        <span className="text-lg font-medium"> Download CV</span>
      </Link>
    </div>
  );
};

export default DownloadBtn;
