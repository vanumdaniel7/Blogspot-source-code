import { Flex, FormControl, Button, useToast } from "@chakra-ui/react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import InputField from "../UI/InputField.js";
import { useState } from "react";

const PasswordResetRequestForm = () => {
    const toast = useToast();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const forgotPasswordRequestHandler = async event => {
        event.preventDefault();
        setIsLoading(true);
        const result = await fetch(`http://localhost:3000/auth/resetemail?email=${email}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
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
        setIsLoading(false);
    }
    return (
        <form onSubmit = {forgotPasswordRequestHandler} style = {{ width: "100%", maxWidth: "400px" }}>
            <Flex gap = "24px" flexDirection = "column" alignItems = "center">
                <FormControl width = "90%">
                    <InputField inputValue = {email} onChangeFunction = {email => setEmail(email)} leftIcon = {<EnvelopeClosedIcon/>} inputType = "email" inputPlaceholder = "Email"/>
                </FormControl>
                <Button isLoading = {isLoading} type = "submit" backgroundColor = "#32E6E2" width = "90%" color = "#0C2A2A" height = "36px" _hover = {{ backgroundColor: "#8efbf7" }}>Get reset link</Button>
            </Flex>
        </form>
    )
}

export default PasswordResetRequestForm;