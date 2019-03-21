import React from "react";
import { ProjectCard } from "../../components/ProjectCard"
import projects from "../../portfolioInfo.json"

function Portfolio() {
    return (
        <div className="row mb-4">
            <div className="col-md-1"></div>
            <div className="shadow col-md border p-4 m-3 bg-white">
                <h2 className="m-4">Portfolio</h2>
                <hr />
                <div className="clearfix card-columns m-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            src={project.image}
                            alt={project.title}
                            title={project.title}
                            // desc={project.desc}
                            gitLink={project.github}
                            siteLink={project.website}
                        />
                    ))}
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
};

export default Portfolio;