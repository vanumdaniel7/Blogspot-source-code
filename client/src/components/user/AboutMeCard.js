import { Flex, Heading, Text } from "@chakra-ui/react";
import ChangeAboutMe from "./ChangeAboutMe";
import { Route } from "react-router-dom";

const AboutMeCard = ({ aboutMe }) => {
    return (
        <Flex wrap = "wrap" flexDirection = "column" width = "100%" height = "100%" padding = "24px" backgroundColor = "#12181F" borderRadius = "5px">
            <Flex justifyContent = "space-between" alignItems = "center">
                <Heading overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap" color = "white" fontSize = {["20px", "20px", "20px", "24px", "24px"]} fontWeight = "600">About me</Heading>
                <Route path = "/profile">
                    <ChangeAboutMe/>
                </Route>
            </Flex>
            <Text fontSize = "16px" color = "#ABB5BF" marginTop = "8px" overflow = "hidden" noOfLines = {2}>{aboutMe ? aboutMe : "About Me section is incomplete"}</Text>
        </Flex>
    )
}

export default AboutMeCard;