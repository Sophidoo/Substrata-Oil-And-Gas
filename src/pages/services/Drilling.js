import Navbar from "../../components/Navbar"
import "../../styles/services/Drilling.css"
import cementing from "../../assets/images/oil well cementing.png"
import drilling from "../../assets/images/drilling support.png"
import Footer from "../../components/Footer"
import sickline from "../../assets/images/sickline services.png"
import downhole1 from "../../assets/images/Downhole-Camera.png"
import downhole2 from "../../assets/images/downhole camera.png"
import {motion} from 'framer-motion'
import { useEffect } from "react"


const Drilling = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return<>
    <Navbar/>
    <section className="drillingWrapper">
            <div className="overlay service">
            <motion.div
            animate={{ y: [50, 0], opacity: 1}  }
            initial={{opacity: 0}}
            transition={{duration: 2, ease: "easeInOut"}}
            >
                <h2>Drilling Services</h2>
                <p>We have a team that support our esteemed clients in ensuring efficient, on-time and successful delivery of their drilling campaigns. Services supported are;
                <ul>
                    <li>Supply of tubing and casings (OCTGs)</li>
                    <li>Fishing and fishing tool rental services</li>
                    <li>Solid Control Structures</li>
                    <li>Cementing Pumping</li>
                    <li>Casing running & Liner hanger services</li>
                    <li>Waste management services...</li>
                </ul>
                </p>
            </motion.div>

            </div>
        </section>
        <section className="aimWrapper drillingAimWrapper">
            <div className="leftDrillingWrapper">
                <div className="rect"></div>
                <img src={cementing} alt="" />
            </div>
            <div className="rightDrillingWrapper">
            <h2>Our Well Cementing</h2>
                <p>
                Substrata Cementing is an industry leader in delivering effective zonal isolation in oil, gas and geothermal wells. We engineer cement slurry designs for specific well needs utilizing global standards. <br/>
                Substrata in partnership with our technical partners offers iCem® n Service, the industry's most robust engineering design tool for assessing and monitoring specific well variables before, during, and after a cement job. The simulations allow operators to make more informed decisions and achieve operational efficiencies.
                We provide an array of remedial cementing services, plug, squeeze, coiled tubing and cement packer solutions. <br/>
                We lead the industry in offering casing equipment, casing accessories, pumping and mixing services supported by state-of-the-art land and offshore cementing equipment, designed to industry standards
                </p>
            </div>
        </section>
        <div className="drillingWrapperBackground">
            
        <section className="drillingServWrapper drillingServWrapper2">
            <div className="rightDrillingWrapper rightDrillingWrapper2">
                <h2>Drilling Support Services</h2>
                <p>
                We have a team that support our esteemed clients in ensuring efficient, on-time and successful delivery of their drilling campaigns. Services supported are;<br/>
                <ul>
                    <li>Supply of tubing and casings (OCTGs)</li>
                    <li>Fishing and fishing tool rental services</li>
                    <li>Solid Control Services</li>
                    <li>Cementing Pumping</li>
                    <li>Casing running & Liner hanger services</li>
                    <li>Waste management services</li>
                    <li>Well Engineering solutions. (In partnership with Halliburton Energy Services – HES)</li>
                    <li>Supply of Baker Hughes/Improchem drilling fluids</li>
                    <li>Foreign procurement of drilling and Well completion equipment.</li>
                </ul>
                </p>
            </div>
            <div className="leftDrillingWrapper leftDrillingWrapper2">
                <div className="rect2"></div>
                <img src={drilling} alt="" />
            </div>
        </section>
        </div>
        <section className="drilling drillingAsh">
            <img src={sickline} alt="" />
            <div className="leftdrilling ">
                <h2>Sickline and Wireline Services
Studies</h2>
                <p>
                    <span>Substrata Oil & Gas, provides adequate slickline and wireline services. Our services cover: setting plugs, basic removal of scale, wax and sand build-up, changing out gas lift valves, fishing and other complex well applications.</span>
                    <span>We strive to be the most efficient, cost effective, E-line solutions provider readily available.</span>
                    <span>Our Services include:</span>
                    <ul>
                        <li>Pipe Recovery</li>
                        <li>Mechanical Services</li>
                        <li>Logging</li>
                        <li>Perforating Services</li>
                        <li>Slickline Services: mechanical Intervention; Memory Production Logging; Slickline Perforating; Memory Formation Evaluation; Heavy Duty Fishing; Cement and Pipe Evaluation.</li>
                    </ul>
                    <span>Our promise to you is a relentless dedication to safety and service quality.</span>
                </p>
            </div>
        </section>
        <section className="drilling">
            <div className="leftdrilling">
                <h2>Downhole Camera Services</h2>
                <p>
                Substrata's downhole camera services give a real picture of the wellbore. Allowing scale, perforations or holes in the tubing to be seen rather than inferred, this technology enables informed decisions to be made on location. <br/>
                Some applications of the slickline camera system include quality assurance inspection, gas entry, water entry, fishing operations, casing and perforation inspection, and general problem identification <br/>
                Substrata's downhole video technology combined with our engineer’s expertise ensures that we deliver quality downhole pictures. In addition, the video images can be combined with caliper data (CALVID) enabling a complete representation of the wellbore condition.

                    <ul>
                    <h3>Applications</h3>
                        <li>Mechanical inspections, such as parted tubing/corrosion/ obstructions/restrictions</li>
                        <li>Fishing operations</li>
                        <li>Gas lift and surface-controlled subsurface safety valve (SCSSV) inspection</li>
                        <li>Scale and organic buildup survey</li>
                        <li>Corrosion inspection</li>
                        <li>Identifying points of hydrocarbon entry in high water-cut wells</li>
                    </ul>
                </p>
            </div>
            <div className="rightDrilling">
                <img src={downhole1} alt="" />
                <img src={downhole2} alt="" />
            </div>
        </section>
        <Footer/>
    </>
}

export default Drilling