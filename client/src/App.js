import PasswordResetRequestpage from "./components/pages/PasswordResetRequestpage.js";
import PasswordResetpage from "./components/pages/PasswordResetPage.js";
import Verifyaccountpage from "./components/pages/Verifyaccountpage.js";
import { Redirect, Route, Switch } from "react-router-dom";
import Notfoundpage from "./components/pages/Notfoundpage.js";
import Aboutpage from "../src/components/pages/Aboutpage.js";
import Addblogpage from "./components/pages/Addblogpage.js";
import Signinpage from "./components/pages/Signinpage.js";
import Signuppage from "./components/pages/Signuppage.js";
import Homepage from "./components/pages/Homepage.js";
import Userpage from "./components/pages/Userpage.js";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import "./index.css";

const App = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    return (
        <Box backgroundColor = "#060b10" width = "100%" minHeight = "100vh">
            <Switch>
                <Route path = "/" exact><Signinpage/></Route>
                <Route path = "/auth/signup" exact><Signuppage/></Route>
                <Route path = "/auth/reset" exact><PasswordResetRequestpage/></Route>
                <Route path = "/auth/reset/:token" exact><PasswordResetpage/></Route>
                <Route path = "/auth/verify/:token" exact><Verifyaccountpage/></Route>
                {isLoggedIn && <Route path = "/profile" exact><Userpage/></Route>}
                {isLoggedIn && <Route path = "/home" exact><Homepage/></Route>}
                {isLoggedIn && <Route path = "/about" exact><Aboutpage/></Route>}
                {isLoggedIn && <Route path = "/newblog" exact><Addblogpage/></Route>}
                {isLoggedIn && <Route path = "/users/:userId" exact><Userpage/></Route>}
                {isLoggedIn && <Route path = "*" exact><Notfoundpage/></Route>}
                {!isLoggedIn && <Route path = "*"><Redirect to = "/"/></Route>}
            </Switch>
        </Box>
    )
}

export default App;