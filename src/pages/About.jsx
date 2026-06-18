import AboutHeading from "../components/about-heading/AboutHeading"
import Footer from "../components/footer/Footer"
import Nav from "../components/nav/Nav"
import Second from "../components/second/Second"
import Service from "../components/service/Service"
import Sixth from "../components/sixth/Sixth"
import AboutEmail from "../components/about-email/AboutEmail"


const About = () => {
    return(
        <>
            <AboutHeading />
            <Sixth />
            <Service />
            <Second />
            <AboutEmail />
        </>
    )
}

export default About