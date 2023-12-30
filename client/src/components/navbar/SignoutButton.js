import { Button, IconButton, Show } from "@chakra-ui/react";
import { ExitIcon } from "@radix-ui/react-icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";

const SignoutButton = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const signoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        dispatch(userActions.logoutHandler());
        history.push("/");
    }
    return (
        <>
            <Show above = "md">
                <Button fontWeight = "600" onClick = {signoutHandler} _hover = {{ backgroundColor: "#32E6E2" }} _active = {{ outline: "2px solid #32E6E2" }} transition = "border-color 0.15s ease-in" color = "#0C2A2A" borderColor = "transparent" borderWidth = "2px" backgroundColor = "#32E6E2" leftIcon={<ExitIcon/>}>Signout</Button>
            </Show>
            <Show below = "md">
                <IconButton width = "35px" minWidth = "35px" height = "35px" fontWeight = "600" onClick = {signoutHandler} _hover = {{ color: "#8efbf7", backgroundColor: "#0c2a2a" }} _active = {{ backgroundColor: "#0C2A2A" }} _focus = {{ boxShadow: "0 0 0 0.125rem #04a29f", outline: "1px solid #8efbf7", border: "1px solid #04a29f"}} transition = "border-color 0.15s ease-in" color = "#738792" borderColor = "transparent" borderWidth = "2px" backgroundColor = "transparent" icon = {<ExitIcon/>}/>
            </Show>
        </>
    )
}

export default SignoutButton;