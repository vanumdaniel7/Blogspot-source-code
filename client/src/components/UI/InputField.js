import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

const InputField = ({ inputPlaceholder, inputType, inputValue, leftIcon, onChangeFunction }) => {
    return (
        <InputGroup color = "#abb5bf">
            <InputLeftElement pointerEvents = "none">
                {leftIcon}
            </InputLeftElement>
            <Input required value = {inputValue} onChange = {event => onChangeFunction(event.target.value)} type = {inputType} placeholder = {inputPlaceholder} spellCheck = {false} backgroundColor = "#12181f" fontWeight = "500" border = "1px solid #7e8792" color = "white" _focusVisible = {{ borderColor: "#7e8792" }} _focus = {{ borderColor: "transparent", boxShadow: "0 0 0 0.125rem #8efbf7" }}/>
        </InputGroup>
    )
}

export default InputField;