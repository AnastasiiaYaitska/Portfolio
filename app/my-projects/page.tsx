"use client";
import React from "react";
import projects from "../data/projects.json";
import ProjectCart from "../components/ProjectCart/ProjectCart";

type ProjectProp = {
  title: string;
  body: string;
  tools: string;
  image: string;
  links: {
    title: string;
    url: string;
  }[];
};

const MyProjects = () => {
  return (
    <section className="flex flex-col w-11/12 content-center m-auto mt-10">
      <h2 className="">My Projects</h2>
      <ul className="flex flex-row justify-center flex-wrap gap-10 mt-6">
        {projects.map((project: ProjectProp) => {
          return <ProjectCart project={project} key={project.title} />;
        })}
      </ul>
    </section>
  );
};

export default MyProjects;
