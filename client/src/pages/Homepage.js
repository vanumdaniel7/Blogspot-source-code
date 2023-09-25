import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";
import { blogsActions } from "../store/index.js";
import { useToast } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

let isInitial = true;

const HomePage = () => {
    const toast = useToast();
    const loadcnt = useSelector(state => state.blogs.loadcnt);
    const dispatch = useDispatch();
    useEffect(() => {
        if(isInitial === true) {
            isInitial = false;
            return;
        }
        const fetchBlogs = async () => {
            dispatch(blogsActions.getSpinner());
            const token = localStorage.getItem("token");
            const result = await fetch(`http://localhost:3000/blogs/load/${loadcnt}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });
            const res = await result.json();
            if(res.status === "success") {
                dispatch(blogsActions.addBlogs(res));
            } else {
                toast({
                    position: "top",
                    title: res.title,
                    description: res.info,
                    status: res.status,
                    duration: 10000,
                    isClosable: true,
                });
            }
            dispatch(blogsActions.removeSpinner());
        }
        fetchBlogs();
    }, [loadcnt, dispatch, toast]);
    return (
        <Box width = "100vw" height = "100vh" backgroundColor = "#f0f7f4">
            <Sidebar/>
        </Box>
    )
}

export default HomePage;