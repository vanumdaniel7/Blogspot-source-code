import { Flex, Center, Text, Collapse, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


function ListItem(props) {
    return (
        <NavLink to = {props.to} exact = {true} style = {{ minWidth: "24px", width: "100%", padding: "0px 5px"}} activeStyle = {{ backgroundColor: "#263f43", borderRadius: "4px" }}>
            <Flex height = "32px" width = "100%" justifyContent = {["center", "center", "left", "left", "left"]}>
                <Center width = "24px" height = "100%">
                    {props.icon}
                </Center>
                <Collapse in = {props.isOpen}>
                    <HStack height = "100%" display = {["none", "none", "flex", "flex", "flex"]} flex = "1 1 auto" paddingX = "10px">
                        <Text color = "#94a5a8" fontFamily = "'Rubik', 'sans-serif'" letterSpacing = "0.5px">{props.label}</Text>
                    </HStack>
                </Collapse>
            </Flex>
        </NavLink>
    )
}

export default ListItem;