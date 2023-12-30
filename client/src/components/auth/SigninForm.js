import { LockClosedIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Flex, FormControl, Button, useToast } from "@chakra-ui/react";
import { userActions } from "../../store/index.js";
import RedirectLink from "../UI/RedirectLink.js";
import { useHistory } from "react-router-dom";
import InputField from "../UI/InputField.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SigninForm = () => {
    const toast = useToast();
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const signinHandler = async event => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const result = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const res = await result.json();
            if(res.token) {
                localStorage.setItem("token", res.token);
                localStorage.setItem("userId", res.data.userId);
            }
            if(res.status === "success") {
                history.push("/home");
                dispatch(userActions.loginHandler());
            }
            toast({
                position: "top",
                title: res.title,
                description: res.info,
                status: res.status,
                duration: 10000,
                isClosable: true,
            });
        } catch(err) {
            toast({
                position: "top",
                title: "Error",
                description: "An error occured, please try again later",
                status: "error",
                duration: 10000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <form onSubmit = {signinHandler} style = {{ width: "100%", maxWidth: "400px" }}>
            <Flex gap = "16px" flexDirection = "column" alignItems = "center">
                <FormControl width = "90%">
                    <InputField inputValue = {email} onChangeFunction = {email => setEmail(email)} leftIcon = {<EnvelopeClosedIcon/>} inputType = "email" inputPlaceholder = "Email"/>
                </FormControl>
                <FormControl width = "90%">
                    <InputField inputValue = {password} onChangeFunction = {password => setPassword(password)} leftIcon = {<LockClosedIcon/>} inputType = "password" inputPlaceholder = "Password"/>
                </FormControl>
            </Flex>
            <Flex marginTop = "15px" flexDirection = "column" alignItems = "center" height = "80px" justifyContent = "space-between">
                <RedirectLink redirectTo = "/auth/reset" linkText = "Forgot your password?"/>
                <Button isLoading = {isLoading} type = "submit" backgroundColor = "#32E6E2" width = "90%" color = "#0C2A2A" height = "36px" _hover = {{ backgroundColor: "#8efbf7" }}>Sign in</Button>
            </Flex>
        </form>
    )
}

export default SigninForm;