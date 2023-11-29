import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import "../../styles/services/Training.css"


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
            <img src="" alt="" />
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

        </section>

    </>
}

export default TrainingService