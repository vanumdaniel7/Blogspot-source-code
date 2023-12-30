import Navbar from "../navbar/Navbar";
import { Box } from "@chakra-ui/react";

const UnAuthenticatedPageLayout = props => {
    return (
        <>
            <Navbar/>
            <Box width = "100%" overflowY = "auto" height = "calc(100vh - 60px)">
                {props.children}
            </Box>
        </>
    )
}

export default UnAuthenticatedPageLayout;