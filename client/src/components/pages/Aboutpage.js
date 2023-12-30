import AuthenticatedPageLayout from "../layouts/AuthenticatedPageLayout";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { userActions } from "../../store/index.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Aboutpage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.closeSideBar());
    }, [dispatch])
    return (
        <AuthenticatedPageLayout>
            <Flex flexDirection = "column" padding = {["24px", "24px", "40px", "40px", "40px"]} backgroundColor = "#12181F" width = "100%" border = "1px solid #1E242C" borderRadius = "10px" boxShadow = "0 1px 0.625rem 0 #12181F99, 0 0.125rem 0.25rem 0 #12181F66">
                <Heading color = "white" textAlign = "center">Blogspot</Heading>
                <Text color = "white" marginTop = "40px" textAlign = "center">A full stack web application by Vanum Daniel Priyan</Text>
                <Text color = "#ABB5BF" marginTop = "16px" textAlign = "center">Tech Stack Used: PostgreSQL, ExpressJS, ReactJS, NodeJS</Text>
            </Flex>
        </AuthenticatedPageLayout>
    )
}

export default Aboutpage;