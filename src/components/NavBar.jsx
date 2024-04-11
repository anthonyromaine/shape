import {FaPen, FaLayerGroup, FaCube, FaSave } from "react-icons/fa";
import NavButton from "./NavButton";

export default function NavBar(){
    return (
        <div className="flex space-x-2 absolute bottom-4 left-1/2 -translate-x-1/2">
            <NavButton text="Draw" Icon={FaPen}/>
            <NavButton text="Depth" Icon={FaLayerGroup}/>
            <NavButton text="Model" Icon={FaCube}/>
            <NavButton text="Export" Icon={FaSave}/>
        </div>
    )
}