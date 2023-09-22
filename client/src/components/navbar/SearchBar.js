import { GridItem, InputGroup, InputLeftAddon, Input, useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import SearchResults from "../SearchResults";
import { navbarActions } from "../../store";
import { useEffect } from "react";

let isInitital = true;

const SearchBar = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const inputName = useSelector(state => state.navbar.inputName);
    const changeHandler = event => {
        dispatch(navbarActions.changeInputName(event.target.value));
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(isInitital === true) {
            isInitital = false;
            return;
        }
        const checkInput = () => {
            if(inputName.length > 0) {
                dispatch(navbarActions.makeInputNonEmpty());
            } else {
                dispatch(navbarActions.makeInputEmpty());
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
                if(!result.ok) {
                    toast({
                        position: "top",
                        title: res.title,
                        description: res.info,
                        status: res.status,
                        duration: 10000,
                        isClosable: true,
                    });
                }
                else {
                    dispatch(navbarActions.replace(res.data));
                }
            }
            checkInput();
            dispatch(navbarActions.notTyping());
        }, 500);
        return () => {
            checkInput();
            dispatch(navbarActions.typing());
            clearInterval(interval);
        }
    }, [inputName, dispatch, toast]);
    return (
        <GridItem position = "relative" gridColumnStart={[2,3,3,4,5]} gridRowStart={1} colSpan={[6,6,4,4,4]} rowSpan={1} maxW={["0px","200px","320px","450px","1000px"]}>
            <InputGroup position="relative" top="50%" transform="translateY(-50%)">
                <InputLeftAddon children="@"></InputLeftAddon>
                <Input autoComplete = "false" value = {inputName} onChange = {changeHandler} focusBorderColor="teal.400"/>
            </InputGroup>
            <SearchResults/>
        </GridItem>
    )
}

export default SearchBar;