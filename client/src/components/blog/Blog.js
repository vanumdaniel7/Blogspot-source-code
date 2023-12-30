import { Text, Flex, Tag, TagLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Blog = props => {
    return (
        <Flex flexDirection = "column" padding = {["24px", "24px", "40px", "40px", "40px"]} backgroundColor = "#12181F" width = "100%" minHeight = "calc(100vh - 60px - 50px)" border = "1px solid #1E242C" borderRadius = "5px" boxShadow = "0 1px 0.625rem 0 #12181F99, 0 0.125rem 0.25rem 0 #12181F66">
            <Text color = "#32E6E2" fontSize = {["24px", "28px", "28px", "28px", "28px"]} overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap"><Link to = {`/users/${props.userId}`}>{props.name}</Link></Text>
            <Text color = "white" marginTop = "16px" fontSize = {["12px", "12px", "16px", "16px", "16px"]} overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap">{props.blogDate}</Text>
            <Text color = "#ABB5BF" marginTop = "36px" dangerouslySetInnerHTML = {{ __html: props.content }}/>
            <Flex marginTop = "16px" gap = "10px" flexWrap = "wrap">
                {
                    props.tags.map((tag, i) => {
                        return (
                            <Tag key = {i} variant = "outline" colorScheme = "cyan">
                                <TagLabel>{tag}</TagLabel>
                            </Tag>
                        )
                    }
                )}
            </Flex>
        </Flex>
    )
}

export default Blog;