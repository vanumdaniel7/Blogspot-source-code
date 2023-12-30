import AuthformLayout from "../layouts/AuthformLayout.js";
import RedirectLinkText from "../UI/RedirectLinkText.js";
import SignupForm from "../auth/SignupForm.js";
import { Flex } from "@chakra-ui/react";


const Signuppage = () => {
    return (
        <AuthformLayout heading = "Sign up with email">
            <Flex width = "100%" flexDirection = "column" alignItems = "center" gap = "50px">
                <SignupForm/>
                <RedirectLinkText redirectTo = "/" normalText = "Already have an account?" linkText = "Sign in"/>
            </Flex>
        </AuthformLayout>
    )
}

export default Signuppage;