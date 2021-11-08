import React from 'react'
import { ProjectCard } from './ProjectCard'

// Importing Images
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
import project4 from '../images/project4.jpg'

// array of project information
export const Project = () => {

    const Data = [
        {
            name: 'proj1',
            projimg: 'img for proj1',
            desc: 'desc for proj1',
            url: 'github url for proj1',
            gitrepo: 'gitrepo for proj1',
            alt: "",
            id: 1,
        },
        {
            name: 'proj2',
            projimg: 'img for proj2',
            desc: 'desc for proj2',
            url: 'github url for proj2',
            gitrepo: 'gitrepo for proj2',
            alt: "",
            id: 2,
        },
        {
            name: 'proj3',
            projimg: 'img for proj3',
            desc: 'desc for proj3',
            url: 'github url for proj3',
            gitrepo: 'gitrepo for proj3',
            alt: "",
            id: 3,
        },
        {
            name: 'proj4',
            projimg: 'img for proj4',
            desc: 'desc for proj4',
            url: 'github url for proj4',
            gitrepo: 'gitrepo for proj4',
            alt: "",
            id: 4,
        },
    ];

    return (
        // Container for the projectcard to be nested in
        <section id="projects" class="section">
            <div class="container mt-1">
                <div>
                    <h1 className="text-large bg-dark rounded">
                        Projects:
                    </h1>
                    <h2>
                        A few of my recent projects. Please checkout my Github profile for all my personal projects.
                    </h2>
                </div>
                {/* Grabbing project information and mapping through */}
                <div className="projects">
                {Data.map((project) => (
                    // placing each set of project information into its own ProjectCard
                    <ProjectCard
                        name={project.name}
                        projimg={project.projimg}
                        desc={project.desc}
                        url={project.url}
                        gitrepo={project.gitrepo}
                        alt={project.alt}
                        key={project.id}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}