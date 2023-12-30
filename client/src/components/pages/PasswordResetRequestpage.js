import PasswordResetRequestForm from "../auth/PasswordResetRequestForm.js";
import AuthformLayout from "../layouts/AuthformLayout.js";
import RedirectLinkText from "../UI/RedirectLinkText.js";
import { Flex } from "@chakra-ui/react";

const PasswordResetRequestpage = () => {
    return (
        <AuthformLayout heading = "Reset your password">
            <Flex width = "100%" flexDirection = "column" alignItems = "center" gap = "50px">
                <PasswordResetRequestForm/>
                <RedirectLinkText redirectTo = "/" normalText = "Never mind!" linkText = "Take me back to login"/>
            </Flex>
        </AuthformLayout>
    )
}

export default PasswordResetRequestpage;