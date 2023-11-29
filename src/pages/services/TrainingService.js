import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import "../../styles/services/Training.css"
import course from "../../assets/images/course picture.png"


const TrainingService = () => {
    return <>
    <Navbar/>
        <div className="trainingWrapper">
            <div className="trainingOverlay">
                <h2>Training Services</h2>
                <p>Welcome to Substrata's Training Services, your gateway to comprehensive and specialized courses in the field of petroleum engineering, petroleum geology, process engineering, business development, and health, safety, and environment. Our training programs are meticulously crafted to cater to industry-specific disciplines and technical challenges, ensuring that professionals are equipped with the latest knowledge and skills to excel in their careers.</p>
            </div>
        </div>
        <section className="trainingSecondSection">
            <img src={course} alt="" />
            <div className="content">
                <div className="firstContent">
                    <h2>FIND A COURSE BY DISCIPLINE</h2>
                    <ul>
                        <li>Petroleum Engineering</li>
                        <li>Petroleum Geology</li>
                        <li>Process, Facilities and Design Engineering</li>
                        <li>Petroleum Business & Professional Development</li>
                        <li>Health, Safety and Environment</li>
                        <li>Technical Challenges</li>
                    </ul>
                </div>
                <div className="firstContent">
                    <h2>DELIVERY OPTIONS</h2>
                    <ul>
                        <li>Public, In house, Virtual and more</li>
                        <p>IN HOUSE OPTION</p>
                        <li>Your Location, Our Experts</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="facilities">
            <div className="facilitiesOverlay">
                <div className="facilitiesCard">
                    <h2>Petroleum Business & Professional Development</h2>
                    <ul>
                        <li>Petroleum Business, Economics and Finance</li>
                        <li>Project Management</li>
                        <li>People Management, Strategy and Leadership</li>
                    </ul>
                </div>
                <div className="facilitiesCard middle">
                    <h2>Process, Facilities and Design Engineering</h2>
                    <ul>
                        <li>Process Measurement, Instrument and Control</li>
                        <li>Surfaces Facilities Design</li>
                        <li>Process Simulation & Optimization</li>
                    </ul>
                </div>
                <div className="facilitiesCard ">
                    <h2>Technical Challenge and Other Training Program</h2>
                    <ul>
                        <li>Field Development Program</li>
                    </ul>
                </div>
                <div className="facilitiesCard">
                    <h2>Petroleum Engineering</h2>
                    <p>Our Petroleum Engineering Courses are classified into
                    <ul>
                        <li>Reservoir Engineering</li>
                        <li>Well Construction/ Drilling Operation</li>
                        <li>Production/ Completion Engineering</li>
                    </ul>
                    </p>
                </div>
                <div className="facilitiesCard middle">
                    <h2>Health, Safety and Environment</h2>
                    <ul>
                        <li>Advance Safety Leadership</li>
                        <li>HSE Management</li>
                        <li>Safety Engineering</li>
                    </ul>
                </div>
                <div className="facilitiesCard">
                    <h2>Petroleum Geology</h2>
                    <p>
                    Our Petroleum Geology courses include
                    <ul>
                        <li>Exploration Geology</li>
                        <li>Developmental Geology</li>
                        <li>Seismology/Petrophysics</li>
                    </ul>
                    </p>
                </div>
            </div>
        </section>
        <Footer/>

    </>
}

export default TrainingService