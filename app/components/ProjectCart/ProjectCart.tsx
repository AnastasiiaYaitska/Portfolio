import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsWindow } from "react-icons/bs";
import { TfiGithub } from "react-icons/tfi";

type ProjectCartProps = {
  project: {
    title: string;
    body: string;
    tools: string;
    image: string;
    links: { title: string; url: string }[];
  };
};

const ProjectCart = ({ project }: ProjectCartProps) => {
  const { title, body, tools, image, links } = project;
  return (
    <li className="rounded-lg shadow-footer w-full md:w-2/3-g sm:w-1/3-g card-on-hover">
      <Image
        alt={`Image of ${title}`}
        aria-label={`Image of ${title}`}
        src={`/images/${image}`}
        width={500}
        height={250}
        className="object-fill w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm mt-2 min-h-50">{body} </p>
        <p className="text-sm mt-2 min-h-50">Technologies used: {tools}</p>
        <ul className="flex flex-row mt-4 justify-between">
          {links.map(({ title, url }) => (
            <li key={url} className="flex flex-row ">
              <Link
                href={url}
                className="flex flex-row flex-wrap justify-center items-center gap-3"
              >
                {title.includes("code") ? <TfiGithub /> : <BsWindow />}
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ProjectCart;
