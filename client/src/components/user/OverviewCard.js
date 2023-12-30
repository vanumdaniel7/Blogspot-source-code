import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import ChangeProfile from "./ChangeProfile";
import { Route } from "react-router-dom";

const OverviewCard = ({ name, email, count, dateJoined }) => {
    return (
        <Box position = "relative" width = "100%" height = "100%" padding = "24px" backgroundColor = "#12181F" borderRadius = "5px">
            <Flex justifyContent = "space-between" alignItems = "center">
                <Heading overflow = "hidden" maxWidth = "calc(100% - 100px)" textOverflow = "ellipsis" whiteSpace = "nowrap" color = "white" fontSize = {["24px", "24px", "28px", "20px", "28px"]} fontWeight = "600">{name}</Heading>
                <Route path = "/profile">
                    <ChangeProfile/>
                </Route>
            </Flex>
            <Text fontSize = "16px" overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap" color = "#ABB5BF" marginTop = "8px">{email}</Text>
            <Text fontSize = "16px" overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap" color = "#ABB5BF" marginTop = "8px">Joined Blogspot on {dateJoined}</Text>
            <Text fontSize = "16px" overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap" color = "#ABB5BF" marginTop = "8px">Contributed {count} {count === "1" ? "blog" : "blogs"}</Text>
        </Box>
    )
}

export default OverviewCard;