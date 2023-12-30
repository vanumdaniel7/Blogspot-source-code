import PasswordResetForm from "../auth/PasswordResetForm.js";
import AuthformLayout from "../layouts/AuthformLayout.js";
import RedirectLinkText from "../UI/RedirectLinkText.js";
import { Flex } from "@chakra-ui/react";

const PasswordResetpage = () => {
    return (
        <AuthformLayout heading = "Reset your password">
            <Flex width = "100%" flexDirection = "column" alignItems = "center" gap = "50px">
                <PasswordResetForm/>
                <RedirectLinkText redirectTo = "/" normalText = "Never mind!" linkText = "Take me back to login"/>
            </Flex>
        </AuthformLayout>
    )
}

export default PasswordResetpage;