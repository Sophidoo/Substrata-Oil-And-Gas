import { useEffect } from "react"
import Footer from "../components/Footer"
import OServices from "../components/HomePage/OtherServices"
import Services from "../components/HomePage/Services"
import Navbar from "../components/Navbar"


const OtherServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return<>
    <Navbar/>
    <OServices/>
    <Footer/>

    </>
}

export default OtherServices