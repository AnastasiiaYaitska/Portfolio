"use client";
import Link from "next/link";
import React, { useState } from "react";

const DownloadBtn = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <a
      href="./../../../public/cv/Anastasia.CV.pdf"
      download="AnastassiaYaitskaCV.pdf"
      onClick={handleClick}
      className={isClicked ? " clickButton clicked" : "clickButton"}
    >
      <button type="button">Download CV</button>
    </a>
  );
};

export default DownloadBtn;
