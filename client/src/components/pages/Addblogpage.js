import { Box, Flex, Heading, Input, FormControl, FormHelperText, FormLabel, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import AuthenticatedPageLayout from "../layouts/AuthenticatedPageLayout";
import { userActions } from "../../store/index.js";
import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const Addblogpage = () => {
    const toast = useToast();
    const history = useHistory();
    const editorRef = useRef(null);
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.closeSideBar());
    }, [dispatch]);
    const submitHandler = async event => {
        try {
            event.preventDefault();
            const result = await fetch("http://localhost:3000/blogs/", {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({
                    tags: tags,
                    content: editorRef.current.getContent()
                }),
                headers: {
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            });
            const res = await result.json();
            toast({
                position: "top",
                title: res.title,
                description: res.info,
                status: res.status,
                duration: 10000,
                isClosable: true,
            });
            history.push("/home");
        } catch(err) {
            toast({
                position: "top",
                title: "Error",
                description: "An error occured, please try again later",
                status: "error",
                duration: 10000,
                isClosable: true,
            });
        }
    }
    const addTagHandler = event => {
        if (event.key === "Enter" && newTag.trim().length > 0 && tags.length < 5) {
            if (!tags.includes(newTag.trim())) {
                setTags(prevTags => [...prevTags, newTag.trim()]);
                setNewTag("");
            }
        }
    }
    const changeNewTagHandler = event => {
        setNewTag(event.target.value);
    }
    const removeTagHandler = indexToRemove => {
        setTags(prevTags => prevTags.filter((_, index) => index !== indexToRemove));
    }
    return (
        <AuthenticatedPageLayout>
            <Flex flexDirection = "column" padding = {["24px", "24px", "40px", "40px", "40px"]} backgroundColor = "#12181F" width = "100%"  border = "1px solid #1E242C" borderRadius = "10px" boxShadow = "0 1px 0.625rem 0 #12181F99, 0 0.125rem 0.25rem 0 #12181F">
                <Heading height = "50px" color = "#32E6E2" overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap">Create a blog</Heading>
                <Box marginTop = "16px">
                    <form onSubmit = {submitHandler} onKeyDown = {event => event.key === "Enter" && event.preventDefault()}>
                        <FormControl marginBottom = "16px">
                            <FormLabel color = "white">Body</FormLabel>
                            <FormHelperText marginBottom = "8px" color = "#ABB5BF">Include all the information here</FormHelperText>
                            <Editor
                                onInit = {(_, editor) => editorRef.current = editor}
                                apiKey = "c7xjwpqe1q970nm5l2n2qcounctdfswbszrp0uxgyuh3ven4"
                                init = {{
                                    height: "300px",
                                    menubar: false,
                                    paste_as_text: true,
                                    paste_data_images: false,
                                    formats: {
                                        blockquote: { block: "blockquote", classes: "tinymce-blockquote" },
                                        h1: { block: "h1", classes: "tinymce-h1" },
                                        h2: { block: "h2", classes: "tinymce-h2" }
                                    },
                                    toolbar: `
                                        undo redo |
                                        aligncenter alignjustify alignleft alignnone |
                                        backcolor forecolor |
                                        bold italic underline |
                                        copy cut |
                                        h1 h2 |
                                        indent outdent |
                                        strikethrough styleselect subscript superscript blockquote |
                                        `,
                                    content_style: `
                                        body {
                                            background-color: #12181F !important;
                                            color: white !important;
                                        }
                                        blockquote {
                                            border-radius: 3px !important;
                                            border-left: 3px solid #32E6E2 !important;
                                            margin-left: 1.5rem !important;
                                            padding-left: 1rem !important;
                                        }
                                        h1 {
                                            color: #32E6E2 !important
                                        }
                                        h2 {
                                            color: #32E6E2 !important
                                        }
                                    `
                                }}
                            />
                        </FormControl>
                        <FormControl marginBottom = "16px">
                            <FormLabel color = "white">Tags</FormLabel>
                            <FormHelperText color = "#ABB5BF" marginBottom = "8px">Add up to 5 tags to describe what your blog is about. Hit enter to add a tag.</FormHelperText>
                            <Input autoComplete = "off" onKeyDown = {event => addTagHandler(event)} value = {newTag} onChange = {event => changeNewTagHandler(event)} flexGrow = {1} spellCheck = {false} backgroundColor = "#12181f" fontWeight = "500" border = "2px solid #7e8792" padding = "calc(.5rem - 1px) calc(1rem - 1px)" color = "white" _focusVisible = {{ borderColor: "#7e8792" }} _focus = {{ borderColor: "transparent", boxShadow: "0 0 0 0.125rem #8efbf7" }}/>
                        </FormControl>
                        <Flex gap = "10px" wrap = "wrap" marginBottom = "16px">
                            {
                                tags.map((tag, i) => {
                                    return (
                                    <Tag key = {i} variant = "outline" colorScheme = "cyan">
                                        <TagLabel>{tag}</TagLabel>
                                        <TagCloseButton onClick = {() => removeTagHandler(i)}/>
                                    </Tag>
                                )
                            })}
                        </Flex>
                        <Input width = "fit-content" type = "submit" value = "Submit" fontWeight = "600" _hover = {{ backgroundColor: "#32E6E2" }} _active = {{ outline: "2px solid #32E6E2" }} transition = "border-color 0.15s ease-in" color = "#0C2A2A" borderColor = "transparent" borderWidth = "2px" backgroundColor = "#32E6E2"/>
                    </form>
                </Box>
            </Flex>
        </AuthenticatedPageLayout>
    )
}

export default Addblogpage;