import AuthenticatedPageLayout from "../layouts/AuthenticatedPageLayout";
import { blogActions, userActions } from "../../store/index.js";
import { useSelector, useDispatch } from "react-redux";
import LoadingOverlay from "../UI/LoadingOverlay.js";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Blogs from "../blog/Blogs.js";

const Homepage = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const blogData = useSelector(state => state.blogs.data);
    useEffect(() => {
        const fetchBlogs = async () => {
            setIsLoading(true);
            const token = localStorage.getItem("token");
            const result = await fetch(`http://localhost:3000/blogs/`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });
            const res = await result.json();
            if(res.status === "success") {
                dispatch(blogActions.getBlogs(res));
                dispatch(userActions.closeSideBar());
                setIsLoading(false);
            }
            toast({
                position: "top",
                title: res.title,
                description: res.info,
                status: res.status,
                duration: 10000,
                isClosable: true,
            });
        }
        fetchBlogs();
    }, [dispatch, toast]);
    return (
        <AuthenticatedPageLayout>
            {!isLoading && <Blogs blogData = {blogData}/>}
            {isLoading && <LoadingOverlay height = "100%" width = "100%"/>}
        </AuthenticatedPageLayout>
    )
}

export default Homepage;