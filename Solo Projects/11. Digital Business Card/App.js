import React from "react"
import Social_Icons from "./components/Social_Icons"
import Info from "./components/Info"

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
                    <Info/>
                </div>
                <Social_Icons/>
            </div>  
        </div>
    )
}