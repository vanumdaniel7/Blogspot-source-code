import { Flex, Text } from "@chakra-ui/react";
import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

const SearchResults = ({ userResults, onClickHandler }) => {
    const isTyping = useSelector(state => state.userResult.isTyping);
    const inputName = useSelector(state => state.userResult.inputName);
    return (
        <>
            <Text fontSize = "14px" fontWeight = "600" paddingX = "20px" paddingY = "8px" backgroundColor = "#1E242C" color = "#ABB5BF">{userResults.length === 0 && inputName.length > 1 && isTyping === false ? `No results for "${inputName}". Try another name` : "Search Results"}</Text>
            <Flex flexDirection = "column" gap = "10px" paddingX = "8px" paddingY = "8px" width = "100%">
                {userResults.map((userResult, i) => <SearchResult onClickHandler = {onClickHandler} key = {i} userId = {userResult.userId} name = {userResult.name} email = {userResult.email}/>)}
            </Flex>
        </>
    )
}

export default SearchResults;