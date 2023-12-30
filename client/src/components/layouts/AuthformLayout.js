import UnAuthenticatedPageLayout from "./UnAuthenticatedPageLayout.js";
import { Flex, Heading } from "@chakra-ui/react";

const AuthformLayout = props => {
    return (
        <UnAuthenticatedPageLayout>
            <Flex flexDirection = "column" alignItems = "center" position = "relative" top = {["150px", "150px", "175px", "175px", "175px"]} width = "100%">
                <Heading marginBottom = {["20px", "20px", "40px", "40px", "40px" ]} fontSize = {["24px", "24px", "28px", "28px", "28px"]} color = "white" fontWeight = "600" textAlign = "center">{props.heading}</Heading>
                {props.children}
            </Flex>
        </UnAuthenticatedPageLayout>
    )
}

export default AuthformLayout;