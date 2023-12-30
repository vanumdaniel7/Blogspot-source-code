import { userResultActions } from "../../store/index.js";
import { Cross2Icon } from "@radix-ui/react-icons";
import { IconButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const ClearInputButton = () => {
    const dispatch = useDispatch();
    const clearInput = () => {
        dispatch(userResultActions.clearInput());
    }
    return (
        <IconButton onClick = {clearInput} backgroundColor = "transparent" color = "white" _hover = {{ backgroundColor: "transparent" }} _active = {{ backgroundColor: "transparent" }} icon = {<Cross2Icon/>}/>
    )
}

export default ClearInputButton;