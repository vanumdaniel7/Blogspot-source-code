import { HomeIcon, InfoCircledIcon, Pencil1Icon, PersonIcon } from "@radix-ui/react-icons";
import SidebarButton from "./SidebarButton";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";

const Sidebar = () => {
    const showSidebar = useSelector(state => state.user.showSidebar);
    const SidebarOptions = [
        {
            name: "Home",
            link: "/home",
            icon: <HomeIcon/>
        },
        {
            name: "About",
            link: "/about",
            icon: <InfoCircledIcon/>
        },
        {
            name: "New Blog",
            link: "/newblog",
            icon: <Pencil1Icon/>
        },
        {
            name: "Profile",
            link: "/profile",
            icon: <PersonIcon/>
        }
    ];

    return (
        <Flex zIndex = {[showSidebar ? "1" : "-1", showSidebar ? "1" : "-1", "0", "0", "0"]} position = "fixed" top = "60px" padding = "10px" gap = "5px" flexDirection = "column" width = {["100%", "100%", "270px", "270px", "270px"]} height = "calc(100vh - 60px)" borderRight = "1px solid #3B434C">
            {SidebarOptions.map((sidebarOption, i) => <SidebarButton key = {i} name = {sidebarOption.name} link = {sidebarOption.link} icon = {sidebarOption.icon}/>)}
        </Flex>
    )
}

export default Sidebar;