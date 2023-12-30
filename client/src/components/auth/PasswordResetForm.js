import { Flex, FormControl, Button, useToast } from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { LockClosedIcon } from "@radix-ui/react-icons";
import InputField from "../UI/InputField.js";
import { useState } from "react";

const PasswordResetForm = () => {
    const toast = useToast();
    const { token } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const passwordResetHandler = async event => {
        try {
            event.preventDefault();
            setIsLoading(true);
            if(newPassword !== confirmNewPassword) {
                return toast({
                    position: "top",
                    title: "Warning",
                    description: "Password confirmation doesn't match Password",
                    status: "warning",
                    duration: 10000,
                    isClosable: true,
                });
            }
            const result = await fetch(`http://localhost:3000/auth/${token}/changepassword?password=${newPassword}`, {
                method: "PATCH",
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
            history.push("/");
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
        <form onSubmit = {passwordResetHandler} style = {{ width: "100%", maxWidth: "400px" }}>
            <Flex gap = "24px" flexDirection = "column" alignItems = "center">
                <FormControl width = "90%">
                    <InputField inputValue = {newPassword} onChangeFunction = {newPassword => setNewPassword(newPassword)} leftIcon = {<LockClosedIcon/>} inputType = "password" inputPlaceholder = "New password"/>
                </FormControl>
                <FormControl width = "90%">
                    <InputField inputValue = {confirmNewPassword} onChangeFunction = {confirmNewPassword => setConfirmNewPassword(confirmNewPassword)} leftIcon = {<LockClosedIcon/>} inputType = "password" inputPlaceholder = "Confirm new password"/>
                </FormControl>
                <Button isLoading = {isLoading} type = "submit" backgroundColor = "#32E6E2" width = "90%" color = "#0C2A2A" height = "36px" _hover = {{ backgroundColor: "#8efbf7" }}>Reset password</Button>
            </Flex>
        </form>
    )
}

export default PasswordResetForm;