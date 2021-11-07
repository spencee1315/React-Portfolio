import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Social() {
    return (
        <section id="social" className="section-2">
            <div className="container">
                <h1 className="bg-light rounded mt-15"> 
                Follow my journey as a developer. Contact me if you could use web help!
                </h1>
            <div>
                <SocialIcon className="social-icon" target="_blank" url="https://github.com/spencee1315" />
                <SocialIcon className="social-icon" target="_blank" url="https://linkedin.com/in/elliott-spencer" />
                <SocialIcon className="social-icon" target="_blank" url="mailto:elliott.spencer1315@gmail.com" />
            </div>
            </div>
        </section>
    )
}

export default Social;