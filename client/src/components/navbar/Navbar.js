import SignoutButton from "./SignoutButton.js";
import ToggleSidebar from "./ToggleSidebar.js";
import { useLocation } from "react-router-dom";
import { Flex, Show } from "@chakra-ui/react";
import SearchBar from "./SearchBar.js";
import Logo from "./Logo.js";

function Navbar() {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/" || location.pathname.startsWith("/auth");
    return (
        <Flex position = "fixed" top = "0px" gap = "10px" borderBottom = "1px solid #3B434C" width = "100%" height = "60px" alignItems = "center" paddingX = "10px">
            <Logo/>
            {!isAuthRoute &&
            <Flex gap = {["10px", "15px", "20px", "20px", "20px"]} width = "calc(100% - 40px)" justifyContent = "right" alignItems = "center">
                <SearchBar/>
                <Show below = "md">
                    <ToggleSidebar/>
                </Show>
                <SignoutButton/>
            </Flex>}
        </Flex>
    )
}

export default Navbar;