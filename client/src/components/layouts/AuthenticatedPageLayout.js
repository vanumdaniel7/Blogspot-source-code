import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

const AuthenticatedPageLayout = props => {
    const showSidebar = useSelector(state => state.user.showSidebar);
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Box zIndex = {[showSidebar ? "-1" : "1", showSidebar ? "-1" : "1", "0", "0", "0"]} padding = {["15px", "25px", "25px", "25px", "25px"]} position = "fixed" top = "60px" left = {["0px", "0px", "270px", "270px", "270px"]} width = {["100%", "100%", "calc(100vw - 270px)", "calc(100vw - 270px)", "calc(100vw - 270px)"]} overflowY = "auto" height = "calc(100vh - 60px)">
                {props.children}
            </Box>
        </>
    )
}

export default AuthenticatedPageLayout;