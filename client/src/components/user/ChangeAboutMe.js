import { Flex, FormControl, Button, Modal, ModalOverlay, ModalContent, ModalHeader, Text, ModalBody, ModalCloseButton, useDisclosure, useToast, Textarea } from "@chakra-ui/react";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";
import { useState } from "react";

const ChangeAboutMe = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const [aboutMe, setAboutMe] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const changeAboutMeHandler = async event => {
        event.preventDefault();
        setIsLoading(true);
        const token = localStorage.getItem("token");
        try {
            const result = await fetch(`http://localhost:3000/auth/aboutme`, {
                mode: "cors",
                method: "PATCH",
                body: JSON.stringify({
                    aboutMe: aboutMe
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });
            const res = await result.json();
            dispatch(userActions.getAboutMe(aboutMe));
            setAboutMe("");
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
                    <ModalHeader color = "white">Change About Me</ModalHeader>
                    <ModalCloseButton color = "#ABB5BF"/>
                    <ModalBody>
                        <Text color = "#ABB5BF" marginBottom = "20px">Leave the fields you dont want to change</Text>
                        <form onSubmit = {changeAboutMeHandler} style = {{ width: "100%" }}>
                                <FormControl width = "100%">
                                    <Textarea value = {aboutMe} onChange = {event => setAboutMe(event.target.value)} placeholder = "About me" spellCheck = {false} backgroundColor = "#12181f" fontWeight = "500" border = "1px solid #7e8792" color = "white" _focusVisible = {{ borderColor: "#7e8792" }} _focus = {{ borderColor: "transparent", boxShadow: "0 0 0 0.125rem #8efbf7" }}></Textarea>
                                </FormControl>
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

export default ChangeAboutMe;