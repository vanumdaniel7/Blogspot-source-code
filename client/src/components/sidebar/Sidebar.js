import { Box, Flex, Hide, Show, useDisclosure } from "@chakra-ui/react";
import ListItem from "./ListItem.js";
import LogoSmall from "./LogoSmall";
import LogoBig from "./LogoBig";

function Sidebar() {
    const listItems = [
        {
            to: "/home",
            icon: <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#94a5a8" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z" fill="#94a5a8"></path> </g></svg>,
            label: "Home"
        },
        {
            to: "/new",
            icon: <svg width="24px" height="24px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#94a5a8" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M55.5,23.9V53.5a2,2,0,0,1-2,2h-43a2,2,0,0,1-2-2v-43a2,2,0,0,1,2-2H41.64"></path><path d="M19.48,38.77l-.64,5.59a.84.84,0,0,0,.92.93l5.56-.64a.87.87,0,0,0,.5-.24L54.9,15.22a1.66,1.66,0,0,0,0-2.35L51.15,9.1a1.67,1.67,0,0,0-2.36,0L19.71,38.28A.83.83,0,0,0,19.48,38.77Z"></path><line x1="44.87" y1="13.04" x2="50.9" y2="19.24"></line></g></svg>,
            label: "New Blog"
        },
        {
            to: "/auth/profile",
            icon: <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#94a5a8"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598" id="profile_round-[#94a5a8]"></path></g></g></g></g></svg>,
            label: "Profile"
        },
        {
            to: "/",
            icon: <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H6ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289Z" fill="#94a5a8"></path> </g></svg>,
            label: "Signout"
        }
    ];
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box justifyContent = {isOpen ? "left" : "center"} width = {["100%", "100%", isOpen ? "230px" : "55px", isOpen ? "230px" : "55px", isOpen ? "230px" : "55px"]} height = {["60px", "60px", "100vh", "100vh", "100vh"]} backgroundColor = "#001d22" transition = "width 0.3s ease-in-out">
            <Flex overflow = "hidden" onClick = {onToggle} padding = "10px" alignItems = "center" width = "100%" height = {["100%", "100%", "60px", "60px", "60px"]} borderBottom = "1px solid #466963">
                <Hide below = "md">
                    {isOpen ? <LogoBig/> : <LogoSmall/>}
                </Hide>
                <Show below = "md">
                    <LogoBig/>
                </Show>
            </Flex>
            <Flex height = {["60px", "60px", "fit-content", "fit-content", "fit-content"]} borderTop = {["1px solid #466963", "1px solid #466963", "none", "none", "none"]} backgroundColor = {"#001d22"} position = {["absolute", "absolute", "static", "static", "static"]} flexDirection = {["row", "row", "column", "column", "column"]} width = {["100vw", "100vw", "100%", "100%", "100%"]} bottom = {["0%", "0%", "0%", "0%", "0%"]} alignItems = "center" paddingX = "10px" paddingY = "15px" gap = "15px">
                {listItems.map((listItem, i) => <ListItem key = {i} to = {listItem.to} isOpen = {isOpen} icon = {listItem.icon} label = {listItem.label}/>)}
            </Flex>
        </Box>
    )
}

export default Sidebar;