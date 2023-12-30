import { Flex, Spinner } from "@chakra-ui/react";

const LoadingOverlay = ({ height, width }) => {
    return (
        <Flex width = {width} height = {height} justifyContent = "center" alignItems = "center">
            <Spinner size = "xl" color = "#32E6E2"/>
        </Flex>
    )
}

export default LoadingOverlay;