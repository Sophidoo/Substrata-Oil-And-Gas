import { NavLink } from "react-router-dom"
import { FaCaretDown } from "react-icons/fa";
import "../styles/components/Navbar.css"
import logo from "../assets/images/SOGLogo 2.png"
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const activeStyle = {
        color: "#DF1818",
    }
    const [card, setCard] = useState()
    const [services, setServices] = useState(false)

    const ShowCard = (value) => {
        setCard(value)
    }

    const ShowServices = () => {
        if(window.innerWidth <= 750){
            if(services){
                setServices(false)
                setCard("nav")
            }else{
                setCard("nav")
                setServices(true)
            }
        }else if(window.innerWidth > 750){
            if(card === "services"){
                setCard(null)
                setServices(false)
            }else{
                setServices(true)
                setCard("services")
            }
        }
    }

    return<>
        <nav onMouseLeave={() => ShowCard(null)}>
            <div className="logo">
            <NavLink to={"/"}  style = {({isActive}) => isActive? activeStyle : undefined} end>
                <img src={logo} alt="" />
                
            </NavLink>
            </div>
            <div className="menu-icon">
                     
                    <div className={card === "nav" ? "list" : "hide"}  onClick={() => ShowCard(null)}><AiOutlineClose /></div> 
                    <div className={card === "nav" ? "hide" : "close"} onClick={() => ShowCard("nav")}><RiMenu3Fill/> </div>
            </div>
            <div className={window.innerWidth > 750 || card === "nav" ? "menu" : "hide"}>
                <NavLink to={"/"}  style = {({isActive}) => isActive? activeStyle : undefined} end>Home</NavLink>
                <NavLink to={"/about"} style = {({isActive}) => isActive? activeStyle : undefined} end>About</NavLink>
                {/* <NavLink to={"/projects"} style = {({isActive}) => isActive? activeStyle : undefined} end>Projects</NavLink> */}
                <div className="services">
                    <p onMouseOver={() => ShowCard("services")} onClick={ShowServices}>Services <FaCaretDown /></p>
                    <ul className={services || card === "services" ? "showServices" : "hide"} onMouseLeave={() => ShowCard(null)}>
                        <NavLink to={"/services/engineering-design"} style = {({isActive}) => isActive? activeStyle : undefined} end>Engineering Design</NavLink>
                        <NavLink to={"/services/seismic-services"} style = {({isActive}) => isActive? activeStyle : undefined} end>Seismic Data Processing</NavLink>
                        <NavLink to={"/services/subsurface-service"} style = {({isActive}) => isActive? activeStyle : undefined} end>Sub-surface Services</NavLink>
                        <NavLink to={"/services/produced-water-management"} style = {({isActive}) => isActive? activeStyle : undefined} end>Produced Water Management</NavLink>
                        <NavLink to={"/services/well-services"} style = {({isActive}) => isActive? activeStyle : undefined} end>Well Services</NavLink>
                        <NavLink to={"/services/training-services"} style = {({isActive}) => isActive? activeStyle : undefined} end>Training Services</NavLink>
                        <NavLink to={"/services/drilling-service"} style = {({isActive}) => isActive? activeStyle : undefined} end>Drilling Services</NavLink>
                        <a href={"/other-services#Open-Hole-Petrophysical-Evaluation"} style = { undefined} end>Open-Hole Petrophysical Evaluation</a>
                        <a href={"/other-services#Cement-bond-log-evaluation"} style = { undefined} end>Cement bond log evaluation </a>
                        <a href={"/other-services#Corrosion Log Interpretation"} style = {undefined} end>Corrosion Log Interpretation</a>
                        <a href={"/other-services#Production Log Interpretation"} style = {undefined} end>Production Log Interpretation</a>
                        <a href={"/other-services#Cased-Hole Formation Evaluation"} style = { undefined} end>Cased-Hole Formation Evaluation</a>
                        <a href={"/other-services#Intervention Services"} style = { undefined} end>Intervention Services/Production Enhancement</a>
                    </ul>
                </div>
                <NavLink to={"/contact"}><button>Contact Us</button></NavLink>
            </div>
        </nav>
    </>

}

export default Navbar