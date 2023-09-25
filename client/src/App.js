import AuthPage from "./pages/AuthPage.js";
import HomePage from "./pages/HomePage.js";
import UserPage from "./pages/UserPage.js";
import AddblogPage from "./pages/AddblogPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import NotfoundPage from "./pages/NotfoundPage.js";
import { Redirect, Route, Switch } from "react-router-dom";
import VerifyaccountPage from "./pages/VerifyaccountPage.js";
import ForgotpasswordPage from "./pages/ForgotpasswordPage.js";
import { useSelector } from "react-redux";

const App = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    return (
        <Switch>
            <Route path = "/" exact><AuthPage/></Route>
            <Route path = "/auth/reset/:token" exact><ForgotpasswordPage/></Route>
            <Route path = "/auth/verify/:token" exact><VerifyaccountPage/></Route>
            {isLoggedIn && <Route path = "/auth/profile" exact><ProfilePage/></Route>}
            {isLoggedIn && <Route path = "/home" exact><HomePage/></Route>}
            {isLoggedIn && <Route path = "/new" exact><AddblogPage/></Route>}
            {isLoggedIn && <Route path = "/users/:id" exact><UserPage/></Route>}
            {isLoggedIn && <Route path = "*" exact><NotfoundPage/></Route>}
            {!isLoggedIn && <Route path = "*"><Redirect to = "/"/></Route>}
        </Switch>
    )
}

export default App;