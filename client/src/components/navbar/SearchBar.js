import { Button, Center, Flex, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Show, useDisclosure, Input, useToast, Spinner } from "@chakra-ui/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { userResultActions } from "../../store/index.js";
import { useSelector, useDispatch } from "react-redux";
import ClearInputButton from "./ClearInputButton.js";
import SearchResults from "./SearchResults.js";
import { useEffect } from "react";

let isInitital = true;

const SearchBar = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isTyping = useSelector(state => state.userResult.isTyping);
    const userResults = useSelector(state => state.userResult.users);
    const inputName = useSelector(state => state.userResult.inputName);

    const changeHandler = event => {
        dispatch(userResultActions.changeInputName(event.target.value));
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(isInitital === true) {
            isInitital = false;
            return;
        }
        const checkInput = () => {
            if(inputName.length > 0) {
                dispatch(userResultActions.makeInputNonEmpty());
            } else {
                dispatch(userResultActions.makeInputEmpty());
            }
        }
        const interval = setTimeout(async () => {
            if(inputName.length > 1) {
                const result = await fetch(`http://localhost:3000/users/?name=${inputName}`, {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": token
                    }
                });
                const res = await result.json();
                if(res.status !== "success") {
                    toast({
                        position: "top",
                        title: res.title,
                        description: res.info,
                        status: res.status,
                        duration: 10000,
                        isClosable: true,
                    });
                } else {
                    dispatch(userResultActions.replace(res.data));
                }
            }
            checkInput();
            dispatch(userResultActions.notTyping());
        }, 500);
        return () => {
            checkInput();
            dispatch(userResultActions.typing());
            clearInterval(interval);
        }
    }, [inputName, dispatch, toast]);

    return (
        <>
            <Show above = "md">
                <Button onClick = {onOpen} padding = "10px" width = {["calc(100% - 120px)", "calc(100% - 120px)", "calc(100% - 120px)", "400px", "400px"]} justifyContent = "left" color = "#ABB5BF" borderWidth = "1px" borderColor = "#3B434C" backgroundColor = "transparent" _hover = {{ borderColor: "#ABB5BF", backgroundColor: "transparent" }} leftIcon = {<MagnifyingGlassIcon/>}>Search Blogspot...</Button>
            </Show>
            <Show below = "md">
                <IconButton onClick = {onOpen} width = "35px" minWidth = "35px" height = "35px" fontWeight = "600" _hover = {{ color: "#8efbf7", backgroundColor: "#0c2a2a" }} _active = {{ backgroundColor: "#0C2A2A" }} _focus = {{ boxShadow: "0 0 0 0.125rem #04a29f", outline: "1px solid #8efbf7", border: "1px solid #04a29f"}} transition = "border-color 0.15s ease-in" color = "#738792" borderColor = "transparent" borderWidth = "2px" backgroundColor = "transparent" icon = {<MagnifyingGlassIcon/>}/>
            </Show>
            <Modal isOpen = {isOpen} onClose = {onClose} size = "lg">
                <ModalOverlay/>
                <ModalContent backgroundColor = "#12181F"  width = "95%">
                    <ModalHeader padding = "16px">
                        <Flex borderRadius = "5px" height = "50px" border = "2px solid #04a29f" outline = "none">
                            <Input value = {inputName} spellCheck = {false} onChange = {changeHandler} flexGrow = "1" fontSize = "20px" color = "white" width = "calc(100% - 50px)" height = "100%" outline = "none" border = "none" _focusVisible = {{ outline: "none", border: "none" }}/>
                            <Center width = "50px" height = "100%">
                                {isTyping ? <Spinner size = "sm" color = "white"/> : (inputName.length > 0 ? <ClearInputButton/> : <></>)}
                            </Center>
                        </Flex>
                    </ModalHeader>
                    <ModalBody padding = "0px">
                        <SearchResults onClickHandler = {onClose} userResults = {userResults}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SearchBar;