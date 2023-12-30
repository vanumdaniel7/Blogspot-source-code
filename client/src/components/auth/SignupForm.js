import { LockClosedIcon, EnvelopeClosedIcon, IdCardIcon } from "@radix-ui/react-icons";
import { Flex, FormControl, Button, useToast } from "@chakra-ui/react";
import InputField from "../UI/InputField.js";
import { useState } from "react";

const SignupForm = () => {
    const toast = useToast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    

    const [isLoading, setIsLoading] = useState(false);
    const signupHandler = async event => {
        setIsLoading(true);
        try{
            event.preventDefault();
            const result = await fetch("http://localhost:3000/auth", {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const res = await result.json();
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
        <form onSubmit = {signupHandler} style = {{ width: "100%", maxWidth: "400px" }}>
            <Flex gap = "16px" flexDirection = "column" alignItems = "center">
                <FormControl width = "90%">
                    <InputField inputValue = {name} onChangeFunction = {name => setName(name)} leftIcon = {<IdCardIcon/>} inputType = "text" inputPlaceholder = "Name"/>
                </FormControl>
                <FormControl width = "90%">
                    <InputField inputValue = {email} onChangeFunction = {email => setEmail(email)} leftIcon = {<EnvelopeClosedIcon/>} inputType = "email" inputPlaceholder = "Email"/>
                </FormControl>
                <FormControl width = "90%">
                    <InputField inputValue = {password} onChangeFunction = {password => setPassword(password)} leftIcon = {<LockClosedIcon/>} inputType = "password" inputPlaceholder = "Password"/>
                </FormControl>
                <Button marginTop = "24px" isLoading = {isLoading} type = "submit" backgroundColor = "#32E6E2" width = "90%" color = "#0C2A2A" height = "36px" _hover = {{ backgroundColor: "#8efbf7" }}>Sign up</Button>
            </Flex>
        </form>
    )
}

export default SignupForm;