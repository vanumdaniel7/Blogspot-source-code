import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@chakra-ui/react";
import { userActions } from "../../store";

const ToggleSidebar = () => {
    const showSidebar = useSelector(state => state.user.showSidebar);
    const dispatch = useDispatch();
    const toggleSidebar = () => {
        dispatch(userActions.toggleSideBar());
    }
    return (
        <IconButton onClick = {toggleSidebar} width = "35px" height = "35px" fontWeight = "600" _hover = {{ color: "#8efbf7", backgroundColor: "#0c2a2a" }} _active = {{ backgroundColor: "#0C2A2A" }} _focus = {{ boxShadow: "0 0 0 0.125rem #04a29f", outline: "1px solid #8efbf7", border: "1px solid #04a29f"}} transition = "border-color 0.15s ease-in" color = "#738792" borderColor = "transparent" borderWidth = "2px" backgroundColor = "transparent" icon = {showSidebar ? <Cross2Icon/> : <HamburgerMenuIcon/>}/>
    )
}

export default ToggleSidebar;