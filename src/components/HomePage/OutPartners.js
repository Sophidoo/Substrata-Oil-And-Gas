import logo1 from "../../assets/images/Our Partners/logo 1.png"
import logo2 from "../../assets/images/Our Partners/logo 2.png"
import logo3 from "../../assets/images/Our Partners/logo 3.png"
import logo4 from "../../assets/images/Our Partners/logo4.png"
import logo5 from "../../assets/images/Our Partners/logo5.png"
import logo6 from "../../assets/images/Our Partners/logo6.png"
import logo7 from "../../assets/images/Our Partners/logo7.png"
import logo8 from "../../assets/images/Our Partners/logo8.png"
import logo9 from "../../assets/images/Our Partners/logo9.png"
import logo10 from "../../assets/images/Our Partners/logo10.png"
import logo11 from "../../assets/images/Our Partners/gicsl.png"


const OurPartners = () => {

    return<>
        <div className="partnerWrapper">
            <div className="partnerOverlay">
                <h2>OUR PARTNERS</h2>
                <div className="partnerCardWrapper partnerCardWrapper">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                    <img src={logo8} alt="" />
                    <img src={logo9} alt="" />
                    <img src={logo10} alt="" />
                    <img src={logo11} alt="" className="lastLogo"/>
                </div>
            </div>
        </div>

    </>

}

export default OurPartners