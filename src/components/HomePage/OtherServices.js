
import OServiceCard1 from "../OtherServices/OService1"
import OServiceCard2 from "../OtherServices/OService2"
import OServiceCard3 from "../OtherServices/OService3"
import OServiceCard4 from "../OtherServices/OService4"
import OServiceCard5 from "../OtherServices/OService5"
import OServiceCard6 from "../OtherServices/OService6"

const OServices = () => {
    return<>
    <div className="otherServices">
        <div className="otherServicesOverlay">
            <h1>OTHER SERVICES WE OFFER</h1>
        </div>
    </div>
        <section className="homeServices ">
        
            <OServiceCard1/>
            <OServiceCard2/>
            <OServiceCard3/>
            <OServiceCard4/>
            <OServiceCard5/>
            <OServiceCard6/>
        </section>

    </>
}

export default OServices