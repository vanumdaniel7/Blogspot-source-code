import { Flex } from "@chakra-ui/react";
import Blog from "./Blog.js";

const Blogs = ({ blogData }) => {
    return (
        <Flex flexDirection = "column" width = "100%" justifyContent = "center" alignItems = "center" gap = "25px">
            {
                blogData.map((blog, i) => 
                    <Blog 
                        key = {i} 
                        {...blog}
                    />
                )
            }
        </Flex>
    )
}

export default Blogs;