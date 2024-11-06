import React, { useState } from "react";
import algoDraw from "../../../../assets/algoDraw.webp";
import wordle from "../../../../assets/wordle.webp";
import portal from "../../../../assets/portal.png";
import bin from "../../../../assets/bin.png";
import whistle from "../../../../assets/whistle.jpg";
import ProjectIFrame from "../projectIframe/ProjectIFrame";

const projects = [
    {
        name: "AlgoDraw",
        img: algoDraw,
        description: `A web application for visualizing algorithms,helping students understand concepts withinteractive graphics.`,
        tech: ["html", "css", "js"],
        link: "https://ahmedkhalednasr74.github.io/Algo-Draw/index.html",
        isHosted: true,
    },
    {
        name: "Wordle",
        img: wordle,
        description: `popular word-guessing game where players have six attempts to guess a hidden five-letter word.`,
        tech: ["React", "Bootstrap", "js"],
        link: "https://wordle-lac.vercel.app/",
        isHosted: true,
    },
    {
        name: "Hieroglyphic-encryption-portal-slider",
        img: portal,
        description: `A stylish slider with an ancient hieroglyphic theme that encrypts all the data passing through it.`,
        tech: ["html", "css", "js"],
        link: "https://ahmedkhalednasr74.github.io/Hieroglyphic-encryption-portal-slider/",
        isHosted: true,
    },
    {
        name: "2d-Bin-Packing-Problem-Solver",
        img: bin,
        description: `A Solution for the classic optimization challenge of efficiently packing items into a minimal number of bins, This problem has real-world applications in logistics, resource allocation, and space optimization. `,
        tech: ["Python", "Tkinter"],
        link: `https://github.com/AhmedKhaledNasr74/Bin-Packing-Problem-Solver`,
        isHosted: false,
    },
    {
        name: "Whistle",
        img: whistle,
        description: `Whistle is a scalable social media platform developed using Java Spring Boot and Microservices architecture. The platform allows users to connect, share posts, and interact with friends in a secure environment.`,
        tech: [
            "java",
            "spring boot",
            "html",
            "css",
            "js",
            "mysql",
            "restful apis",
        ],
        link: "https://github.com/AhmedKhaledNasr74/Whistle-SocialMediaWebsite",
        isHosted: false,
    },
];

const MyProjects = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isHosted, setIsHosted] = useState(false);
    const [projectLink, setProjectLink] = useState("");
    const [projectName, setProjectName] = useState("project");
    const openProject = (projectLink, projectName, isHosted) => {
        setIsClicked(true);
        setProjectLink(projectLink);
        setProjectName(projectName);
        setIsHosted(isHosted);
    };
    return (
        <>
            {isClicked && isHosted && (
                <div className="fixed inset-0 z-50 bg-white bg-opacity-90 flex items-center justify-center">
                    <ProjectIFrame
                        projectLink={projectLink}
                        setIsClicked={setIsClicked}
                        projectName={projectName}
                    />
                </div>
            )}
            <div className="grid grid-cols-2 gap-1 w-full">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        role="button"
                        className="project m-2 p-1 flex text-center items-center bg-[#FFF28D] rounded-sm hover:bg-[#eee285] transition-all "
                        onClick={
                            !project.isHosted
                                ? () => {
                                      window.open(project.link, "_blank");
                                  }
                                : () =>
                                      openProject(
                                          project.link,
                                          project.name,
                                          project.isHosted
                                      )
                        }
                    >
                        <div className="projectImage h-[80px] w-[80px] ">
                            <img
                                src={project.img}
                                alt="Algo Draw Image"
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                        <div className="details flex flex-col justify-around p-2 mx-auto">
                            <h5 className="name font-bold  ">{project.name}</h5>
                            <p className="description text-xs text-gray-700 mt-1 max-w-sm">
                                {project.description}
                            </p>
                            <div className="technologies">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-100 text-blue-800 text-xs font-light me-1 px-1.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyProjects;
