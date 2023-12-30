import { Flex, FormControl, Button, Modal, ModalOverlay, ModalContent, ModalHeader, Text, ModalBody, ModalCloseButton, useDisclosure, useToast } from "@chakra-ui/react";
import { Pencil1Icon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../UI/InputField";
import { userActions } from "../../store";

const ChangeProfile = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const changeDetailsHandler = async event => {
        setIsLoading(true);
        event.preventDefault();
        const token = localStorage.getItem("token");
        try {
            const result = await fetch(`http://localhost:3000/auth`, {
                mode: "cors",
                method: "PATCH",
                body: JSON.stringify({
                    name: name,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });
            const res = await result.json();
            if(name !== "") {
                dispatch(userActions.getName(name));
            }
            setName("");
            setPassword("");
            onClose();
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
        }
        setIsLoading(false);
    }
    return (
        <>
            <Button onClick = {onOpen} variant = "outline" leftIcon = {<Pencil1Icon/>} color = "#04a29f" border = "1px solid #04a29f" _hover = {{ color: "#32E6E2" }} _active = {{ backgroundColor: "transparent" }} _focus = {{ boxShadow: "0 0 0 0.125rem #04a29f", outline: "1px solid #8efbf7", border: "1px solid #04a29f"}}>Edit</Button>
            <Modal isOpen = {isOpen} onClose = {onClose}>
                <ModalOverlay/>
                <ModalContent backgroundColor = "#12181F">
                    <ModalHeader color = "white">Change Details</ModalHeader>
                    <ModalCloseButton color = "#ABB5BF"/>
                    <ModalBody>
                        <Text color = "#ABB5BF" marginBottom = "20px">Leave the fields you dont want to change</Text>
                        <form onSubmit = {changeDetailsHandler} style = {{ width: "100%" }}>
                            <Flex gap = "16px" flexDirection = "column" alignItems = "center">
                                <FormControl width = "100%">
                                    <InputField inputValue = {name} onChangeFunction = {name => setName(name)} leftIcon = {<PersonIcon/>} inputType = "text" inputPlaceholder = "Name"/>
                                </FormControl>
                                <FormControl width = "100%">
                                    <InputField inputValue = {password} onChangeFunction = {password => setPassword(password)} leftIcon = {<LockClosedIcon/>} inputType = "password" inputPlaceholder = "Password"/>
                                </FormControl>
                            </Flex>
                            <Flex marginTop = "24px" flexDirection = "column" alignItems = "center" height = "80px" justifyContent = "space-between">
                                <Button isLoading = {isLoading} type = "submit" backgroundColor = "#32E6E2" width = "100%" color = "#0C2A2A" height = "36px" _hover = {{ backgroundColor: "#8efbf7" }}>Save changes</Button>
                            </Flex>
                        </form>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}

export default ChangeProfile;