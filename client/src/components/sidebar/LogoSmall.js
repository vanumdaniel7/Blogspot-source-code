import { Image } from "@chakra-ui/react";
import IconImage from "../../assets/IconDarkTheme.png";

function LogoSmall() {
    return (
        <Image src = {IconImage} height = "32px" minWidth = "32px"></Image>
    )
}

export default LogoSmall;