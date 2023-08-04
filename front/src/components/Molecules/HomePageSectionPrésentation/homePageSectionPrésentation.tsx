import React from "react";
import logoFeuille from "../../../assets/logoFeuille.svg"
function HomePageSectionPresentation(){

    return(
        <div className="container">
    <img src= {logoFeuille} alt="logoFeuille" className="logoImage" />
    <h2 className="title">Are you <span className="highlighted">ready</span> to faces the challenges?</h2>
    <div className="container-text">
    <p className="description">Join our <span className="highlighted">echo-challenge app</span> and participate in group challenges tant promotes
        substainable actions to support the environment. Together, let's accomplish various eco-friendly
        gestures and make a difference for a better world !<br />
    </p>
    <span className="hashtag"> #Ecochallenge #SupportingTheEnvironnement</span>
    </div>
    </div>
    )
}
export default HomePageSectionPresentation;


