import NavbarOptions from './NavbarOptions.js';
import { Grid } from '@chakra-ui/react';
import SearchBar from './SearchBar.js';
import Logo from './Logo.js';

function Navbar() {
    return (
        <>
            <Grid zIndex={2} paddingLeft = "15px" backgroundColor="white" gap={2} height="60px" width="100%" templateRows="repeat(1,1fr)" templateColumns="repeat(12,1fr)" border="grey.200" borderWidth="1px" shadow="md" position="fixed" top="0px">
                <Logo/>
                <SearchBar/>
                <NavbarOptions/>
            </Grid>
        </>
    )
}

export default Navbar;