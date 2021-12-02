import React, { Fragment } from 'react'

// taking the "props"from project.js file to use in the card
export default function ProjectCard(props) {
    return (
        // set up style and format for the card
        <Fragment>
            <div className="hover">
                <figure>
                    {/* omit the referer header/leak no referer info */}
                <a target="_blank" rel="noreferrer" href={props.url}><img className="rounded" src={props.img} alt={props.alt}/></a>
                </figure>
            </div>
            <div className="ml-25">
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.desc}
                </p>
                Check out the github repo <a href={props.gitrepo}> here </a>.
            </div>
        </Fragment>
    );
}