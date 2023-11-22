import Navbar from "../../components/Navbar"
import "../../styles/services/Engdesign.css"
import hero from "../../assets/images/engineering.jpg"

const EngDesign = () => {

    return<>
    <Navbar/>
        <div className="servicesWrapper">
            <h1>ENGINEERING DESIGN</h1>
            <img src={hero} alt="" />
            <div className="serviceDetails">
                <div className="content">
                    <h2>Our Aim</h2>
                    <p>
                    Substrata’s aim is to provide cost-effective solutions and services to clients in the oil and gas production, gas processing and oil refining industries. <br/>
                    We undertake a wide range of Engineering, Procurement and Project management tasks for oil exploration and production facilities, gas production and processing facilities, separation, liquefaction and oil refining.  <br/>
                    Our professional approach places us first on the list when considering new tasks or technologies. <br/>
                    Projects we have executed include engineering analysis, procurement assistance and project management services. Our approach is always flexible, ensuring our esteemed clients satisfaction.
                    <ul>
                        Our Core Competencies
                        <li>Conceptual Engineering Drawings</li>
                        <li>Front End Engineering Drawings</li>
                        <li>Detailed Engineering Drawings</li>
                        <li>Completion/As Built Engineering Drawing</li>
                    </ul>
                    </p>
                </div>
                <div className="content">
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
                <div className="content">
                    <div className="leftContent">
                        <h2>Engineering, Procurement & Construction (EPC)</h2>
                        <ul>
                            <h3>Engineering Functons</h3>
                            <li>Basic Engineering</li>
                            <li>Detail Engineering</li>
                            <li>Estimating request for Quote</li>
                            <li>Construction Engineering</li>
                        </ul>
                        <ul>
                            <h3>Customized Manufacturing</h3>
                            <li>Procurement</li>
                            <li>Purchasing</li>
                            <li>Expediting</li>
                            <li>Receiving</li>
                            <li>Invoicing</li>
                            <li>Logistics & Transport</li>
                        </ul>
                    </div>
                    <div className="rightContent">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default EngDesign