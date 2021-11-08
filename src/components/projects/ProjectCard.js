import React, { Fragment } from 'react'

// taking the "props" named project from project.js file to use in the card
export default function ProjectCard(project) {
    return (
        // set up style and format for the card
        <Fragment>
            <div className="hover">
                <figure>
                    {/* omit the referer header/leak no referer info */}
                <a target="_blank" rel="noreferrer" href={project.url}><img className="rounded" src={project.img} alt={project.alt}/></a>
                </figure>
            </div>
            <div className="ml-25">
                <h2>
                    {project.name}
                </h2>
                <p>
                    {project.desc}
                </p>
            </div>
        </Fragment>
    )
}