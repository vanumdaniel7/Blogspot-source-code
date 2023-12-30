import AuthenticatedPageLayout from "../layouts/AuthenticatedPageLayout";
import { Box, Grid, GridItem, useToast } from "@chakra-ui/react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "../UI/LoadingOverlay.js";
import { userActions } from "../../store/index.js";
import OverviewCard from "../user/OverviewCard.js";
import AboutMeCard from "../user/AboutMeCard.js";
import AreaGraph from "../UI/AreaGraph.js";
import Blogs from "../blog/Blogs.js";
import { useState, useEffect } from "react";

const Userpage = () => {
    const toast = useToast();
    const history = useHistory();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(false);
    const blogs = useSelector(state => state.user.blogs);
    const userId = useParams().userId || localStorage.getItem("userId");
    const userDetails = useSelector(state => state.user.details);
    useEffect(() => {
        const fetchUserDetails = async () => {
            setIsLoading(true);
            dispatch(userActions.closeSideBar());
            const Id = parseInt(userId);
            if(isNaN(Id)) {
                history.push("/home");
                return;
            }
            const result = await fetch(`http://localhost:3000/users/${parseInt(userId)}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });
            const res = await result.json();
            if(res.status === "success") {
                dispatch(userActions.getDetails(res.details));
            }
            toast({
                position: "top",
                title: res.title,
                description: res.info,
                status: res.status,
                duration: 10000,
                isClosable: true,
            });
            setIsLoading(false);
        }
        fetchUserDetails();
    }, [dispatch, history, userId, toast, token]);
    useEffect(() => {
        const fetchUserBlogs = async () => {
            const Id = parseInt(userId);
            if(isNaN(Id)) {
                history.push("/home");
                return;
            }
            const result = await fetch(`http://localhost:3000/users/${parseInt(userId)}/blogs/`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });
            const res = await result.json();
            if(res.status === "success") {
                dispatch(userActions.getBlogs(res.data));
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
        fetchUserBlogs();
    }, [userId, dispatch, toast, history, token]);
    return (
        <AuthenticatedPageLayout>
            {isLoading && <LoadingOverlay height = "100%" width = "100%"/>}
            {!isLoading && <>
                <Grid width = "100%" height = {["fit-content", "fit-content", "fit-content", "360px", "400px"]} gap = {["15px", "20px", "20px", "20px", "20px"]} templateColumns = "repeat(12, 1fr)" templateRows = "repeat(12, 1fr)">
                    <GridItem colSpan = {["12", "12", "12", "5", "6"]} rowStart = {["auto", "auto", "auto", "1", "1"]} rowSpan = "6" fontSize = "20px">
                        <OverviewCard {...userDetails}/>
                    </GridItem>
                    <GridItem colSpan = {["12", "12", "12", "5", "6"]} rowStart = {["auto", "auto", "auto", "7", "7"]} rowSpan = "6" fontSize = "20px">
                        <AboutMeCard {...userDetails}/>
                    </GridItem>
                    <GridItem colSpan = {["12", "12", "12", "7", "6"]} rowStart = {["auto", "auto", "auto", "1", "1"]} rowSpan = "12" fontSize = "20px">
                        <AreaGraph data = {userDetails.countForEachMonth}/>
                    </GridItem>
                </Grid>
                <Box paddingY = "20px">
                    <Blogs blogData = {blogs}/>
                </Box>
            </>}
        </AuthenticatedPageLayout>
    )
}

export default Userpage;