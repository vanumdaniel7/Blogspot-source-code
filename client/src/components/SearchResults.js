import SearchResultElement from "./SearchResultElement";
import { useSelector } from "react-redux";
import SearchLoader from "./SearchLoader";
import { Box } from "@chakra-ui/react";
import NoResult from "./NoResult.js";

const SearchResults = () => {
    const inputName = useSelector(state => state.navbar.inputName);
    const results = useSelector(state => state.navbar.usersFoundWhileSearching);
    const isTyping = useSelector(state => state.navbar.isTyping);
    return (
        <Box background = "white" width = "calc(100% - 40px - 49px)" position = {["relative","relative","absolute"]} top = {["0px","0px","50px"]} left = {["49px", "49px", "49px"]} boxShadow = "md">
            {!isTyping && results.map(result => <SearchResultElement key = {result.id} id = {result.id} name = {result.name} email = {result.email}/>)}
            {isTyping && inputName.length > 0 && <SearchLoader/>}
            {results.length === 0 && !isTyping && inputName.length > 0 &&<NoResult/>}
        </Box>
    )
}

export default SearchResults;