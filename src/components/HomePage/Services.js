import ServiceCard1 from "../HomeServices/ServiceCard1"
import ServiceCard2 from "../HomeServices/ServiceCard2"
import ServiceCard3 from "../HomeServices/ServiceCard3"
import ServiceCard4 from "../HomeServices/ServiceCard4"

import factory from "../../assets/images/factory.jpg"

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


    </>
}

export default Services