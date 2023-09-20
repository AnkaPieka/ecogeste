import handimage from "../../../assets/handimage.png"
import Faq from "../../Molecules/Faq/Faq"
import Legacity from "../../Molecules/Legality/Legacity"
import SocialNetworkSection from "../../Molecules/SocialNetwork/SocialNetworkSection"

const Footer = () => {
  return (
    <div className="footer">
        <section className="faq">
            <Faq />
        </section>
        <section className="socialNetwork">
            <SocialNetworkSection />
        </section>
        <section className="logo">
            <img className= "hand" src={handimage} alt="logo" />
        </section>
        <section className="legality">
            <Legacity />
        </section>
    </div>
  )
}

export default Footer