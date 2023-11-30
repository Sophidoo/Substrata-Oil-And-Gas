import Navbar from "../../components/Navbar"
import "../../styles/services/Engdesign.css"
import procurement from "../../assets/images/procurement.png"
import hero from "../../assets/images/engineering.jpg"
import documentation from "../../assets/images/facility documentation.png"
import aims from "../../assets/images/aims.png"
import objective from "../../assets/images/objective.png"
import banner from "../../assets/images/EngineeringServiceBanner.png"
import imagery from "../../assets/images/imagery.png"
import laser from "../../assets/images/laser.png"
import Footer from "../../components/Footer";

const EngDesign = () => {

    return<>
        <Navbar/>
        <section className="serviceWrapper">
            <div className="overlay service">
                <h2>Engineering Design</h2>
                <p>We undertake a wide range of Engineering, Procurement and Project management tasks for oil exploration and production facilities, gas production and processing facilities, separation, liquefaction and oil refining. Our professional approach places us first on the list when considering new tasks or technologies. <br/>
                Projects we have executed include engineering analysis, procurement assistance and project management services. Our approach is always flexible, ensuring our esteemed clients satisfaction.</p>
            </div>
        </section>
        <section className="aimWrapper">
            <div className="leftAimWrapper">
                <div className="rect"></div>
                <img src={aims} alt="" />
            </div>
            <div className="rightAimWrapper">
            <h2>Our Aim</h2>
                <p>
                Substrata’s aim is to provide cost-effective solutions and services to clients in the oil and gas production, gas processing and oil refining industries. <br/>
                We undertake a wide range of Engineering, Procurement and Project management tasks for oil exploration and production facilities, gas production and processing facilities, separation, liquefaction and oil refining.  <br/>
                Our professional approach places us first on the list when considering new tasks or technologies. <br/>
                Projects we have executed include engineering analysis, procurement assistance and project management services. Our approach is always flexible, ensuring our esteemed clients satisfaction.
                <ul>
                    <h3>Our Core Competencies</h3>
                    <li>Conceptual Engineering Drawings</li>
                    <li>Front End Engineering Drawings</li>
                    <li>Detailed Engineering Drawings</li>
                    <li>Completion/As Built Engineering Drawing</li>
                </ul>
                </p>
            </div>
        </section>
        <section className="aimWrapper">
            <div className="rightAimWrapper rightAimWrapper2">
                <h2>Our Services</h2>
                <p>
                We offer complete Engineering, Procurement and Construction Management services. <br/>
                We have handled projects from the initial feasibility phase right through to design, implementation and commissioning. Our areas of competence includes;<br/>
                <ul>
                    <li>Project Management Consultancy Services</li>
                    <li>Contractor and Interphase management</li>
                    <li>Project Risk Management</li>
                    <li>Construction and Installation Management</li>
                    <li>Cost and schedule control</li>
                    <li>Supplier and supply chain management</li>
                    <li>Improved quality management</li>
                    <li>Flexibility in staffing to suit project needs</li>
                </ul>
                We ensure on-time, qualitative delivery of projects without compromising the impact on the environment and employees health. Our approach is to work closely with our esteemed clients which ensures that projects are executed in accordance with business objectives and stakeholder commitments. <br/>
                Our Services encompass Engineering, Procurement and Construction installation. We have a “state of the art” certified Fabrication yard in Port Harcourt, Rivers State Nigeria which compliments our ability to deliver projects on-time, qualitatively, efficiently and effectively.
                </p>
            </div>
            <div className="leftAimWrapper">
                <div className="rect2"></div>
                <img src={objective} alt="" />
            </div>
        </section>
        <div className="banner2">
            <img src={banner} alt="" />
        </div>
        <section className="procurement">
            <h2>Engineering, Procurement & Construction (EPC).</h2>
            <div className="content">
                <ul>
                    <h3>Procurement Functions</h3>
                    <li>Customized Manufacturing</li>
                    <li>Procurement</li>
                    <li>Purchasing</li>
                    <li>Expediting</li>
                    <li>Receiving</li>
                    <li>Invoicing</li>
                    <li>Logisitics & Transport</li>
                </ul>
                <ul>
                    <h3>Construnction Functions</h3>
                    <li>Civil & Structural construction</li>
                    <li>Mechanical Erection</li>
                    <li>Electrical Installation</li>
                </ul>
                <ul>
                    <h3>Commissioning Functions</h3>
                    <li>Testing & Commissioning</li>
                    <li>After-sales-service</li>
                    <li>Modernisation of Plants</li>
                </ul>
                <ul>
                    <h3>Engineering Functions</h3>
                    <li>Basic Engineering</li>
                    <li>Planning</li>
                    <li>Detail Engineering</li>
                    <li>Estimating request for Quote</li>
                    <li>Construction Engineering</li>
                </ul>
            </div>
            <img src={procurement} alt="" />
        </section>

        <section className="imagery">
            <div className="leftImagery">
                <h2>3D Imagery & Scanning</h2>
                <p>Substrata Oil and Gas is a leading service company in the industry, using the laser technology to deliver integrated engineering solution for the existing conditions of a facility that requires accurate documentation prior to commencement of a project.  
                <span>
                Our 3D Laser Scanning services can provide/digitize any offshore/onshore facilities and generate 3D As-built drawings and 3D models from the acquired scan data.
                </span>
                <span>
                3D Laser Scanning Capabilities.
                </span>
                <span>As-built Documentation.</span>
                <span>Design Verification.</span></p>
            </div>
            <img src={imagery} alt="" />
        </section>

        <section className="laser">
            <img src={laser} alt="" />
            <div className="leftLaser">
                <h2>3D Laser Scanning</h2>
                <ul>
                    <li>We have one of the leading fleet of laser scanning equipment (both colored & monochrome) & crew for both onshore and offshore activities</li>
                    <li>Our equipment are high resolution cameras that work in line of sight of the human eye with the capability to rotate sample - Faro Focus 3D and Leica HDS 7100</li>
                    <li>3600 horizontally and 2800 vertically</li>
                    <li>Our cameras are intrinsically safe for use in oil and gas facilities.</li>
                </ul>
            </div>
        </section>

        <section className="documentation">
            <h2>AS BUILT DOCUMENTATION OF FACILITY</h2>
            <img src={documentation} alt="" />
        </section>
        <Footer/>
    </>
}

export default EngDesign