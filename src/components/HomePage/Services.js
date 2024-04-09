import ServiceCard1 from "../HomeServices/ServiceCard1"
import ServiceCard2 from "../HomeServices/ServiceCard2"
import ServiceCard3 from "../HomeServices/ServiceCard3"
import ServiceCard4 from "../HomeServices/ServiceCard4"

import factory from "../../assets/images/factory.jpg"
import BlogBanner from "./BlogBanner"
import ServiceCard5 from "../HomeServices/ServiceCard5"
import ServiceCard7 from "../HomeServices/ServiceCard7"
import ServiceCard6 from "../HomeServices/ServiceCard6"
import ServiceCard8 from "../HomeServices/ServiceCard8"

const Services = () => {
    return<>
        <section className="homeServices">
        
            <h1>Substrata's Oil and Gas Services in Nigeria</h1>
            <ServiceCard1/>
        </section>
        <div className="banner">
            <img src={factory} alt="" />
        </div>
        <section className="homeServices">
            <ServiceCard2/>
            <ServiceCard3/>
            <ServiceCard4/>
        </section>
        <BlogBanner/>
        <section className="homeServices">
            <ServiceCard5/>
            <ServiceCard6/>
            <ServiceCard7/>
            <ServiceCard8/>
        </section>

    </>
}

export default Services