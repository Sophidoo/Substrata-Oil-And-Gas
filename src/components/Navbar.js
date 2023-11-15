import { NavLink } from "react-router-dom"
import { FaCaretDown } from "react-icons/fa";
import "../styles/components/Navbar.css"

const Navbar = () => {

    return<>
        <nav>
            <div className="logo">
                <img src="" alt="" />
            </div>
            <div className="menu">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
                <ul>
                    <li>Services <FaCaretDown /></li>
                    <NavLink to={"/engineering"}>Engineering Design</NavLink>
                    <NavLink to={"/seismic"}>Seismic Data Processing</NavLink>
                    <NavLink to={"/sub-surface"}>Sub-surface Services</NavLink>
                    <NavLink to={"/watermg"}>Produced Water Management</NavLink>
                    <NavLink to={"/well"}>Well Services</NavLink>
                    <NavLink to={"/training"}>Training Services</NavLink>
                    <NavLink to={"/drilling"}>Drilling Services</NavLink>
                </ul>
                <NavLink to={"/contact"}><button>Contact Us</button></NavLink>
            </div>
        </nav>
    </>

}

export default Navbar