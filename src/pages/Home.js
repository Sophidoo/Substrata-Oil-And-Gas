import { useNavigate } from "react-router"
import Navbar from "../components/Navbar"
import "../styles/Home.css"
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
    const navigate = useNavigate()
    
    return<>
        <Navbar/>
        <section className="hero">
            <div className="overlay">
                <h1>Substrata Oil and Gas Limited</h1>
                <p>Adding value to Nigeria Oil and Gas industry through application of best technology, cost effective, and efficient solutions</p>
                <button onClick={() => navigate("/about")}>Read More</button>
            </div>
        </section>

        <section className="history">
            <h2>Substrata's History</h2>
            <h3>Substrata Oil and Gas Limited was incorporated in 2006 to carry out oil field services to the Oil and Gas industry in Nigeria.</h3>
            <p>Substrata Oil and Gas Limited (RC 663293) was incorporated in 2006 to carry out oil field services to the Oil and Gas industry in Nigeria. <br/> The need to reduce costs by introducing new, effective and efficient technology, coupled with the recent introduction of new Government policies aimed at encouraging and ensuring more participation by competent Nigerians in the upstream Oil & Gas Industry has played an important role in the development of Substrata Oil and Gas Limited. <br/> Substrata Oil and Gas Limited is wholly Nigerian owned with local and international affiliations and partnerships. Our operations are knowledge driven backed by technology.</p>
            <button>Learn More <FaArrowRight /></button>
        </section>

    </>

}

export default Home