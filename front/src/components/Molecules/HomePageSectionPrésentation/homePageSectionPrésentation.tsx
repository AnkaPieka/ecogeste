import React from "react";
import logoFeuilleTitle from "../../../assets/logoFeuille.png"
import logoFeuilleTitleDown from "../../../assets/logoFeuille.png"
function HomePageSectionPresentation(){

    return(
        <div className="container">
        <div className="title-content">
        <img src= {logoFeuilleTitle} alt="logoFeuille" className="logoImage" />
    <h2 className="title">Are you <span className="highlighted">ready</span> to faces the challenges?</h2>
    </div>
    <div className="container-text">
    <p className="description">Join our <span className="highlighted">echo-challenge app</span> and participate in group challenges tant promotes
        substainable actions to support the environment. Together, let's accomplish various eco-friendly
        gestures and make a difference for a better world !<br />
    </p>
    <img src= {logoFeuilleTitleDown} alt="logoFeuille" className="logoImageDown" />
    </div>
    <span className="hashtag"> #Ecochallenge #SupportingTheEnvironnement</span>
    </div>
    )
}
export default HomePageSectionPresentation;


