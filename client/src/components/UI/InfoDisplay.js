import { Flex, Box, Text } from "@chakra-ui/react";

const InfoDisplay = ({ title, info }) => {
    return (
        <Flex justifyContent = "center" alignItems = "center" width = "100%" height = "calc(30vh - 55px)" position = {["relative"]} top = {["50px", "50px", "50px"]}>
            <Box width = "90%" maxW = "500px">
                <Text textAlign = "center" fontWeight = "bold" fontSize = "40px" color = "white" position = "relative" top = "-20px">{title}</Text>
                <Text textAlign = "center" color = "#ABB5BF">{info}</Text>
            </Box>
        </Flex>
    )
}

export default InfoDisplay;