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
                <img src={logo} alt="" />
            </div>
            <div className="menu-icon">
                     
                    <div className={card === "nav" ? "list" : "hide"}  onClick={() => ShowCard(null)}><AiOutlineClose /></div> 
                    <div className={card === "nav" ? "hide" : "close"} onClick={() => ShowCard("nav")}><RiMenu3Fill/> </div>
            </div>
            <div className={window.innerWidth > 750 || card === "nav" ? "menu" : "hide"}>
                <NavLink to={"/"}  style = {({isActive}) => isActive? activeStyle : undefined} end>Home</NavLink>
                <NavLink to={"/about"} style = {({isActive}) => isActive? activeStyle : undefined} end>About</NavLink>
                <NavLink to={"/projects"} style = {({isActive}) => isActive? activeStyle : undefined} end>Projects</NavLink>
                <div className="services">
                    <p onMouseOver={() => ShowCard("services")} onClick={ShowServices}>Services <FaCaretDown /></p>
                    <ul className={services || card === "services" ? "showServices" : "hide"} onMouseLeave={() => ShowCard(null)}>
                        <NavLink to={"/engineering"} style = {({isActive}) => isActive? activeStyle : undefined} end>Engineering Design</NavLink>
                        <NavLink to={"/seismic"} style = {({isActive}) => isActive? activeStyle : undefined} end>Seismic Data Processing</NavLink>
                        <NavLink to={"/sub-surface"} style = {({isActive}) => isActive? activeStyle : undefined} end>Sub-surface Services</NavLink>
                        <NavLink to={"/watermg"} style = {({isActive}) => isActive? activeStyle : undefined} end>Produced Water Management</NavLink>
                        <NavLink to={"/well"} style = {({isActive}) => isActive? activeStyle : undefined} end>Well Services</NavLink>
                        <NavLink to={"/training"} style = {({isActive}) => isActive? activeStyle : undefined} end>Training Services</NavLink>
                        <NavLink to={"/drilling"} style = {({isActive}) => isActive? activeStyle : undefined} end>Drilling Services</NavLink>
                    </ul>
                </div>
                <NavLink to={"/contact"}><button>Contact Us</button></NavLink>
            </div>
        </nav>
    </>

}

export default Navbar