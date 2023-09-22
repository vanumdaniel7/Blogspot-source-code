import { GridItem, Center, Image } from "@chakra-ui/react";
import LogoImage from "../../assets/LogoImage.png";

const Logo = () => {
    return (
        <GridItem pl={[10,10,0,0]} gridColumnStart={1} gridRowStart={1} colSpan={[3,2,2,1]} rowSpan={1}>
            <Center width="100%" height="100%">
                <Image src = {LogoImage}></Image>
            </Center>
        </GridItem>
    )
}

export default Logo;