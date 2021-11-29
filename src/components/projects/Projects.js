import React from 'react'
import { ProjectCard } from './ProjectCard'

// Importing Images
import fitnessTrackerImg from '../../images/fitnessTracker.png'
import echoChamberImg from '../../images/echoChamber.png'
import noteTakerImg from '../../images/noteTaker.png'
import weatherAppImg from '../../images/weatherApp.png'

// array of project information
export const Project = () => {

    const Data = [
        {
            name: 'Fitness Tracer',
            projimg: fitnessTrackerImg,
            desc: 'This application is a fitness tracker that allows a user to create and track daily workouts. A user can log multiple exercises in a workout on a given day. The app has the ability to track the name, type, weight, sets, reps, and duration of an exercise, and there is an option for distance traveled should the exercise be cardio.',
            url: 'https://fitnesstracker-uwcoding.herokuapp.com/',
            gitrepo: 'https://github.com/spencee1315/Fitness_Tracker',
            alt: "",
            id: 1,
        },
        {
            name: 'Echo Chamber',
            projimg: echoChamberImg,
            desc: 'A social media platform that uses node, express, mysql, sequelize, and handlebars as the primary tools to connect users in an anonymous form. Users can create posts and then vote on posts to decide what makes it to the top of the feed. Users will have their own profiles to review their post history and can also comment on posts.',
            url: 'https://echochamber12.herokuapp.com/',
            gitrepo: 'https://github.com/ZakkFast/EchoChamber',
            alt: "",
            id: 2,
        },
        {
            name: 'Note Taker',
            projimg: noteTakerImg,
            desc: 'This application uses an Express.js back-end and it saves and retrieves note data from a JSON file.',
            url: 'https://hw11-notetaker-uwbootcamp.herokuapp.com/notes',
            gitrepo: 'https://github.com/spencee1315/hw_wk11',
            alt: "",
            id: 3,
        },
        {
            name: 'Weather App',
            projimg: weatherAppImg,
            desc: 'This application is a weather dashboard that uses a third-party API to access specific weather data and functionality by making requests with specific parameters to a URL. It runs in the browser and features dynamically updated HTML, CSS and Javascript.',
            url: 'https://spencee1315.github.io/hw_wk6/',
            gitrepo: 'ghttps://github.com/spencee1315/hw_wk6',
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