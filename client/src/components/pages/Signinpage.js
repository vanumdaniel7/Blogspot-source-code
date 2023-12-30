import AuthformLayout from "../layouts/AuthformLayout.js";
import RedirectLinkText from "../UI/RedirectLinkText.js";
import SigninForm from "../auth/SigninForm.js";
import { Flex } from "@chakra-ui/react";

const SigninPage = () => {
    return (
        <AuthformLayout heading = "Sign in to Blogspot">
            <Flex width = "100%" flexDirection = "column" alignItems = "center" gap = "50px">
                <SigninForm/>
                <RedirectLinkText redirectTo = "/auth/signup" normalText = "Don't have an account yet?" linkText = "Sign up"/>
            </Flex>
        </AuthformLayout>
    )
}

export default SigninPage;