import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const RedirectLink = ({ redirectTo, linkText }) => {
    return (
        <Link to = {redirectTo}>
            <Text fontSize = "14px" fontWeight = "500" color = "#32E6E2" textDecor = "underline" _hover = {{ textDecor: "unset" }}>{linkText}</Text>
        </Link>
    )
}

export default RedirectLink;