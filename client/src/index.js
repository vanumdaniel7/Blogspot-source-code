import App from "./App";
import React from "react";
import store from "./store/index.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store = {store}>
            <ChakraProvider>
                <App/>
            </ChakraProvider>
        </Provider>
    </BrowserRouter>
);