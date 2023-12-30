import { Box, Flex, Text } from "@chakra-ui/react";
import { PersonIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const SearchResult = ({ userId, name, email, onClickHandler }) => {
    return (
        <Flex onClick = {onClickHandler} as = {Link} to = {`/users/${userId}`} _hover = {{ color: "#8efbf7", backgroundColor: "#0c2a2a" }} borderRadius = "5px" transition = "background-color 0.15s ease" paddingX = "12px" paddingY = "8px" boxSizing = "border-box" width = "100%" height = "64px" justifyContent = "space-between" alignItems = "center" gap = "10px" color = "#E6ECF2">
            <PersonIcon/>
            <Box flexGrow = "1" height = "100%">
                <Text fontSize = "16px">{name}</Text>
                <Text fontSize = "14px" opacity = "0.6">{email}</Text>
            </Box>
        </Flex>
    )
}

export default SearchResult;