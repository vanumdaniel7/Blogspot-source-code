import RedirectLink from "./RedirectLink";
import { Flex } from "@chakra-ui/react";

const RedirectLinkText = ({ redirectTo, normalText, linkText }) => {
    return (
        <Flex gap = "5px" color = "white" fontSize = "14px">{normalText} <RedirectLink redirectTo = {redirectTo} linkText = {linkText}/> </Flex>
    )
}

export default RedirectLinkText;