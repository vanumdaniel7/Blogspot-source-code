import { Button } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

const SidebarButton = props => {
    const location = useLocation();

    return (
        <Button as = {NavLink} to = {props.link} paddingX = "10px" justifyContent = "left" _hover = {{ color: "#8efbf7", backgroundColor: "#0c2a2a" }} _active = {{ backgroundColor: "#0C2A2A" }} _focus = {{ boxShadow: "0 0 0 0.125rem #04a29f", outline: "1px solid #8efbf7", border: "1px solid #04a29f"}} transition = "all 0.15s ease-in" color = {location.pathname === props.link ? "#FFFFFF" : "#7E8792"} borderColor = "transparent" borderWidth = "2px" boxSizing = "border-box" backgroundColor = {location.pathname === props.link ? "#272F38" : "transparent"} leftIcon = {props.icon}>{props.name}</Button>
    )
}

export default SidebarButton;