import { Link, useHistory } from "react-router-dom";
import { Center, Button } from "@chakra-ui/react";
import { navbarActions } from "../../store";
import { useDispatch } from "react-redux";

const NavbarOptions = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("datejoined");
        dispatch(navbarActions.logoutHandler());
        history.push("/");
    }

    return (
        <Center position="absolute" left = "100%" top = "30px" transform="translate(-100%,-50%)" gap = {3} pr={3}>
            <Link to = "/home"><Button backgroundColor = "transparent" fontWeight={400}>Home</Button></Link>
            <Link to = "/blogs/new"><Button backgroundColor = "transparent" fontWeight={400}>New Blog</Button></Link>
            <Link to = "/auth/profile"><Button backgroundColor = "transparent" fontWeight={400}>Profile</Button></Link>
            <Button onClick={logoutHandler} backgroundColor = "transparent" fontWeight={400}>Signout</Button>
        </Center>
    )
}

export default NavbarOptions;