import React from "react"

export default function App() {
    return(
        <div id="main">
            <div id="container">
                <img id="profile-pic" src="./images/profile.jpg" alt="Profile Pic"/>
                <div id="center">
                    <h1>Meziyum</h1>
                    <h4>Frontend Developer</h4>
                    <p>Meziyum website</p>
                    <div id="social">
                        <button id="email"><embed class="svg" src="./images/mail.svg" /> Email</button>
                        <button id="linkedin"><embed class="svg" src="./images/linkedin.svg" /> LinkedIn</button>
                    </div>
                    <div id="info">
                        <h3>About</h3>
                        <p>I am a frontend devloper with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h3>Interests</h3>
                        <p>Food, History, Politis, Novels, Animes, Mangas, Webseries, Economics, Metal Ability, Logical Reasoning.</p>
                    </div>
                </div>
                <div id="social-icons">
                        <img class="social-icon" src="./images/twitter.png"/>
                        <img class="social-icon" src="./images/facebook.png"/>
                        <img class="social-icon" src="./images/instagram.png"/>
                        <img class="social-icon" src="./images/github.png"/>
                    </div>
            </div>  
        </div>
    )
}